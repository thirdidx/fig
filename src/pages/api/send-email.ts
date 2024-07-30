/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

import { EmailTemplate } from '~/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req

  const name = typeof query.name === 'string' ? query.name : undefined
  const email = typeof query.email === 'string' ? query.email : undefined
  const subject = typeof query.subject === 'string' ? query.subject : undefined
  const message = typeof query.message === 'string' ? query.message : undefined

  const sendFrom = `${name} <website@figbuffalo.com>`
  const sendTo = ['figbuffalo@gmail.com']

  try {
    const { data, error } = await resend.emails.send({
      from: sendFrom,
      to: sendTo,
      subject: `FigBuffalo.com inquiry: ${subject}`,
      react: EmailTemplate({ name, email, subject, message }),
    })

    if (error) {
      res.status(400).json({ error })
    }

    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ error })
  }
}
