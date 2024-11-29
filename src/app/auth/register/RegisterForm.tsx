'use client';

import { AuthForm } from "../../components/AuthForm";


export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
