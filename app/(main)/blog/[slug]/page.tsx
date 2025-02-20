import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/app/_components/ui/button'
import { ChevronLeft, Clock, User, Tag, Share2 } from 'lucide-react'

// این دیتا باید از یک CMS یا API گرفته شود
const post = {
  title: 'چگونه عضله‌سازی را شروع کنیم؟',
  excerpt: 'راهنمای کامل برای افراد مبتدی که می‌خواهند عضله‌سازی را شروع کنند.',
  content: `
    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
    <h2>اصول اولیه عضله‌سازی</h2>
    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
    <ul>
      <li>تمرین منظم</li>
      <li>تغذیه مناسب</li>
      <li>استراحت کافی</li>
    </ul>
  `,
  image: '/images/blog/post1.jpg',
  author: 'علی محمدی',
  date: '۱۵ بهمن ۱۴۰۲',
  readTime: '۸ دقیقه',
  category: 'تمرین',
  tags: ['عضله‌سازی', 'مبتدی', 'آموزش'],
}

export default function BlogPost() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>بازگشت به بلاگ</span>
          </Link>

          {/* Article */}
          <article>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span>{post.date}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 border-t pt-8">
              <span className="text-gray-600">اشتراک‌گذاری:</span>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 ml-2" />
                اشتراک‌گذاری
              </Button>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
