import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Woolpert Template",
  description: "Woolpert website template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/woolpert-logo-black.png"
                    alt="Woolpert"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/elements" className="text-gray-700 hover:text-black text-sm font-medium">ELEMENTS</Link>
                <Link href="/sections" className="text-gray-700 hover:text-black text-sm font-medium">SIMPLE SECTIONS</Link>
                <Link href="/complex-sections" className="text-gray-700 hover:text-black text-sm font-medium">COMPLEX SECTIONS</Link>
                <Link href="/forms" className="text-gray-700 hover:text-black text-sm font-medium">FORMS</Link>
                <Link href="/maps" className="text-gray-700 hover:text-black text-sm font-medium">MAPS</Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
