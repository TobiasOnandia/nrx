'use client';
import { registerAction } from '@/app/actions/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useActionState } from 'react';

const fields = [
  {
    label: 'Email Address',
    name: 'email',
    id: 'email',
    htmlFor: 'email',
    type: 'email',
    placeholder: 'Enter your email address',
  },
  {
    label: 'Password',
    name: 'password',
    id: 'password',
    htmlFor: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },
  {
    label: 'Name',
    htmlFor: 'name',
    name: 'name',
    id: 'name',
    type: 'text',
    placeholder: 'Enter your name',
  },
];

export default function RegisterPage() {
  const [, formAction, isLoading] = useActionState(
    async (_: void | null, formData: FormData) => {
      const { email, password, name } = Object.fromEntries(
        formData.entries(),
      ) as {
        email: string;
        password: string;
        name: string;
      };
      const response = await registerAction({ email, password, name });

      if (!response.success) {
        console.error(response.message);
      }

      redirect('/');
    },
    null,
  );

  return (
    <main className="w-full max-w-md mt-12 flex-col m-auto flex bg-gray-800  rounded-xl shadow-xl p-8 border border-gray-700 items-center justify-center ">
      <h1 className="text-3xl text-center font-semibold text-gray-100 mb-2">
        Create Account
      </h1>
      <p className="text-gray-400 text-center mb-6">
        Join our exclusive platform
      </p>

      <form className="space-y-5" action={formAction}>
        {fields.map((field, index) => (
          <label key={index} htmlFor={field.htmlFor}>
            {field.label}
            <input
              type={field.type}
              id={field.htmlFor}
              name={field.name}
              placeholder={field.placeholder}
              required
              className="w-full mb-4 my-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all placeholder-gray-400"
            />
          </label>
        ))}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full cursor-pointer py-3.5 bg-emerald-600 hover:bg-emerald-500 text-gray-100 font-medium rounded-lg transition-colors active:scale-[0.98]"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-gray-200/80 border-t-transparent rounded-full animate-spin" />
              <span>Creating Account...</span>
            </div>
          ) : (
            'Get Started'
          )}
        </button>

        <p className="text-center text-gray-400 text-sm">
          Already a member?{' '}
          <Link
            href="/login"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            Sign in now
          </Link>
        </p>
      </form>
    </main>
  );
}
