import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowLeft, CheckCircle } from 'lucide-react'

const benefits = [
  'دسترسی به بهترین مربیان',
  'برنامه تمرینی اختصاصی',
  'پشتیبانی ۲۴/۷',
  'ضمانت بازگشت وجه',
]

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.primary.500/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.primary.500/20)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              آماده شروع تمرینات خود هستید؟
            </h2>
            
            <p className="text-xl text-gray-400">
              همین امروز به جمع هزاران ورزشکار موفق بپیوندید
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-right">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit} 
                className="flex items-center gap-2 text-gray-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link href="/register">
              <Button 
                size="lg" 
                className="group bg-primary-500 hover:bg-primary-600 text-lg px-8 hover:scale-105 transition-all duration-300"
              >
                <span>شروع کنید</span>
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-4 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  )
}
