import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/app/_components/ui/button'
import { Check, Dumbbell, ChartBar, Brain } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'برنامه بدنسازی',
    description: 'برنامه تمرینی اختصاصی متناسب با سطح و هدف شما',
    image: '/images/services/workout.jpg',
    features: [
      'برنامه تمرینی شخصی‌سازی شده',
      'ویدیوهای آموزشی حرکات',
      'برنامه گرم کردن و سرد کردن',
      'تنظیم شدت و حجم تمرین',
    ],
    price: '۳۵۰,۰۰۰',
    href: '/services/workout'
  },
  {
    icon: ChartBar,
    title: 'آنالیز بدنی',
    description: 'ارزیابی دقیق وضعیت فعلی و تعیین اهداف واقع‌بینانه',
    image: '/images/services/analysis.jpg',
    features: [
      'اندازه‌گیری ترکیب بدنی',
      'تعیین نقاط قوت و ضعف',
      'ارزیابی وضعیت فعلی',
      'تعیین اهداف کوتاه و بلند مدت',
    ],
    price: '۲۵۰,۰۰۰',
    href: '/services/analysis'
  },
  {
    icon: Brain,
    title: 'مشاوره تخصصی',
    description: 'مشاوره با مربیان مجرب برای رسیدن به بهترین نتیجه',
    image: '/images/services/consulting.jpg',
    features: [
      'مشاوره آنلاین و حضوری',
      'راهنمایی تخصصی',
      'پاسخ به سوالات',
      'پیگیری مستمر پیشرفت',
    ],
    price: '۴۵۰,۰۰۰',
    href: '/services/consulting'
  },
]

const subscriptionPlans = [
  {
    title: 'پایه',
    price: '۵۹۹,۰۰۰',
    duration: 'ماهانه',
    features: [
      'برنامه تمرینی پایه',
      'پشتیبانی ایمیلی',
      'دسترسی به ویدیوهای آموزشی',
      'آپدیت ماهانه برنامه',
    ],
    href: '/checkout/basic'
  },
  {
    title: 'حرفه‌ای',
    price: '۹۹۹,۰۰۰',
    duration: 'ماهانه',
    featured: true,
    features: [
      'برنامه تمرینی پیشرفته',
      'پشتیبانی تلفنی ۲۴/۷',
      'مشاوره تغذیه اختصاصی',
      'آپدیت هفتگی برنامه',
      'گزارش‌های پیشرفت',
    ],
    href: '/checkout/pro'
  },
  {
    title: 'تیم',
    price: '۱,۹۹۹,۰۰۰',
    duration: 'ماهانه',
    features: [
      'برنامه تمرینی گروهی',
      'پشتیبانی اختصاصی',
      'جلسات آنلاین هفتگی',
      'مربی اختصاصی',
      'برنامه رقابتی',
      'تخفیف ویژه گروهی',
    ],
    href: '/checkout/team'
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="container mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            خدمات <span className="text-primary-600">بی اعصاب</span>
          </h1>
          <p className="text-xl text-gray-600">
            با استفاده از خدمات حرفه‌ای ما، سریع‌تر به اهداف خود برسید
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{service.price}</span>
                  <Link href={service.href}>
                    <Button>مشاهده جزئیات</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">اشتراک‌های بی اعصاب</h2>
            <p className="text-gray-600">
              پلن مورد نظر خود را انتخاب کنید و همین امروز شروع کنید
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.title}
                className={`bg-white rounded-2xl p-8 ${
                  plan.featured
                    ? 'ring-2 ring-primary-500 shadow-lg'
                    : 'shadow-sm'
                }`}
              >
                {plan.featured && (
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    پیشنهاد ویژه
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className="block">
                  <Button
                    className={`w-full ${
                      plan.featured ? 'bg-primary-500 hover:bg-primary-600' : ''
                    }`}
                    variant={plan.featured ? 'default' : 'outline'}
                  >
                    انتخاب پلن
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
