"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthForm() {
  const pathname = usePathname();
  const isLogin = pathname.includes("/login");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full max-w-md transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2 animate-pulse">
          eKart
        </h1>
        <p className="text-center black-500 mb-6 text-sm">
          {isLogin
            ? "Welcome back to your marketplace"
            : "Create your account to start buying and selling"}
        </p>

        <h2 className="text-2xl font-semibold mb-1 text-gray-800">
          {isLogin ? "Sign in" : "Create account"}
        </h2>
        <p className="text-sm text-black-500 mb-6">
          {isLogin
            ? "Enter your email and password to access your account"
            : "Enter your information to create your account"}
        </p>

        <form className="space-y-4">
          {!isLogin && (
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-3 py-2 border text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-3 py-2 border text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-3 py-2 border text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-3 py-2 border text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-indigo-600 transition"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-end text-sm">
              <Link
                href="/auth/forgot-password"
                className="text-indigo-600 hover:underline transition"
              >
                Forgot password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-md transition"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-3 text-xs text-gray-400">OR CONTINUE WITH</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        <button
          type="button"
          onClick={() => alert("Google Auth Clicked")}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-indigo-50 transition shadow-sm"
        >
          <FaGoogle className="text-red-500" />
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>

        <p className="text-sm text-center mt-6 text-gray-500">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-indigo-600 font-medium hover:underline transition"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-indigo-600 font-medium hover:underline transition"
              >
                Sign in
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
