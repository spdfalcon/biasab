import Link from 'next/link'
import { Button } from '@/app/_components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">خدمت مورد نظر یافت نشد</h1>
        <p className="text-gray-600">صفحه مورد نظر شما در دسترس نیست.</p>
        <Button>
          <Link href="/services">
            بازگشت به صفحه خدمات
          </Link>
        </Button>
      </div>
    </main>
  )
}
