import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { Button } from '../ui/button'

const trainers = [
  {
    name: 'علی محمدی',
    specialty: 'متخصص بدنسازی و تناسب اندام',
    image: '/images/trainers/trainer1.jpg',
    rating: 4.9,
    reviews: 150,
    specialties: ['بدنسازی', 'تناسب اندام', 'کاهش وزن'],
  },
  {
    name: 'سارا احمدی',
    specialty: 'مربی تغذیه و فیتنس',
    image: '/images/trainers/trainer2.jpg',
    rating: 4.8,
    reviews: 120,
    specialties: ['تغذیه ورزشی', 'فیتنس', 'بادی بیلدینگ بانوان'],
  },
  {
    name: 'امیر رضایی',
    specialty: 'مربی بدنسازی قهرمانی',
    image: '/images/trainers/trainer3.jpg',
    rating: 5.0,
    reviews: 200,
    specialties: ['بدنسازی قهرمانی', 'پرورش اندام', 'تمرینات قدرتی'],
  },
]

export default function TrainersSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            مربیان <span className="text-primary-600">برتر</span>
          </h2>
          <p className="text-gray-600">
            با بهترین مربیان ایران تمرین کنید و به اهداف خود برسید
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="relative mb-6 rounded-xl overflow-hidden h-64">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  <span className="ml-1 font-medium">{trainer.rating}</span>
                  <span className="text-sm text-gray-200 mr-1">
                    ({trainer.reviews} نظر)
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
              <p className="text-gray-600 mb-4">{trainer.specialty}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {trainer.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 rounded-full text-sm bg-primary-50 text-primary-600"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <Link href="/consultation" className="block">
                <Button className="w-full">مشاوره رایگان</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
