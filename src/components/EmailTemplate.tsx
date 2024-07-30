import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h2>New Website Inquiry:</h2>
    <h4>{subject}</h4>
    <p>{message}</p>
    <p>{name}</p>
    <p>{email}</p>
  </div>
)
