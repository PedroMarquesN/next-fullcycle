'use client';
import { AuthForm } from '@/app/components/AuthForm';

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
