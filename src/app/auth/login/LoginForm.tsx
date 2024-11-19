'use client';
import Link from "next/link";
import { InputField } from "../InputField";

export default function LoginForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
        }
    

    return <form onSubmit={handleSubmit} 
    className='flex w-full max-w-96 flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='text-sm text-gray-400'>
          Novo por aqui? {''}
          <Link href='/auth/register' className='text-blue-500 hover:underline'>Crie uma conta</Link>
        </p>
      </div>
      <div className='flex flex-col space-y-4'>
        <InputField
          id='email'
          name='email'
          label='Email'
          type='email'
          placeholder='Digite seu Email' />
        <InputField
          id='password'
          name='password'
          label='Senha'
          type='password'
          placeholder='Digite sua Senha' />
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:w-auto sm:px-8'
          type='submit'
        >
          Entrar
        </button>
      </div>
    </form>;
  }