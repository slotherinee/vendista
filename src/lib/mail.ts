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
    const testResult = await transport.verify()
    console.log(testResult)
  } catch (error) {
    console.error({ error })
    return
  }

  try {
    const sendResult = await transport.sendMail({
      from,
      to,
      subject,
      html: body,
      replyTo,
    })
    console.log(sendResult)
  } catch (error) {
    console.log(error)
  }
}
