import Image from 'next/image'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              بی اعصاب
            </h1>
          </Link>
          {children}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent z-10" />
        <Image
          src="/images/auth/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-md text-center text-white p-8">
            <h2 className="text-4xl font-bold mb-4">به بی اعصاب خوش آمدید</h2>
            <p className="text-lg text-white/90">
              با ما به اهداف تناسب اندام خود برسید
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
