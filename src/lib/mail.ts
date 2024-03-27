import nodemailer from 'nodemailer'

export async function sendMail({
  from,
  to,
  subject,
  body,
  replyTo,
}: {
  from: string
  to: string
  subject: string
  body: string
  replyTo: string
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  })

  try {
    await transport.verify()
  } catch (error) {
    console.error({ error })
    return
  }

  try {
    await transport.sendMail({
      from,
      to,
      subject,
      html: body,
      replyTo,
    })
  } catch (error) {
    console.log(error)
  }
}
