"use client";
import { loginAction } from "@/app/actions/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [, formAction, isLoading] = useActionState(
    async (_state: void | null, formData: FormData) => {
      const { email, password } = Object.fromEntries(formData) as {
        email: string | undefined;
        password: string | undefined;
      };

      if (!email || !password) {
        toast.error("Email and password are required");
        return;
      }

      const response = await loginAction({ email, password });

      if (!response.success) {
        toast.error("Login failed");
        console.error("Login failed", response.message);
        return;
      }

      console.log(response.user?.id);

      toast.success("Login successful");
      redirect("/");
    },
    null
  );

  return (
    <main className=" w-full max-w-md flex-col mx-auto mt-16 bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 flex items-center justify-center ">
      <h1 className="text-3xl font-bold text-emerald-500 mb-2">Welcome Back</h1>
      <p className="text-gray-400">Track crypto markets like a pro</p>

      <form action={formAction} className="flex flex-col gap-6 mt-8">
        <label
          htmlFor="email"
          className=" text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-400"
        >
          Email Address
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg focus:border-emerald-500 outline-none transition-all peer"
            placeholder=" "
          />
        </label>

        <label
          htmlFor="password"
          className=" text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-400"
        >
          Password
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-3 mb-2 bg-gray-700 border-2 border-gray-600 rounded-lg focus:border-emerald-500 outline-none transition-all pr-12 peer"
            placeholder=" "
          />
          <Link
            href="/forgot-password"
            className="text-emerald-500  hover:text-emerald-400 text-sm"
          >
            Forgot Password?
          </Link>
        </label>

        <button
          type="submit"
          className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors relative"
        >
          {isLoading ? "Logging in..." : "Sign In"}
        </button>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="w-full flex items-center justify-center space-x-2 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
            <span>Google</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
            <span>GitHub</span>
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm">
          New to CryptoVision?
          <Link
            href="/register"
            className="text-emerald-500 hover:text-emerald-400 ml-2 font-medium"
          >
            Create account
          </Link>
        </p>
      </form>
    </main>
  );
}
