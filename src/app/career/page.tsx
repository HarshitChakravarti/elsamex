import Image from "next/image";

export default function Career() {
  return (
    <main className="flex flex-col w-full min-h-screen font-sans bg-white pb-0">
      
      {/* Hero Banner Section */}
      <section 
        className="relative w-full h-[600px] flex items-end justify-start bg-cover bg-center"
        style={{ backgroundImage: `url('https://emslindia.com/wp-content/uploads/2024/04/career-page-header.png')`, backgroundColor: '#333' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        {/* The Dark Red Box at bottom left */}
        <div className="relative z-10 bg-primary/95 w-full md:w-[600px] md:ml-[10%] p-10 md:p-14 md:pb-16 flex flex-col justify-end">
          <p className="text-secondary font-bold mb-3 text-[17px]">Career</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2">Life at Elsamex</h1>
        </div>
      </section>

      {/* Become a part of the EMSL family */}
      <section className="py-24 px-4 md:px-[10%] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full h-[450px] relative shadow-md">
            <Image 
              src="https://emslindia.com/wp-content/uploads/2024/04/life-emsl.png" 
              alt="Life at EMSL" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="flex flex-col relative w-full h-full justify-center">
            {/* Topo background element underneath text */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none z-0"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent 20%, #000 21%, transparent 22%, transparent 40%, #000 41%, transparent 42%, transparent 60%, #000 61%, transparent 62%, transparent 80%, #000 81%, transparent 82%)`,
                backgroundSize: `400px 400px`
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">LIFE AT ELSAMEX</h4>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary leading-[1.1] mb-6">
                Become a part of the EMSL family
              </h2>
              <div className="space-y-6 text-gray-800 font-medium leading-relaxed pr-0 md:pr-10 text-[17px]">
                <p>
                  Our most valuable asset is our people and therefore we attribute EMSL growth and success to our strong workforce of over 3000 professionals working for us from different regions of India. The heights that we have scaled for EMSL is solely based on the teamwork of our employees, who continue to do a good job for EMSL betterment each and every day to take it further up the growth radar. Containing various skill-sets and backgrounds, our team always comes up with their best by putting in their knowledge and experience into practical work.
                </p>
                <p>
                  We believe in recognizing and rewarding our employees based on their performance and hence we ensure to provide them training at every step while they move up the ladder. This is how we have our team members working for us and staying with us for over a decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join us as we help you build your career */}
      <section className="py-24 px-4 w-full bg-white text-center">
        <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4 text-center">OPPORTUNITY WITH US</h4>
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary max-w-4xl mx-auto mb-16">
          Join us as we help you build your career, it&apos;s not just a job
        </h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Opportunity 1 */}
          <div className="relative w-full aspect-square group cursor-pointer overflow-hidden shadow-sm">
            <Image 
              src="https://emslindia.com/wp-content/uploads/2024/04/opportunity1.png" 
              alt="Employees' Recognition Ceremonies" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-8 left-8 text-white font-bold text-3xl z-10 text-left pr-4 leading-tight">
              Employees&apos; Recognition Ceremonies
            </h3>
          </div>
          
          {/* Opportunity 2 */}
          <div className="relative w-full aspect-square group cursor-pointer overflow-hidden shadow-sm">
            <Image 
              src="https://emslindia.com/wp-content/uploads/2024/04/opportunity2.png" 
              alt="Celebrations @ EMSL" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-8 left-8 text-white font-bold text-3xl z-10 text-left pr-4 leading-tight">
              Celebrations @ EMSL
            </h3>
          </div>

          {/* Opportunity 3 */}
          <div className="relative w-full aspect-square group cursor-pointer overflow-hidden shadow-sm">
            <Image 
              src="https://emslindia.com/wp-content/uploads/2024/04/opportunity3.png" 
              alt="Training & Development" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-8 left-8 text-white font-bold text-3xl z-10 text-left pr-4 leading-tight">
              Training & Development
            </h3>
          </div>
        </div>
      </section>

      {/* What are we looking for */}
      <section className="py-24 px-4 md:px-[10%] w-full relative overflow-hidden bg-white">
        {/* Right side background elements */}
        <div 
          className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent 20%, #ccc 21%, transparent 22%, transparent 40%, #ccc 41%, transparent 42%, transparent 60%, #ccc 61%, transparent 62%, transparent 80%, #ccc 81%, transparent 82%)`,
            backgroundSize: `400px 400px`
          }}
        ></div>

        <div className="relative z-10 mb-16">
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">WORK WITH ELSAMEX</h4>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary">
            What are we looking for
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 max-w-7xl">
          
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="w-16 h-16 relative mb-6">
              {/* Radial orange gradient behind the icon */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-20 scale-[2]"></div>
              <Image src="https://emslindia.com/wp-content/uploads/2024/04/looking-for-icon1.png" alt="Strong Credentials" fill className="object-contain relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Strong Credentials</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              We strive to look for candidates with the right qualifications, understanding and specific skill-sets pertaining to the job role they will be considered for. As a part of our evaluation process, we are very keen to know if the candidate is open to learning and growing in the job so as to become an asset to the organization.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="w-16 h-16 relative mb-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-20 scale-[2]"></div>
              <Image src="https://emslindia.com/wp-content/uploads/2024/04/looking-for-icon2.png" alt="Work Ethics" fill className="object-contain relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Ethics</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              EMSL has witnessed exponential growth throughout the years and so have our career opportunities. Work ethics plays a key role in adding value to our organization and its journey up the ladder. Team work, commitment and strong work ethics are what we look for in a candidate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <div className="w-16 h-16 relative mb-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-20 scale-[2]"></div>
              <Image src="https://emslindia.com/wp-content/uploads/2024/04/looking-for-icon3.png" alt="Positive Attitude" fill className="object-contain relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Positive Attitude</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Candidates with the right attitude and determination to accomplish tasks efficiently and skillfully are what we are looking for
            </p>
          </div>

        </div>
      </section>

      {/* The cadre to be a part of / Photo Gallery */}
      <section className="py-24 w-full bg-white relative">
        <div className="text-center mb-12">
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">PHOTO GALLERY</h4>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary">
            The cadre to be a part of
          </h2>
        </div>
        
        {/* Custom Masonry / Grid gap-1 */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-1 auto-rows-[250px] md:auto-rows-[300px]">
          <div className="relative w-full h-full group overflow-hidden">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/pg1.png" alt="Gallery 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="relative w-full h-full group overflow-hidden">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/pg2.png" alt="Gallery 2" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="relative w-full h-full group overflow-hidden">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/pg3.png" alt="Gallery 3" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="relative w-full h-full group overflow-hidden">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/pg4.png" alt="Gallery 4" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="relative w-full h-full group overflow-hidden">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/pg5.png" alt="Gallery 5" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="relative w-full h-full group overflow-hidden">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/pg6.png" alt="Gallery 6" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="relative w-full h-full group overflow-hidden">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/pg7.png" alt="Gallery 7" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="relative w-full h-full group overflow-hidden bg-gray-100">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/pg8.png" alt="Gallery 8" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

      </section>

    </main>
  );
}