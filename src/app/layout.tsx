import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elsamex | Maintenance Services",
  description: "Operations and maintenance of road infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        
        {/* Top Contact Bar */}
        <div className="bg-primary text-white text-xs py-2 px-4 md:px-12 flex justify-between items-center hidden md:flex">
          <div className="flex gap-6">
            <a href="tel:07945878660" className="flex items-center gap-2 hover:text-gray-200">
              <span>📞</span>
              <span>07945878660</span>
            </a>
            <a href="mailto:info@emslindia.com" className="flex items-center gap-2 hover:text-gray-200">
              <span>✉️</span>
              <span>info@emslindia.com</span>
            </a>
          </div>
          <div className="flex gap-4 uppercase font-semibold tracking-wider">
            <a href="#" className="hover:text-gray-200 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Twitter</a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white py-4 px-4 md:px-12 flex justify-between items-center shadow-sm sticky top-0 z-50">
          <Link href="/" className="w-56 block">
            <Image
              src="/updatedlogo.png"
              alt="Elsamex Logo"
              width={240}
              height={70}
              className="w-full h-auto object-contain"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center font-bold text-gray-800 text-sm uppercase tracking-wider">
            <Link href="/" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Home</Link>
            <Link href="/about-us" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">About Us</Link>
            <Link href="/projects" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Projects</Link>
            <Link href="/services" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Services</Link>
            <Link href="/career" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Career</Link>
            <Link href="/contact-us" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl text-primary">
            ☰
          </button>
        </nav>

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-primary text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1: Logo & Info */}
            <div className="space-y-6">
              <div className="w-48 bg-white p-2 rounded-lg">
                <Image
                  src="/updatedlogo.png"
                  alt="Elsamex Footer Logo"
                  width={240}
                  height={70}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-[15px] font-semibold leading-relaxed pr-4 md:pr-0">
                EMSL is a wholly owned subsidiary of IL&FS
                Transportation Networks Ltd. - a major player in the
                infrastructure development and financing in India for
                the past 25 years.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold hover:text-gray-200 text-[15px]">
                <span className="border-b-2 border-white pb-0.5">Know more</span> <span className="text-lg leading-none">↗</span>
              </a>
            </div>

            {/* Column 2: Office */}
            <div className="space-y-6 md:pl-8">
              <h4 className="text-[28px] font-bold">Office</h4>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:07945878660" className="text-[15px] font-semibold hover:text-gray-200">07945878660</a>
                </div>
                
                <div className="flex items-center gap-4">
                  <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:info@emslindia.com" className="text-[15px] font-semibold hover:text-gray-200">info@emslindia.com</a>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-[18px] h-[18px] flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[15px] font-semibold leading-relaxed">
                    1207 to 1210, Shapath V, S G Highway, Prahladnagar,
                    Ahmedabad, Gujarat - 380015
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="space-y-6 md:pl-12">
              <h4 className="text-[28px] font-bold">Quick links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="flex items-center gap-3 text-[15px] font-semibold hover:text-gray-200"><span className="w-1.5 h-1.5 rounded-full bg-white"></span> Home</Link></li>
                <li><Link href="/about-us" className="flex items-center gap-3 text-[15px] font-semibold hover:text-gray-200"><span className="w-1.5 h-1.5 rounded-full bg-white"></span> About us</Link></li>
                <li><Link href="/contact-us" className="flex items-center gap-3 text-[15px] font-semibold hover:text-gray-200"><span className="w-1.5 h-1.5 rounded-full bg-white"></span> Contact Us</Link></li>
              </ul>
            </div>
            
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-12 mt-16 pt-8 border-t border-white/20 text-[14px]">
            <p>© 2026, All Rights Reserved | Elsamex maintenance Services limited.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
