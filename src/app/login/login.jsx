"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email,seteamil]= useState('')
  const router =useRouter()
  const handleSubmit = async (email) =>{
    email.preventDefault();
    
  }
  return (
    <>
      <header id="header" className="flex justify-center py-5 bg-white-100">
        <img src="/logo.webp" alt="Logo" className="w-36 h-auto" />
      </header>
      <main className="flex items-start justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl w-full max-w-md p-6">
          {/* Tiêu đề */}
          <h1 className="text-2xl font-bold text-center mb-6">Log in</h1>

          {/* Google login (giả lập) */}
          <button className="w-full flex items-center justify-between border border-gray-300 rounded-full px-4 py-2 mb-3 hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <div className="bg-purple-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                T
              </div>
              <div className="text-left text-sm">
                <div className="font-semibold">Continue as Trần</div>
                <div className="text-gray-500 text-xs">
                  trong.new27@gmail.com
                </div>
              </div>
            </div>
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          </button>

          {/* Facebook */}
          <button className="w-full flex items-center gap-2 justify-center border border-gray-300 rounded-full px-4 py-2 mb-3 hover:bg-gray-50">
            <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
            <span>Continue with Facebook</span>
          </button>

          {/* Phone */}
          <button className="w-full flex items-center gap-2 justify-center border border-gray-300 rounded-full px-4 py-2 mb-4 hover:bg-gray-50">
            <img src="/phone-icon.svg" alt="Phone" className="w-5 h-5" />
            <span>Continue with phone</span>
          </button>

          {/* OR */}
          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-400 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Continue button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition">
            Continue
          </button>
        </div>
      </main>
    </>
  );
}
