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
    await new Promise((resolve, reject) => {
      transport.sendMail(
        {
          from,
          to,
          subject,
          html: body,
          replyTo,
        },
        (error, info) => {
          if (error) {
            console.error({ error })
            reject(error)
          } else {
            console.log({ info })
            resolve(info)
          }
        }
      )
    })
  } catch (error) {
    console.log(error)
  }
}
