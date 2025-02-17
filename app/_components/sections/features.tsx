import { 
  Shield, 
  Clock, 
  BarChart2, 
  Smartphone, 
  MessageSquare, 
  Download 
} from 'lucide-react'

const features = [
  {
    title: 'امنیت بالا',
    description: 'حفظ حریم خصوصی و امنیت داده‌های شما با بالاترین استانداردها',
    icon: Shield,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    title: 'دسترسی ۲۴/۷',
    description: 'دسترسی به برنامه تمرینی و مربی در هر ساعت از شبانه روز',
    icon: Clock,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'گزارش پیشرفت',
    description: 'مشاهده روند پیشرفت با نمودارهای تحلیلی و گزارشات دقیق',
    icon: BarChart2,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'اپلیکیشن موبایل',
    description: 'دسترسی آسان به تمام امکانات از طریق اپلیکیشن موبایل',
    icon: Smartphone,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    title: 'چت اختصاصی',
    description: 'ارتباط مستقیم با مربی از طریق سیستم چت داخلی',
    icon: MessageSquare,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    title: 'دانلود برنامه',
    description: 'امکان دانلود برنامه تمرینی و تغذیه به صورت PDF',
    icon: Download,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            چرا <span className="text-primary-600">بی اعصاب</span>؟
          </h2>
          <p className="text-gray-600">
            با امکانات پیشرفته و کاربردی، تجربه متفاوتی از تمرین را تجربه کنید
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} ${feature.color} mb-4 transition-colors group-hover:bg-opacity-70`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              <div className="absolute top-6 right-6 w-24 h-24 bg-gray-50 rounded-full opacity-10 -z-10 transition-transform group-hover:scale-150 duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
