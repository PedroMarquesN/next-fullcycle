'use client';

import { InputField } from "../../components/InputField";



export default function ForgotPasswordForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-96 flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-x-4'>
        <h1 className='text-3xl font-bold'>Esqueceu a senha ?</h1>
        <p className='text-sm text-gray-400'>
          Entre com seu email para reeviarmos a sua senha !
        </p>
      </div>
      <InputField
        id='email'
        name='email'
        label='Email'
        type='email'
        placeholder='Enter your email'
      />
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          type='submit'
          className='w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}
