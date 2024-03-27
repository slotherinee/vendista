'use client'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().trim().min(2, 'Имя должно содержать не менее 2 символов'),
  phoneNumber: z
    .string()
    .trim()
    .min(11, 'Номер телефона должен содержать не менее 11 символов')
    .regex(/^\+?[0-9]+$/, 'Номер телефона должен быть в формате +79991232552'),
  email: z.string().trim().email('Неверный формат email'),
  message: z
    .string()
    .trim()
    .min(10, 'Сообщение должно содержать не менее 10 символов'),
})

const Form = () => {
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
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      return response.json()
    } catch (error) {
      console.log(error)
    } finally {
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div>
        <label
          htmlFor='name'
          className='block mb-1 text-sm font-medium text-gray-700'
        >
          Имя
        </label>
        <input
          {...register('name')}
          className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-emerald-600'
          id='name'
          placeholder='Ваше имя'
          type='text'
        />
        {errors.name && (
          <p className='text-sm mt-1 text-red-500'>{`${errors.name.message}`}</p>
        )}
      </div>
      <div>
        <label
          htmlFor='phoneNumber'
          className='block mb-1 text-sm font-medium text-gray-700'
        >
          Номер телефона
        </label>
        <input
          {...register('phoneNumber')}
          id='phoneNumber'
          placeholder='+79991231212'
          type='number'
          className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-emerald-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
        />
        {errors.phoneNumber && (
          <p className='text-sm mt-1 text-red-500'>{`${errors.phoneNumber.message}`}</p>
        )}
      </div>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          Email
        </label>
        <input
          {...register('email')}
          className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-emerald-600'
          id='email'
          placeholder='Ваш email'
          type='email'
        />
        {errors.email && (
          <p className='text-sm mt-1 text-red-500'>{`${errors.email.message}`}</p>
        )}
      </div>
      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          Сообщение
        </label>
        <textarea
          {...register('message', {
            required: 'Нужно указать сообщение',
            minLength: {
              value: 10,
              message: 'Сообщение должно содержать не менее 10 символов',
            },
          })}
          className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-emerald-600'
          id='message'
          placeholder='Ваше сообщение'
        ></textarea>
        {errors.message && (
          <p className='text-sm mt-1 text-red-500'>{`${errors.message.message}`}</p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        type='submit'
        className='items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-emerald-700 h-10 px-4 py-2 hidden sm:block bg-emerald-600 text-white w-full'
      >
        {isSubmitting ? 'Отправляем' : 'Отправить'}
      </button>
    </form>
  )
}
export default Form
