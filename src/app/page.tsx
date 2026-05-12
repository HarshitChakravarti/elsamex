import Image from "next/image";
import ProjectsCarousel from "./components/ProjectsCarousel";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[100vh] flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url('https://emslindia.com/wp-content/uploads/2024/04/banner.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4 md:px-16 lg:px-[10%] max-w-5xl text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            The Digital Era of Road Maintenance <br />
            Service
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-bold">
            Service: <span className="font-normal">Toll Operations</span>
          </p>
          <p className="text-xl md:text-2xl mb-10 font-bold">
            Length: <span className="font-normal">Lane Kms: 3000+</span>
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white font-medium py-3 px-8 transition-colors text-sm rounded-full"
          >
            Know more <span className="text-lg">↗</span>
          </a>
        </div>
      </section>

      {/* Services At a Glance */}
      <section className="py-24 w-full bg-gray-50 relative">
        <div className="text-center mb-16 px-4">
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">WORK WITH US / EXPLORE TENDERS</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight max-w-4xl mx-auto">
            EMSL’s Approach to Road Operations and Maintenance at a Glance
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all rounded">
            <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight transition-colors group-hover:text-secondary">Asset maintenance <br /> Services</h3>
            <ul className="text-gray-400 space-y-3 text-[15px]">
              <li><span className="mr-2 text-gray-300">•</span>Routine Maintenance</li>
              <li><span className="mr-2 text-gray-300">•</span>Periodic Maintenance</li>
              <li><span className="mr-2 text-gray-300">•</span>Preventive Maintenance</li>
            </ul>
          </div>

          {/* Card 2  */}
          <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all rounded">
            <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight transition-colors">Incident Management <br /> Services</h3>
            <ul className="text-gray-400 space-y-3 text-[15px]">
              <li><span className="mr-2 text-gray-300">•</span>Road Patrolling and Surveillance</li>
              <li><span className="mr-2 text-gray-300">•</span>Ambulance Services</li>
              <li><span className="mr-2 text-gray-300">•</span>Provision of Tow Away Cranes</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all rounded">
            <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight transition-colors">Toll & Checkpost <br /> Operation Services</h3>
            <ul className="text-gray-400 space-y-3 text-[15px]">
              <li><span className="mr-2 text-gray-300">•</span>Manpower Supply for Tolling and Checkpost Operations</li>
              <li><span className="mr-2 text-gray-300">•</span>Management of Toll Collection, Verification, Deposition, Reconciliation etc.</li>
              <li><span className="mr-2 text-gray-300">•</span>Business Analytics</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all rounded">
            <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight transition-colors">Intelligent Transportations <br /> Systems</h3>
            <ul className="text-gray-400 space-y-3 text-[15px]">
              <li><span className="mr-2 text-gray-300">•</span>Toll Management Systems</li>
              <li><span className="mr-2 text-gray-300">•</span>Advanced Traffic Management Systems</li>
              <li><span className="mr-2 text-gray-300">•</span>Toll Plaza Electrical Works and Highway Lighting</li>
            </ul>
          </div>

          {/* Additional Cards Row 2 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4 lg:mx-auto mt-2">
             {/* Card 5 */}
            <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all rounded">
              <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight">Project Management <br /> Services</h3>
              <ul className="text-gray-400 space-y-3 text-[15px]">
                <li><span className="mr-2 text-gray-300">•</span>Preparation and tracking of Monthly Maintenance plans</li>
                <li><span className="mr-2 text-gray-300">•</span>Monitoring & Supervision of Major Maintenance works and overlay</li>
              </ul>
            </div>

             {/* Card 6 */}
             <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all rounded">
              <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight">Process support - <br /> Contracts & Procurement</h3>
              <ul className="text-gray-400 space-y-3 text-[15px]">
                <li><span className="mr-2 text-gray-300">•</span>Managing / Administration of CA on behalf of Concessionaire</li>
                <li><span className="mr-2 text-gray-300">•</span>Contract Management & Contractual correspondence</li>
              </ul>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all rounded group hover:border-t-2 hover:border-t-secondary">
              <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight group-hover:text-secondary">Pavement upgradation <br /> - Microsurfacing</h3>
              <ul className="text-gray-400 space-y-3 text-[15px]">
                <li><span className="mr-2 text-gray-300">•</span>Pioneer in country with cumulative experience of over 50 lakh sqm till date</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-24 px-4 md:px-[10%] w-full relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">WHO ARE WE?</h4>
          <h2 className="text-4xl md:text-[54px] font-extrabold text-primary leading-[1.1] mb-8">
            Operating Digital Highways of Growth and Prosperity
          </h2>
          <div className="space-y-6 text-gray-800 text-lg font-medium leading-relaxed max-w-5xl">
            <p>
              Elsamex Maintenance Services Limited is a premier contractor specializing in the operations and maintenance of road infrastructure, proudly serving since 2013. With a rich legacy spanning over a decade, we have established ourselves as an industry leader, successfully executing projects across multiple sectors both nationally and internationally.
            </p>
            <p>
              At Elsamex, we take pride in delivering comprehensive, end-to-end solutions for Infrastructure Operations & Maintenance (O&M) and Intelligent Transportation (IT) Systems — all under one roof. From routine and periodic maintenance to advanced digital asset management, we ensure excellence at every stage of the road and tunnel maintenance lifecycle.
            </p>
            <p>
              Our O&M services are tailored to meet the diverse requirements of both Infrastructure Investment Trusts (InvITs) and traditional Concessionaire/SPV models. With an unwavering commitment to quality, safety, and innovation, Elsamex continues to redefine standards in infrastructure O&M — positioning itself as a trusted partner and project manager for Concessionaires and InvITs across India.
            </p>
          </div>
        </div>
      </section>

      {/* Short Brief Section */}
      <section className="py-24 px-4 md:px-[10%] w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text on Left */}
          <div className="flex flex-col pr-0 md:pr-10">
            <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">SHORT BRIEF ABOUT US</h4>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary leading-[1.1] mb-6">
              Elsamex Maintenance Services Operation, Maintenance, Periodic Renewal & Toll Management System for Road Infrastructure
            </h2>
            <p className="text-gray-800 text-lg font-medium leading-relaxed mb-10">
              Providing consultation, supervision, construction, operation and maintenance and other infrastructure related activities for roads, highways, tunnels, stadiums, runways, toll management etc.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-secondary text-black font-medium py-3 px-8 transition-colors text-[15px] rounded-full w-max"
            >
              Know more <span className="text-secondary text-lg">↗</span>
            </a>
          </div>
          
          {/* Images on Right */}
          <div className="relative w-full h-[600px]">
            {/* The primary circular badge */}
            <div className="absolute top-10 right-10 z-30 w-32 h-32 md:w-36 md:h-36 bg-primary/95 rounded-full flex items-center justify-center -rotate-12 shadow-lg">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                <path id="curve" fill="transparent" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[10px] font-bold fill-white tracking-widest uppercase">
                  <textPath href="#curve" startOffset="0%">About Us - About Us - About Us -</textPath>
                </text>
              </svg>
              <div className="absolute w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            {/* Top landscape image */}
            <div className="absolute top-0 right-0 w-[80%] h-[80%] z-10 shadow-lg">
              <Image 
                src="https://emslindia.com/wp-content/uploads/2024/04/brief-aboutus1.jpg" 
                alt="Landscape" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Bottom left highway image */}
            <div className="absolute bottom-10 left-0 w-[60%] h-[60%] z-20 shadow-[0_10px_40px_rgba(0,0,0,0.2)] bg-white p-2">
              <Image 
                src="https://emslindia.com/wp-content/uploads/2024/04/brief-aboutus2.png" 
                alt="Highway" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectsCarousel />

      {/* Investor Relations */}
      <section className="py-24 px-4 md:px-[10%] w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[500px]">
            <Image src="https://emslindia.com/wp-content/uploads/2025/11/heavy-machinery-used-construction-industry-1.jpg" fill className="object-cover" alt="Digger" />
            <div className="absolute top-0 right-0 bg-primary/95 p-10 flex flex-col items-center justify-center text-white w-48 h-48 hover:bg-primary transition-colors cursor-pointer cursor-pointer">
              <img src="https://emslindia.com/wp-content/themes/elsamex/img/download-pdf-icon.svg" alt="PDF" className="w-12 h-12 mb-4" />
              <span className="font-bold text-sm text-center uppercase tracking-wider">DOWNLOAD<br/>PDF</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">INVESTOR RELATIONS</h4>
            <h2 className="text-4xl md:text-[54px] font-extrabold text-primary leading-[1.1]">
              Committed to improving the available solutions and finding new ones
            </h2>
          </div>
        </div>
      </section>

    </main>
  );
}
