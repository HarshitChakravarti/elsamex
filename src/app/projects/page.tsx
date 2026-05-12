import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    { name: "Ranchi Ring Road", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects2.jpg" },
    { name: "Jharkhand Road Projects", img: "https://emslindia.com/wp-content/uploads/2025/11/Jharkhand-Road-Projects-1.png" },
    { name: "Chenani–Nashri Tunnelway", img: "https://emslindia.com/wp-content/uploads/2025/11/Chenani–Nashri-Tunnelway-2.png" },
    { name: "Barwa Adda–Panagarh", img: "https://emslindia.com/wp-content/uploads/2025/11/Barwa-Adda-to-Panagarh.png" },
    { name: "Thiruvananthapuram", img: "https://emslindia.com/wp-content/uploads/2024/04/sample-image.png" }, // Using sample map image to match layout or fallback
    { name: "Pune-Solapur", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects3.jpg" },
    { name: "Sikar–Bikaner", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects4.jpg" },
    { name: "Hazaribagh–Ranchi", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects6.jpg" },
    { name: "Moradabad–Bareilly", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects5.jpg" },
  ];

  return (
    <main className="flex flex-col w-full min-h-screen font-sans bg-white">
      {/* Banner Section */}
      <section 
        className="relative w-full h-[600px] flex items-end justify-start bg-cover bg-center"
        style={{ backgroundImage: `url('https://emslindia.com/wp-content/uploads/2024/04/product-listing-page-header-1.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Breadcrumb nav inside header - Assuming Layout adds standard nav, this is part of the banner */}
        
        {/* The Dark Red Box at bottom left */}
        <div className="relative z-10 bg-primary/95 w-full md:w-[600px] md:ml-[10%] p-10 md:p-14 md:pb-16 flex flex-col justify-end">
          <p className="text-secondary font-bold mb-4 font-sans uppercase text-sm tracking-wide">Projects</p>
          <h1 className="text-5xl md:text-[55px] font-bold text-white leading-tight">Works Showcase</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 md:px-[10%] w-full">
        <div className="max-w-6xl mx-auto text-center mb-12 flex flex-col items-center">
          <p className="text-gray-900 text-lg md:text-[19px] font-medium leading-relaxed max-w-5xl text-left md:text-center">
            Elsamex Maintenance Services Limited (EMSL) is currently catering their services as O&M contractor and InvIT Project Manager to two major clients - InvIT (5 Projects) and SPV (9 Projects) besides other external Clients as well.
          </p>
          
          {/* Tabs */}
          <div className="flex gap-4 mt-12 justify-center flex-wrap">
            <button className="border border-secondary text-secondary rounded-full px-8 py-2 font-bold text-sm hover:bg-secondary hover:text-white transition-colors">
              All
            </button>
            <button className="border border-gray-300 text-gray-600 rounded-full px-8 py-2 font-bold text-sm hover:border-secondary hover:text-secondary transition-colors">
              InvIT Projects
            </button>
            <button className="border border-gray-300 text-gray-600 rounded-full px-8 py-2 font-bold text-sm hover:border-secondary hover:text-secondary transition-colors">
              SPV Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="relative aspect-[4/3] w-full group overflow-hidden cursor-pointer shadow-sm">
              <Image 
                src={project.img} 
                alt={project.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
              <h3 className="absolute bottom-6 left-6 text-white font-bold text-[22px] z-10 transition-transform group-hover:-translate-y-1">
                {project.name}
              </h3>
            </div>
          ))}

          {/* Solid Grey Cells for last 3 text-only ones */}
          <div className="relative aspect-[4/3] w-full group overflow-hidden cursor-pointer bg-[#8b8b8b] flex items-end shadow-sm">
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
             <h3 className="absolute bottom-6 left-6 text-white font-bold text-[22px] z-10 max-w-[80%] leading-tight">
                RIDCOR– TMS Maintenance (11 Toll Plazas)
              </h3>
          </div>
          <div className="relative aspect-[4/3] w-full group overflow-hidden cursor-pointer bg-[#8b8b8b] flex items-end shadow-sm">
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
             <h3 className="absolute bottom-6 left-6 text-white font-bold text-[22px] z-10 max-w-[80%] leading-tight">
                RIDCOR – Toll Collection (4 Toll Plazas)
              </h3>
          </div>
          <div className="relative aspect-[4/3] w-full group overflow-hidden cursor-pointer bg-[#8b8b8b] flex items-end shadow-sm">
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
             <h3 className="absolute bottom-6 left-6 text-white font-bold text-[22px] z-10 max-w-[80%] leading-tight">
                Baleshwar–Kharagpur
              </h3>
          </div>
        </div>
      </section>

    </main>
  );
}