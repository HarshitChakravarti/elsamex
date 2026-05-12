export default function ContactUs() {
  return (
    <main className="flex flex-col w-full min-h-screen font-sans bg-white pb-0">
      
      {/* Hero Banner Section */}
      <section 
        className="relative w-full h-[600px] flex items-end justify-start bg-cover bg-center"
        style={{ backgroundImage: `url('https://emslindia.com/wp-content/uploads/2024/04/contact-page-header.png')`, backgroundColor: '#333' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        {/* The Dark Red Box at bottom left */}
        <div className="relative z-10 bg-primary/95 w-full md:w-[600px] md:ml-[10%] p-10 md:p-14 md:pb-16 flex flex-col justify-end">
          <p className="text-secondary font-bold mb-3 text-[17px]">Contact Us</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2">Get in touch with us</h1>
        </div>
      </section>

      {/* Map and Office Address Section */}
      <section className="py-24 px-4 w-full relative">
        <div className="max-w-[1400px] mx-auto relative h-[500px]">
          {/* Map iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14672.610523787309!2d72.6809154!3d23.1646288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8020da76bb63%3A0xb09a26b44cbc967b!2sElsamex!5e0!3m2!1sen!2sin!4v1711460627538!5m2!1sen!2sin" 
            className="absolute inset-0 w-full h-full border-0 rounded-lg filter grayscale opacity-90"
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlapping Info Boxes */}
          <div className="absolute top-1/2 left-4 md:left-[10%] md:right-[10%] -translate-y-1/2 flex flex-col md:flex-row gap-6 md:gap-10 pointer-events-none justify-center items-center w-[calc(100%-2rem)] md:w-auto">
            
            {/* Registered Office Box */}
            <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-8 max-w-sm w-full pointer-events-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Registered office:</h3>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gray-800 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-gray-700 font-medium text-lg leading-snug">
                  Plot C-22, G Block, Bandra Kurla Complex, Bandra (East), Mumbai - 400 051
                </p>
              </div>
            </div>

            {/* Corporate Office Box */}
            <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-8 max-w-sm w-full pointer-events-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate office:</h3>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gray-800 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-gray-700 font-medium text-lg leading-snug">
                  1207 to 1210, Shapath V, S G Highway, Prahladnagar, Ahmedabad, Gujarat - 380015
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-4 w-full bg-white relative">
        {/* Background typographic element */}
        <div 
          className="absolute right-0 bottom-0 w-1/3 h-full opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 100% 100%, transparent 0%, transparent 20%, #000 21%, transparent 22%, transparent 40%, #000 41%, transparent 42%, transparent 60%, #000 61%, transparent 62%, transparent 80%, #000 81%, transparent 82%)`,
            backgroundSize: `600px 600px`
          }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">SEND US A MESSAGE</h4>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary mb-16 leading-tight">
            Offering an array of services in the fields of highway maintenance.
          </h2>

          <form className="w-full flex flex-col gap-6 text-left">
            <input 
              type="text" 
              placeholder="Full Name*" 
              className="w-full bg-gray-50 border-0 rounded-full px-8 py-5 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-gray-400"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="email" 
                placeholder="Email address*" 
                className="w-full bg-gray-50 border-0 rounded-full px-8 py-5 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-gray-400"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone number*" 
                className="w-full bg-gray-50 border-0 rounded-full px-8 py-5 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-gray-400"
                required
              />
            </div>
            <textarea 
              placeholder="Type your message here..." 
              rows={6}
              className="w-full bg-gray-50 border-0 rounded-3xl px-8 py-6 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-gray-400 resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              className="mt-4 w-full py-4 rounded-full border-2 border-secondary text-secondary font-bold text-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}