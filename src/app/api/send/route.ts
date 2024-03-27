import { sendMail } from '@/lib/mail'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest, response: NextResponse) {
  const { name, phoneNumber, email, message } = await request.json()

  try {
    await sendMail({
      from: email,
      to: process.env.SMTP_EMAIL!,
      subject: 'Новое сообщение с формы вебсайта от клиента.',
      body: `
      <h1>Новое сообщение с формы вебсайта</h1>
      <p><strong>Имя клиента:</strong> ${name}</p>
      <p><strong>Телефон клиента:</strong> ${phoneNumber}</p>
      <p><strong>Email клиента:</strong> ${email}</p>
      <p><strong>Сообщение клиента:</strong> ${message}</p>
    `,
      replyTo: email,
    })
    return new Response('Email sent successfully', { status: 200 })
  } catch (error) {
    return new Response('Error sending email', { status: 500 })
  }
}
