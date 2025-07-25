import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if API key is properly configured
    if (
      !process.env.RESEND_API_KEY ||
      process.env.RESEND_API_KEY === "your_resend_api_key_here"
    ) {
      console.error("RESEND_API_KEY is not properly configured");
      return NextResponse.json(
        { error: "Server configuration error: RESEND_API_KEY not set" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    const sendFrom = `${name || "Website Contact"} <website@figbuffalo.com>`;
    const sendTo = ["figbuffalo@gmail.com"];

    const { data, error } = await resend.emails.send({
      from: sendFrom,
      to: sendTo,
      subject: `FigBuffalo.com inquiry: ${subject || "Contact Form Submission"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <strong>Name:</strong> ${name || "Not provided"}
          </div>
          
          <div style="margin: 20px 0;">
            <strong>Email:</strong> ${email || "Not provided"}
          </div>
          
          <div style="margin: 20px 0;">
            <strong>Subject:</strong> ${subject || "Not provided"}
          </div>
          
          <div style="margin: 20px 0;">
            <strong>Message:</strong>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message ? message.replace(/\n/g, "<br>") : "No message provided"}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="color: #666; font-size: 14px;">
            This email was sent from the contact form on your website.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Subject: ${subject || "Not provided"}

Message:
${message || "No message provided"}

---
This email was sent from the contact form on your website.
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
}
