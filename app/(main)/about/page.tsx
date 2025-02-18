import Image from 'next/image'
import { Button } from '@/app/_components/ui/button'
import Link from 'next/link'
import { Users, Award, Dumbbell } from 'lucide-react'

const stats = [
  { 
    label: 'کاربر فعال',
    value: '۱۰۰۰+',
    description: 'ورزشکار در حال پیشرفت',
    icon: Users,
  },
  { 
    label: 'مربی متخصص',
    value: '۵۰+',
    description: 'با تجربه و دانش کافی',
    icon: Award,
  },
  { 
    label: 'ساعت تمرین',
    value: '۱۰,۰۰۰+',
    description: 'تمرین ثبت شده در پلتفرم',
    icon: Dumbbell,
  },
]

const team = [
  {
    name: 'علی محمدی',
    role: 'مدیر عامل و موسس',
    image: '/images/team/member1.jpg',
    description: 'متخصص فیزیولوژی ورزشی با ۱۰ سال تجربه مربیگری',
  },
  {
    name: 'سارا احمدی',
    role: 'مدیر فنی',
    image: '/images/team/member2.jpg',
    description: 'قهرمان مسابقات بدنسازی و مربی بین‌المللی',
  },
  {
    name: 'امیر کریمی',
    role: 'مدیر آموزش',
    image: '/images/team/member3.jpg',
    description: 'دکترای تربیت بدنی و متخصص تغذیه ورزشی',
  },
]

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-4xl font-bold mb-6">
            درباره <span className="text-primary-600">بی اعصاب</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ما به شما کمک می‌کنیم تا به بهترین نسخه خودتان تبدیل شوید
          </p>
          <div className="flex justify-center gap-4">
            <Button>
              <Link href="/register">
                شروع کنید
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/contact">
                تماس با ما
              </Link>
            </Button>
          </div>
        </section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">داستان ما</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                بی اعصاب با هدف ایجاد یک پلتفرم جامع برای ارتباط مربیان و ورزشکاران شکل گرفت.
                ما معتقدیم که هر کسی حق دارد به بهترین مربیان و برنامه‌های تمرینی دسترسی داشته باشد.
              </p>
              <p>
                امروز، بی اعصاب به یکی از بزرگترین پلتفرم‌های آنلاین تمرین در ایران تبدیل شده
                و به هزاران نفر در رسیدن به اهداف ورزشی‌شان کمک کرده است.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about/story.jpg"
              alt="داستان ما"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 rounded-3xl p-12 mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white shadow-sm mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">تیم ما</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
