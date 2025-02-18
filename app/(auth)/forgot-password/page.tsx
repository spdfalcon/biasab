'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { ArrowLeft, Loader2, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // اینجا لاجیک ارسال ایمیل بازیابی رمز عبور اضافه می‌شود
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold">ایمیل بازیابی ارسال شد</h1>
        <p className="text-gray-600">
          لینک بازیابی رمز عبور به ایمیل {email} ارسال شد.
          <br />
          لطفاً صندوق ورودی خود را بررسی کنید.
        </p>
        <div className="pt-4">
          <Link href="/login">
            <Button 
              variant="outline" 
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              بازگشت به صفحه ورود
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">فراموشی رمز عبور</h1>
        <p className="text-gray-500">
          ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            ایمیل
          </label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              در حال ارسال...
            </>
          ) : (
            'ارسال لینک بازیابی'
          )}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          رمز عبور خود را به یاد آوردید؟{' '}
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
