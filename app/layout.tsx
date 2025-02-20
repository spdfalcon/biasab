// app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Wrapper from "./_components/layout/Wrapper";

const vazir = Vazirmatn({ 
  subsets: ["arabic"],
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "BiAsab | بی اعصاب",
  description: "پلتفرم مدیریت تمرینات بدنسازی",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Wrapper>{children}</Wrapper> {/* این تغییر مهمه */}
      </body>
    </html>
  );
}
