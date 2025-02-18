import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Footer } from "./_components/layout/footer";
import { Header } from "./_components/layout/header";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const vazir = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "BiAsab | بی اعصاب",
  description: "پلتفرم مدیریت تمرینات بدنسازی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
