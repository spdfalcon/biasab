import { Button } from '../ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.50),white)]" />
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-primary-600">برنامه تمرینی</span>
              <br />
              متناسب با اهداف شما
            </h1>
            <p className="text-xl text-gray-600">
              با کمک مربیان حرفه‌ای به اهداف خود در بدنسازی برسید
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="min-w-[200px]">
                شروع کنید
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]">
                مشاوره رایگان
              </Button>
            </div>
            <div className="pt-8 grid grid-cols-3 gap-8">
              {[
                ['۱۰۰۰+', 'کاربر فعال'],
                ['۵۰+', 'مربی متخصص'],
                ['۹۵٪', 'رضایت کاربران'],
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Hero"
              fill
              className="object-cover rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
