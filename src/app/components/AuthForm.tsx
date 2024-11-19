import { FC } from "react";

type AuthFormProps = {
    formType: 'login' | 'register';
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


export const AuthForm: FC<AuthFormProps> = () => {
    return (
        <div>
            <h1>AuthForm</h1>
        </div>
    );
}