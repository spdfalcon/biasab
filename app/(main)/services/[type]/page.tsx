import Image from 'next/image'
import { Button } from '@/app/_components/ui/button'
import { Check, Clock, Users, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const servicesData = {
  workout: {
    title: 'برنامه بدنسازی',
    description: 'برنامه تمرینی اختصاصی متناسب با سطح و هدف شما',
    image: '/images/services/workout-detail.jpg',
    benefits: [
      'برنامه تمرینی شخصی‌سازی شده',
      'ویدیوهای آموزشی حرکات',
      'برنامه گرم کردن و سرد کردن',
      'تنظیم شدت و حجم تمرین',
    ],
    features: [
      { icon: Clock, title: 'مدت دوره', value: '۳ ماه' },
      { icon: Users, title: 'ظرفیت', value: 'نامحدود' },
    ],
    faqs: [
      {
        question: 'آیا برنامه قابل تمدید است؟',
        answer: 'بله، در صورت رضایت می‌توانید برنامه را تمدید کنید.'
      },
      {
        question: 'چه مدت زمانی برای دریافت برنامه نیاز است؟',
        answer: 'پس از تکمیل فرم ارزیابی، حداکثر ۴۸ ساعت کاری.'
      },
    ],
    price: '۳۵۰,۰۰۰',
    duration: 'ماهانه'
  },
  analysis: {
    title: 'آنالیز بدنی',
    description: 'ارزیابی دقیق وضعیت فعلی و تعیین اهداف واقع‌بینانه',
    image: '/images/services/analysis-detail.jpg',
    benefits: [
      'اندازه‌گیری ترکیب بدنی',
      'تعیین نقاط قوت و ضعف',
      'ارزیابی وضعیت فعلی',
      'تعیین اهداف کوتاه و بلند مدت',
    ],
    features: [
      { icon: Clock, title: 'مدت جلسه', value: '۱ ساعت' },
      { icon: Users, title: 'نوع جلسه', value: 'خصوصی' },
    ],
    faqs: [
      {
        question: 'چه مواردی در آنالیز بررسی می‌شود؟',
        answer: 'قد، وزن، درصد چربی، توده عضلانی و شاخص‌های مهم دیگر.'
      },
      {
        question: 'آیا نیاز به تجهیزات خاصی است؟',
        answer: 'خیر، تمام تجهیزات در محل موجود است.'
      },
    ],
    price: '۲۵۰,۰۰۰',
    duration: 'یک جلسه'
  },
  consulting: {
    title: 'مشاوره تخصصی',
    description: 'مشاوره با مربیان مجرب برای رسیدن به بهترین نتیجه',
    image: '/images/services/consulting-detail.jpg',
    benefits: [
      'مشاوره آنلاین و حضوری',
      'راهنمایی تخصصی',
      'پاسخ به سوالات',
      'پیگیری مستمر پیشرفت',
    ],
    features: [
      { icon: Clock, title: 'مدت مشاوره', value: '۴۵ دقیقه' },
      { icon: Users, title: 'نوع مشاوره', value: 'آنلاین/حضوری' },
    ],
    faqs: [
      {
        question: 'آیا امکان مشاوره آنلاین وجود دارد؟',
        answer: 'بله، مشاوره از طریق اسکایپ یا واتساپ انجام می‌شود.'
      },
      {
        question: 'چطور می‌توانم وقت مشاوره بگیرم؟',
        answer: 'از طریق فرم رزرو در همین صفحه یا تماس با پشتیبانی.'
      },
    ],
    price: '۴۵۰,۰۰۰',
    duration: 'هر جلسه'
  }
}

type ServiceType = keyof typeof servicesData;

interface PageProps {
  params: { type: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ServicePage({
  params,
}: PageProps) {
  const serviceType = params.type as ServiceType;
  const service = servicesData[serviceType];

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="container mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Link 
              href="/services"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>بازگشت به خدمات</span>
            </Link>
            <h1 className="text-4xl font-bold">{service.title}</h1>
            <p className="text-xl text-gray-600">{service.description}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{service.price}</span>
              <span className="text-gray-600">/{service.duration}</span>
            </div>
            <Button size="lg" className="w-full sm:w-auto">
              ثبت سفارش
            </Button>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="container mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Features */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">ویژگی‌ها</h2>
            <div className="grid gap-6">
              {service.features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium">{feature.title}</div>
                    <div className="text-gray-600">{feature.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold mb-6">مزایا</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container">
        <h2 className="text-2xl font-bold mb-8">سوالات متداول</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.faqs.map((faq) => (
            <div key={faq.question} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
