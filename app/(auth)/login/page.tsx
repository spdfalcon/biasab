'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // اینجا لاجیک لاگین اضافه می‌شود
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">خوش آمدید</h1>
        <p className="text-gray-500">
          برای ورود به حساب کاربری خود، اطلاعات خود را وارد کنید
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            ایمیل یا شماره موبایل
          </label>
          <Input
            type="text"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            رمز عبور
          </label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-600">مرا به خاطر بسپار</span>
          </label>
          <Link 
            href="/forgot-password" 
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            فراموشی رمز عبور
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'در حال ورود...' : 'ورود به حساب کاربری'}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">یا</span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          حساب کاربری ندارید؟{' '}
          <Link 
            href="/register"
            className="font-medium text-primary-600 hover:text-primary-700"
          >
            ثبت نام کنید
          </Link>
        </p>
      </div>
    </div>
  )
}
