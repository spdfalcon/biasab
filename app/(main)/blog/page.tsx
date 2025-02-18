
import Image from 'next/image'
import Link from 'next/link'
import { Tag, Clock, User } from 'lucide-react'

const posts = [
  {
    id: '1',
    title: 'چگونه عضله‌سازی را شروع کنیم؟',
    excerpt: 'راهنمای کامل برای افراد مبتدی که می‌خواهند عضله‌سازی را شروع کنند.',
    image: '/images/blog/post1.jpg',
    author: 'علی محمدی',
    date: '۱۵ بهمن ۱۴۰۲',
    readTime: '۸ دقیقه',
    category: 'تمرین',
    tags: ['عضله‌سازی', 'مبتدی', 'آموزش'],
    slug: 'how-to-start-bodybuilding'
  },
  {
    id: '2',
    title: 'بهترین تمرینات برای چربی‌سوزی',
    excerpt: 'معرفی موثرترین تمرینات برای کاهش چربی و بهبود متابولیسم بدن.',
    image: '/images/blog/post2.jpg',
    author: 'سارا احمدی',
    date: '۱۰ بهمن ۱۴۰۲',
    readTime: '۶ دقیقه',
    category: 'تغذیه',
    tags: ['چربی‌سوزی', 'تمرین', 'متابولیسم'],
    slug: 'best-fat-burning-exercises'
  },
  // ... more posts
]

export default function BlogPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">
            بلاگ <span className="text-primary-600">بی اعصاب</span>
          </h1>
          <p className="text-xl text-gray-600">
            آخرین مقالات و مطالب آموزشی در حوزه بدنسازی و تناسب اندام
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['همه', 'تمرین', 'تغذیه', 'سلامت', 'موفقیت'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-lg ${
                page === 1
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
