
import Image from 'next/image'
import Link from 'next/link'

const brands = [
  { name: 'برند 1', logo: '/images/brands/brand1.svg', href: '#' },
  { name: 'برند 2', logo: '/images/brands/brand2.svg', href: '#' },
  { name: 'برند 3', logo: '/images/brands/brand3.svg', href: '#' },
  { name: 'برند 4', logo: '/images/brands/brand4.svg', href: '#' },
  { name: 'برند 5', logo: '/images/brands/brand5.svg', href: '#' },
]

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-12">
          همکاران و <span className="text-primary-600">اسپانسرها</span>
        </h2>
        
        <div className="relative">
          {/* Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-6 group hover:bg-gray-100 transition-colors"
              >
                <div className="relative w-24 h-12">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
