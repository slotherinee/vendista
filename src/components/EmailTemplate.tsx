import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  phoneNumber: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  phoneNumber,
  email,
  message,
}) => (
  <div>
    <h1>
      Новое сообщение с сайта <a href='https://digichips.ru'>digichips.ru</a>
    </h1>
    <h2>Детали сообщения</h2>
    <p>
      <strong>Имя клиента:</strong> {firstName}
    </p>
    <p>
      <strong>Номер телефона клиента:</strong> +{phoneNumber}
    </p>
    <p>
      <strong>Email клиента:</strong> {email}
    </p>
    <p>
      <strong>Сообщение от клиента:</strong> {message}
    </p>
  </div>
)
