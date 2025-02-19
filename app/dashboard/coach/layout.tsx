'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/app/_lib/utils'
import {
  LayoutDashboard,
  Users,
  Dumbbell,
  MessageSquare,
  ClipboardList,
  Settings,
  Bell,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/app/_components/ui/button'

const navigation = [
  {
    name: 'داشبورد',
    href: '/dashboard/coach',
    icon: LayoutDashboard
  },
  {
    name: 'شاگردان',
    href: '/dashboard/coach/students',
    icon: Users
  },
  {
    name: 'برنامه‌های تمرینی',
    href: '/dashboard/coach/workouts',
    icon: Dumbbell
  },
  {
    name: 'پیام‌ها',
    href: '/dashboard/coach/messages',
    icon: MessageSquare
  },
  {
    name: 'برنامه‌ها',
    href: '/dashboard/coach/programs',
    icon: ClipboardList
  },
  {
    name: 'تنظیمات',
    href: '/dashboard/coach/settings',
    icon: Settings
  }
]

export default function CoachDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 right-0 z-40 h-screen bg-white border-l transition-all duration-300',
          isSidebarOpen ? 'w-64' : 'w-20'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <Link href="/dashboard/coach" className={cn(
            "font-bold text-xl bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent",
            !isSidebarOpen && "hidden"
          )}>
            بی اعصاب
          </Link>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors',
                !isSidebarOpen && 'justify-center'
              )}
            >
              <item.icon size={20} className="text-gray-500" />
              {isSidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Profile */}
        <div className={cn(
          "absolute bottom-0 right-0 left-0 p-4 border-t",
          isSidebarOpen ? "flex items-center gap-3" : "text-center"
        )}>
          <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
            ع‌م
          </div>
          {isSidebarOpen && (
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">علی محمدی</div>
              <div className="text-sm text-gray-500 truncate">مربی بدنسازی</div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-red-500"
          >
            <LogOut size={20} />
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn(
        "transition-all duration-300",
        isSidebarOpen ? "mr-64" : "mr-20"
      )}>
        {/* Header */}
        <header className="h-16 bg-white border-b sticky top-0 z-30">
          <div className="h-full flex items-center justify-end px-8">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700"
            >
              <Bell size={20} />
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
