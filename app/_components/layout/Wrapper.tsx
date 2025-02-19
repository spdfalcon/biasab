// app/_components/Wrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Footer } from "./footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // اگر در مسیر /dashboard هستیم، هدر و فوتر رو حذف کن
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
