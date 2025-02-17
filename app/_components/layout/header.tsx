'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Menu, X, ChevronDown, Dumbbell, Activity, Users } from 'lucide-react'
import { cn } from '@/app/_lib/utils'

const services = [
  {
    name: 'برنامه تمرینی',
    href: '/services/training',
    description: 'برنامه‌های تمرینی شخصی‌سازی شده',
    icon: Dumbbell
  },
  {
    name: 'آنالیز بدنی',
    href: '/services/analysis',
    description: 'بررسی تخصصی فرم و ساختار بدن',
    icon: Activity
  },
  {
    name: 'مربیان مجرب',
    href: '/services/trainers',
    description: 'دسترسی به بهترین مربیان',
    icon: Users
  }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredService, setHoveredService] = useState('')

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle mobile menu scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <header 
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-sm" 
            : "bg-transparent"
        )}
      >
        <nav className="container h-16">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group flex items-center gap-2 font-bold text-2xl"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                بی اعصاب
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onMouseEnter={() => setHoveredService('main')}
                  onMouseLeave={() => setHoveredService('')}
                >
                  <span>خدمات</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {hoveredService === 'main' && (
                  <div 
                    className="absolute top-full right-0 w-80 p-4 mt-2 bg-white rounded-2xl shadow-xl ring-1 ring-black/5"
                    onMouseEnter={() => setHoveredService('main')}
                    onMouseLeave={() => setHoveredService('')}
                  >
                    <div className="grid gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className="mt-1 p-2 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                            <service.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                              {service.name}
                            </div>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                درباره ما
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                بلاگ
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                تماس با ما
              </Link>
            </div>

            {/* Auth Buttons & Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3">
                <Link href="/login">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:border-primary-500 hover:text-primary-600"
                  >
                    ورود
                  </Button>
                </Link>
                <Link href="/register">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
                  >
                    ثبت نام
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 -mr-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="sr-only">منو</span>
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out",
          isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Menu Panel */}
        <div
          className={cn(
            "absolute left-0 top-16 bottom-0 w-full max-w-sm bg-white transition-all duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-4 space-y-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                خدمات
              </p>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <service.icon className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="font-medium">{service.name}</div>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100">
              <div className="p-4 space-y-1">
                <Link
                  href="/about"
                  className="block p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  درباره ما
                </Link>
                <Link
                  href="/blog"
                  className="block p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  بلاگ
                </Link>
                <Link
                  href="/contact"
                  className="block p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  تماس با ما
                </Link>
              </div>
            </div>

            <div className="mt-auto p-4 border-t border-gray-100">
              <div className="grid gap-3">
                <Link href="/login" className="w-full">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-center"
                  >
                    ورود
                  </Button>
                </Link>
                <Link href="/register" className="w-full">
                  <Button
                    size="lg"
                    className="w-full justify-center bg-gradient-to-r from-primary-600 to-primary-500"
                  >
                    ثبت نام
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
