export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">درباره بی اعصاب</h3>
          <p className="text-secondary-600">
            پلتفرم جامع مدیریت تمرینات بدنسازی برای ارتباط مربیان و شاگردان
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-secondary-600 hover:text-secondary-900">درباره ما</a></li>
            <li><a href="/services" className="text-secondary-600 hover:text-secondary-900">خدمات</a></li>
            <li><a href="/blog" className="text-secondary-600 hover:text-secondary-900">بلاگ</a></li>
            <li><a href="/contact" className="text-secondary-600 hover:text-secondary-900">تماس با ما</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">خدمات</h3>
          <ul className="space-y-2">
            <li><a href="/services/training" className="text-secondary-600 hover:text-secondary-900">برنامه تمرینی</a></li>
            <li><a href="/services/diet" className="text-secondary-600 hover:text-secondary-900">برنامه تغذیه</a></li>
            <li><a href="/services/coaching" className="text-secondary-600 hover:text-secondary-900">مربیگری آنلاین</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
          <ul className="space-y-2">
            <li className="text-secondary-600">تهران، خیابان ولیعصر</li>
            <li className="text-secondary-600">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li className="text-secondary-600">ایمیل: info@biasab.ir</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t">
        <div className="container py-6 text-center text-secondary-600">
          © {new Date().getFullYear()} بی اعصاب - تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  )
}
