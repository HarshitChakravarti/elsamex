import type { Metadata } from "next";
import Image from "next/image";
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
          <a href="/" className="w-56 block">
            <Image
              src="/logo.png"
              alt="Elsamex Logo"
              width={240}
              height={70}
              className="w-full h-auto object-contain"
            />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center font-bold text-gray-800 text-sm uppercase tracking-wider">
            <a href="/" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Home</a>
            <a href="/about-us" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">About Us</a>
            <a href="/projects" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Projects</a>
            <a href="/services" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Services</a>
            <a href="#" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Career</a>
            <a href="#" className="hover:text-secondary border-b-2 border-transparent hover:border-secondary pb-1 transition-all">Contact Us</a>
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
        <footer className="bg-[#f0f0f0] pt-16 pb-8 border-t-[12px] border-secondary">
          <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Column 1: Investor Relations / Logo */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase tracking-wider text-gray-800">INVESTOR RELATIONS</h4>
              <p className="text-gray-600 font-medium">Committed to improving the available solutions and finding new ones</p>
              <div className="w-48 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <img src="/logo.png" alt="Elsamex Footer Logo" className="w-full h-auto" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed pt-2">
                EMSL is a wholly owned subsidiary of IL&FS Transportation Networks Ltd. - a
                major player in the infrastructure development and financing in India for the past
                25 years.
              </p>
              <a href="#" className="inline-block text-primary font-bold hover:text-secondary uppercase tracking-widest text-sm border-b-2 border-primary pb-1">Know more</a>
            </div>

            {/* Column 2: Office */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase tracking-wider text-gray-800">Office</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex-shrink-0 bg-primary rounded-full flex items-center justify-center p-2">
                    <img src="https://emslindia.com/wp-content/uploads/2024/04/footer-phone.svg" alt="Phone" className="w-full h-full object-contain filter invert" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1 text-sm uppercase">CALL US</h5>
                    <a href="tel:07945878660" className="text-gray-600 hover:text-secondary">07945878660</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex-shrink-0 bg-primary rounded-full flex items-center justify-center p-2">
                    <img src="https://emslindia.com/wp-content/uploads/2024/04/footer-email.svg" alt="Email" className="w-full h-full object-contain filter invert" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1 text-sm uppercase">EMAIL US</h5>
                    <a href="mailto:info@emslindia.com" className="text-gray-600 hover:text-secondary">info@emslindia.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex-shrink-0 bg-primary rounded-full flex items-center justify-center p-2">
                    <img src="https://emslindia.com/wp-content/uploads/2024/04/footer-address.svg" alt="Phone" className="w-full h-full object-contain filter invert" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1 text-sm uppercase">OUR LOCATION</h5>
                    <p className="text-gray-600 leading-relaxed text-sm">1207 to 1210, Shapath V, S G Highway, Prahladnagar, Ahmedabad, Gujarat - 380015</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase tracking-wider text-gray-800">Quick links</h4>
              <ul className="space-y-4">
                <li><a href="/" className="flex items-center gap-2 text-gray-600 hover:text-secondary font-medium"><span className="text-secondary">•</span> Home</a></li>
                <li><a href="/about-us" className="flex items-center gap-2 text-gray-600 hover:text-secondary font-medium"><span className="text-secondary">•</span> About us</a></li>
                <li><a href="/projects" className="flex items-center gap-2 text-gray-600 hover:text-secondary font-medium"><span className="text-secondary">•</span> Projects</a></li>
                <li><a href="#" className="flex items-center gap-2 text-gray-600 hover:text-secondary font-medium"><span className="text-secondary">•</span> Contact Us</a></li>
              </ul>
            </div>
            
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-12 mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026, All Rights Reserved | Elsamex Maintenance Services Limited.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary">Privacy Policy</a>
              <a href="#" className="hover:text-secondary">Terms & Conditions</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
