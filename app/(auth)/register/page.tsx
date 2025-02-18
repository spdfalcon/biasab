'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<'trainer' | 'student'>('student')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // اینجا لاجیک ثبت نام اضافه می‌شود
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">ایجاد حساب کاربری</h1>
        <p className="text-gray-500">
          برای استفاده از خدمات بی اعصاب، ثبت نام کنید
        </p>
      </div>

      <div className="flex rounded-lg border border-gray-200 p-1">
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            userType === 'student'
              ? 'bg-primary-500 text-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setUserType('student')}
        >
          شاگرد
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            userType === 'trainer'
              ? 'bg-primary-500 text-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setUserType('trainer')}
        >
          مربی
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              نام
            </label>
            <Input placeholder="علی" required />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              نام خانوادگی
            </label>
            <Input placeholder="محمدی" required />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            ایمیل
          </label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            شماره موبایل
          </label>
          <Input
            type="tel"
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
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

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 rounded border-gray-300"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            با {' '}
            <Link href="/terms" className="text-primary-600 hover:text-primary-700">
              قوانین و مقررات
            </Link>
            {' '} سایت موافقم
          </label>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'در حال ثبت نام...' : 'ثبت نام'}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          قبلاً ثبت نام کرده‌اید؟{' '}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:text-primary-700"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  )
}
