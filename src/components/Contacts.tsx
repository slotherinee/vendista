import DetailContactInfo from './DetailContactInfo'
import Form from './Form'

const Contacts = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white py-8 px-4 sm:px-6 lg:px-8'>
      <div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold leading-tight text-gray-900'>
            Контактная информация
          </h1>
          <p className='mt-4 text-lg text-gray-600'>
            Мы здесь, чтобы помочь. Обращайтесь к нам по любым вопросам.
          </p>
        </div>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <DetailContactInfo />
          <Form />
        </div>
      </div>
    </div>
  )
}
export default Contacts
