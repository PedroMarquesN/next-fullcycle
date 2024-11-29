'use client';

import { useRouter } from 'next/navigation';

import { FormEvent, useState } from 'react';
import { AuthForm } from '../../components/AuthForm';

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('User logged in');
        router.push('/');
        return;
      }
      const payload = await response.json();
      setError(payload.map((error: { message: string }) => error.message));
    } catch (error) {
      console.error(error);
      setError('Erro ao fazer login !');
    }
  };

  return (
    <>
      {error && <div className='error-message'>{error}</div>}
      <AuthForm formType='login' onSubmit={handleSubmit} />
    </>
  );
}
