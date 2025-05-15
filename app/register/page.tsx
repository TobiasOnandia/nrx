"use client";
import { registerAction } from "@/actions/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState } from "react";

const fields = [
  {
    label: "Email Address",
    name: "email",
    id: "email",
    htmlFor: "email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    label: "Password",
    name: "password",
    id: "password",
    htmlFor: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    label: "Name",
    htmlFor: "name",
    name: "name",
    id: "name",
    type: "text",
    placeholder: "Enter your name",
  },
];

const authProvider = [
  {
    name: "Google",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
          fill="#34D399"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-5 h-5" fill="#34D399" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
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

      redirect("/");
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
            "Get Started"
          )}
        </button>

        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <footer className="grid grid-cols-2 gap-3">
          {authProvider.map((provider, index) => (
            <button
              key={index}
              type="button"
              className="flex items-center justify-center space-x-2 py-2.5 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-lg transition-colors"
            >
              {provider.icon}
              <span className="text-gray-200 text-sm">{provider.name}</span>
            </button>
          ))}
        </footer>

        <p className="text-center text-gray-400 text-sm">
          Already a member?{" "}
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
