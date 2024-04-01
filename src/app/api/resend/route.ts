import { EmailTemplate } from '@/components/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest, response: NextResponse) {
  const { name, phoneNumber, email, message } = await request.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'digichips.ru@digichips.ru',
      to: `${process.env.SMTP_EMAIL}`,
      subject: 'Новое сообщение от клиента с сайта digichips.ru',
      react: EmailTemplate({ firstName: name, phoneNumber, email, message }),
      reply_to: email,
      text: `Новое сообщение с сайта digichips.ru. Имя: ${name}\nТелефон: ${phoneNumber}\nEmail: ${email}\nСообщение: ${message}`,
    })
    if (error) {
      return Response.json({ error })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
