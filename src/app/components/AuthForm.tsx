import Link from 'next/link';
import { FC } from 'react';
import { InputField } from './InputField';

type AuthFormProps = {
  formType: 'login' | 'register';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm: FC<AuthFormProps> = ({ formType, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className='flex w-full max-w-96 flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-x-4'>
        <h1 className='text-3xl font-bold'>
          {formType === 'login' ? 'Login' : 'Register'}
        </h1>
        <p className='text-sm text-gray-400'>
          {formType === 'login' ? 'Novo por aqui?' : 'Já tem uma conta?'}{' '}
          <Link
            href={formType === 'login' ? '/auth/register' : '/auth/login'}
            className='text-blue-500 hover:underline'
          >
            {formType === 'login' ? 'Crie uma conta' : 'Faça login'}
          </Link>
        </p>
      </div>
      <div className='flex flex-col space-y-4'>
        <InputField
          id='email'
          name='email'
          label='Email'
          type='email'
          placeholder='Digite seu Email'
        />
        <InputField
          id='password'
          name='password'
          label='Senha'
          type='password'
          placeholder='Digite sua Senha'
        />
        {formType === 'register' && (
          <InputField
            id='confirmPassword'
            name='confirmPassword'
            label='Confirme sua Senha'
            type='password'
            placeholder='Confirme sua Senha'
          />
        )}
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          type='submit'
          className='w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          {formType === 'login' ? 'Login' : 'Registrar'}
        </button>
      </div>
    </form>
  );
};
