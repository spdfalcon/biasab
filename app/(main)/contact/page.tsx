'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Input } from '@/app/_components/ui/input'
import { Button } from '@/app/_components/ui/button'
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react'

// Update Map import
const Map = dynamic(
  () => import('@/app/_components/ui/map'),
  { 
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-500">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    ),
    ssr: false 
  }
)

const OFFICE_LOCATION: [number, number] = [35.7219, 51.3347] // Tehran coordinates

const contactInfo = [
  {
    icon: Phone,
    title: 'تلفن',
    value: '+98 21 1234 5678',
    description: 'ساعات کاری: 9 صبح تا 5 عصر',
  },
  {
    icon: Mail,
    title: 'ایمیل',
    value: 'info@biaasab.com',
    description: 'پاسخگویی در کمتر از 24 ساعت',
  },
  {
    icon: MapPin,
    title: 'آدرس',
    value: 'تهران، خیابان ولیعصر، پلاک 123',
    description: 'دفتر مرکزی',
  },
  {
    icon: Clock,
    title: 'ساعات کاری',
    value: 'شنبه تا چهارشنبه',
    description: '9 صبح تا 5 عصر',
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
  }

  return (
    <main className="pt-32 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            تماس با <span className="text-primary-600">بی اعصاب</span>
          </h1>
          <p className="text-xl text-gray-600">
            ما آماده پاسخگویی به سوالات شما هستیم
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-primary-50 text-primary-600 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="font-medium text-gray-900 mb-1">{item.value}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>
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
                  موضوع
                </label>
                <Input placeholder="موضوع پیام" required />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  پیام
                </label>
                <textarea
                  className="w-full min-h-[150px] rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="پیام خود را بنویسید..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    در حال ارسال...
                  </>
                ) : (
                  'ارسال پیام'
                )}
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
            <Map 
              center={OFFICE_LOCATION} 
              className="w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
