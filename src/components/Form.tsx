'use client'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useToast } from './ui/use-toast'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'

const phoneRegex = /^\+?7(\d{10})$/

const formSchema = z.object({
  name: z.string().trim().min(2, 'Имя должно содержать не менее 2 символов'),
  phoneNumber: z
    .string()
    .trim()
    .min(11, 'Номер телефона должен содержать не менее 11 символов')
    .regex(phoneRegex, 'Неверный формат номера телефона. Пример: +79991231212'),
  email: z.string().trim().email('Неверный формат email'),
  message: z
    .string()
    .trim()
    .min(10, 'Сообщение должно содержать не менее 10 символов'),
})

const Form = () => {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await fetch('/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      toast({ description: 'Ваше сообщение было отправлено!' })
      const emailData = await response.json()
      return emailData
    } catch (error) {
      console.log(error)
      toast({
        description:
          'К сожалению, произошла ошибка. Попробуйте отправить запрос позже.',
      })
    } finally {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <Label htmlFor='name' className='inline-block mb-1.5'>
          Имя
        </Label>
        <Input {...register('name')} placeholder='Имя' type='text' id='name' />
        {errors.name && (
          <p className='text-sm mt-1 text-red-500'>{`${errors.name.message}`}</p>
        )}
      </div>
      <div>
        <Label htmlFor='phoneNumber' className='block mb-1.5'>
          Номер телефона
        </Label>
        <Input
          {...register('phoneNumber')}
          id='phoneNumber'
          placeholder='+79991231212'
          type='number'
          className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
        />
        {errors.phoneNumber && (
          <p className='text-sm mt-1 text-red-500'>{`${errors.phoneNumber.message}`}</p>
        )}
      </div>
      <div>
        <Label htmlFor='email' className='block mb-1.5'>
          Email
        </Label>
        <Input
          {...register('email')}
          id='email'
          placeholder='Ваш email'
          type='email'
        />

        {errors.email && (
          <p className='text-sm mt-1 text-red-500'>{`${errors.email.message}`}</p>
        )}
      </div>
      <div>
        <Label htmlFor='message' className='block mb-1.5'>
          Сообщение
        </Label>
        <Textarea
          {...register('message')}
          id='message'
          placeholder='Ваше сообщение'
        />
        {errors.message && (
          <p className='text-sm mt-1 text-red-500'>{`${errors.message.message}`}</p>
        )}
      </div>
      <Button
        disabled={isSubmitting}
        type='submit'
        className='w-full bg-emerald-600 hover:bg-emerald-700'
      >
        {isSubmitting ? 'Отправляем' : 'Отправить'}
      </Button>
    </form>
  )
}
export default Form
