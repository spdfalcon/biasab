import Link from 'next/link'

const footerLinks = {
  quickAccess: [
    { name: 'خانه', href: '/' },
    { name: 'درباره ما', href: '/about' },
    { name: 'خدمات', href: '/services' },
    { name: 'بلاگ', href: '/blog' },
    { name: 'تماس با ما', href: '/contact' },
  ],
  services: [
    { name: 'برنامه بدنسازی', href: '/services/workout' },
    { name: 'آنالیز بدنی', href: '/services/analysis' },
    { name: 'مشاوره تخصصی', href: '/services/consulting' },
  ],
  contact: {
    address: 'تهران، خیابان ولیعصر، پلاک 123',
    phone: '۰۲۱-۱۲۳۴۵۶۷۸',
    email: 'info@biasab.ir',
    workHours: 'شنبه تا چهارشنبه - ۹ صبح تا ۵ عصر'
  }
}

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">درباره بی اعصاب</h3>
          <p className="text-gray-600">
            پلتفرم جامع مدیریت تمرینات بدنسازی برای ارتباط مربیان و شاگردان.
            با کمک بهترین مربیان به اهداف خود برسید.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
          <ul className="space-y-2">
            {footerLinks.quickAccess.map(link => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">خدمات</h3>
          <ul className="space-y-2">
            {footerLinks.services.map(link => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
          <ul className="space-y-2 text-gray-600">
            <li>{footerLinks.contact.address}</li>
            <li>تلفن: {footerLinks.contact.phone}</li>
            <li>ایمیل: {footerLinks.contact.email}</li>
            <li>ساعات کاری: {footerLinks.contact.workHours}</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="container py-6 flex items-center justify-between">
          <p className="text-gray-600">
            © {new Date().getFullYear()} بی اعصاب - تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
              قوانین و مقررات
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
              حریم خصوصی
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
