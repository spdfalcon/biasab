'use client'

import { Card } from '@/app/_components/ui/card'
import { cn } from '@/app/_lib/utils'
import { Users, TrendingUp, Dumbbell, MessageSquare } from 'lucide-react'

const stats = [
  {
    name: 'شاگردان فعال',
    value: '۲۴',
    change: '+۴.۷۵%',
    changeType: 'positive' as const,
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'نرخ پیشرفت',
    value: '۸۵.۲%',
    change: '+۲.۱%',
    changeType: 'positive' as const,
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'برنامه‌های فعال',
    value: '۱۲',
    change: '-۱',
    changeType: 'negative' as const,
    icon: Dumbbell,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'پیام‌های جدید',
    value: '۶',
    change: '+۳',
    changeType: 'positive' as const,
    icon: MessageSquare,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
]

export default function CoachDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">سلام، علی 👋</h1>
        <p className="text-gray-600">خلاصه وضعیت و آمار امروز شما</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} gradient>
            <Card.Header>
              <div className="flex items-center justify-between">
                <div className={cn("p-3 rounded-xl", stat.bgColor)}>
                  <stat.icon className={cn("w-6 h-6", stat.color)} />
                </div>
                <span
                  className={cn(
                    "text-sm font-medium",
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  )}
                >
                  {stat.change}
                </span>
              </div>
            </Card.Header>
            <Card.Content>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.name}</div>
            </Card.Content>
          </Card>
        ))}
      </div>

      {/* نمودارها و جداول بعداً اضافه می‌شوند */}
    </div>
  )
}
