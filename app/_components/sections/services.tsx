import { Dumbbell, Activity, Users, Calendar, ChartBar, ClipboardList } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    name: 'برنامه تمرینی تخصصی',
    description: 'برنامه‌های تمرینی شخصی‌سازی شده متناسب با اهداف و سطح آمادگی شما',
    icon: Dumbbell,
    color: 'from-blue-600 to-cyan-500',
    href: '/services/training'
  },
  {
    name: 'آنالیز پیشرفت',
    description: 'رصد دقیق پیشرفت با نمودارهای تحلیلی و گزارش‌های دوره‌ای',
    icon: ChartBar,
    color: 'from-purple-600 to-pink-500',
    href: '/services/analysis'
  },
  {
    name: 'برنامه‌ریزی تغذیه',
    description: 'برنامه غذایی متناسب با اهداف و سبک زندگی شما',
    icon: ClipboardList,
    color: 'from-green-600 to-teal-500',
    href: '/services/diet'
  },
  {
    name: 'مربیان حرفه‌ای',
    description: 'دسترسی به بهترین مربیان با تجربه و دانش کافی',
    icon: Users,
    color: 'from-orange-600 to-yellow-500',
    href: '/services/trainers'
  },
  {
    name: 'پایش سلامت',
    description: 'کنترل شاخص‌های سلامت و آمادگی جسمانی',
    icon: Activity,
    color: 'from-red-600 to-rose-500',
    href: '/services/health'
  },
  {
    name: 'برنامه‌ریزی منظم',
    description: 'تقویم تمرینی منظم و قابل تنظیم با شرایط شما',
    icon: Calendar,
    color: 'from-indigo-600 to-blue-500',
    href: '/services/planning'
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.gray.800/1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.800/1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary-500 font-semibold mb-4">خدمات ما</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            خدمات <span className="text-primary-400">بی اعصاب</span>
          </h2>
          <p className="text-gray-400 text-lg">
            با استفاده از امکانات پیشرفته پلتفرم بی اعصاب، به صورت حرفه‌ای تمرین کنید
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group relative bg-gray-800/50 rounded-3xl p-8 overflow-hidden hover:bg-gray-800/80 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className="relative">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
