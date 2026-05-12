"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const accordionData = [
  {
    num: "01.",
    title: "Asset Maintenance",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          To ensure premiumness of a service delivered, asset maintenance plays an important role. It affirms longevity and safety of road infrastructure. Elsamex&apos;s comprehensive suite of asset maintenance services is designed to optimize the performance and durability of the assets.
        </p>
        <div>
          <p className="font-bold text-gray-900 mb-3">Routine Maintenance</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>General cleaning and upkeep of highways</li>
            <li>Avenue & median Plantation, weed removal, watering, mauring, trimming</li>
            <li>Maintenance & upkeep of road furniture like sign boards, crash barriers, road marking</li>
            <li>Maintenance of highway lighting and other ancillary features</li>
            <li>Pothole filling</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-3">Preventive Maintenance</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Bituminous repairs like fog seal, chip seal, slurry seal, microsurfacing, crack treatment, and thin hot mix overlays.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    num: "02.",
    title: "Tunnel Maintenance",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Tunnel Maintenance forms an indispensable service area for Elsamex Maintenance Services Limited (EMSL), pioneering the longest tunnel route in South East Asia – a 9 kilometer long main tunnel including escape tunnel and cross passages.
        </p>
        <div>
          <p className="font-bold text-gray-900 mb-3">Routine Maintenance</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Mechanical cleaning & upkeep of tunnel</li>
            <li>Maintenance & upkeep of road furniture – sign boards, crash barriers, road marking</li>
            <li>Maintenance of tunnel lighting and other ancillary features</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    num: "03.",
    title: "Incident Management",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Incident Management ensures rapid response, safety protection, and seamless mobility across highway corridors. EMSL operates 24x7 teams equipped with vehicles, medical support, and emergency systems to handle all types of roadway incidents.
        </p>
        <div>
          <p className="font-bold text-gray-900 mb-3">Emergency Response</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Quick Response Teams for accident handling</li>
            <li>Breakdown assistance for stranded vehicles</li>
            <li>Firefighting support and recovery operations</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    num: "04.",
    title: "Intelligent Transportation System (ITS)",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          EMSL offers end-to-end ITS solutions built through in-house software teams, ensuring seamless automation of tolling, traffic monitoring, and highway safety systems.
        </p>
      </div>
    ),
  },
  {
    num: "05.",
    title: "Traffic Management Systems (TMS)",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Robust network configuration preventing traffic congestion and maintaining easy navigation layout across expressways and tunnel networks.
        </p>
      </div>
    ),
  },
  {
    num: "06.",
    title: "Toll Operations",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Manpower supply, management of toll collection, revenue verification, depository logging, and continuous fast-tag network routing infrastructure.
        </p>
      </div>
    ),
  },
  {
    num: "07.",
    title: "Highway Lighting",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Providing 24/7 dedicated support for ensuring all highway infrastructure retains complete illumination per SLA regulations.
        </p>
      </div>
    ),
  },
  {
    num: "08.",
    title: "Mast & Street Light Maintenance",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Monitoring and repairing high mast lighting grids across complex interchanges.
        </p>
      </div>
    ),
  },
  {
    num: "09.",
    title: "Project Monitoring & Supervision",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Continuous tracking of minor to major highway upgrade workflows, generating active reporting and statistical adherence parameters.
        </p>
      </div>
    ),
  },
  {
    num: "10.",
    title: "Contract Management",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Managing concessionaire structures including bidding pipelines, independent engineer interactions, and procedural contract lifecycle deployments.
        </p>
      </div>
    ),
  },
  {
    num: "11.",
    title: "Micro-Surfacing",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Pioneer in the country with cumulative experience of over 50 lakh sqm till date ensuring non-invasive road surface extension.
        </p>
      </div>
    ),
  },
  {
    num: "12.",
    title: "Micro-Surfacing – Performance Glimpses",
    content: (
      <div className="space-y-6">
        <p className="text-gray-800 font-medium leading-relaxed">
          Detailed metrics showcasing the life extension properties of our microsurfacing interventions over the past ten years of applications.
        </p>
      </div>
    ),
  },
  {
    num: "13.",
    title: "InvIT Project Management",
    content: (
      <div className="space-y-6 text-gray-800 font-medium">
        <p className="leading-relaxed mb-6">
          EMSL provides specialized project management support for InvIT portfolios, ensuring operational efficiency, compliance, and sustained asset performance.
        </p>
        
        <div>
          <p className="font-bold text-gray-900 mb-3">Operational Oversight</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Tolling operations & revenue assurance</li>
            <li>Deployment of trained site personnel</li>
            <li>Vendor & material management</li>
          </ul>
        </div>
        
        <div className="mt-6">
          <p className="font-bold text-gray-900 mb-3">Compliance & Reporting</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>CA and statutory compliance</li>
            <li>Pavement testing & structural adequacy checks</li>
            <li>Audit coordination and closure</li>
          </ul>
        </div>

        <div className="mt-6">
          <p className="font-bold text-gray-900 mb-3">Stakeholder Coordination</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Liaison with NHAI, MoRTH, IE & other agencies</li>
            <li>SLA & performance requirement monitoring</li>
            <li>Issue resolution & improvement action planning</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 corresponds to the first item (Asset Maintenance)

  const clients = [
    "Maple",
    "NHIT",
    "National Highway Authority of India",
    "Ministry of Road Transport and Highways",
    "RIDCOR"
  ];

  return (
    <main className="flex flex-col w-full min-h-screen font-sans bg-white pb-0">
      
      {/* Hero Banner Section */}
      <section 
        className="relative w-full h-[600px] flex items-end justify-start bg-cover bg-center"
        style={{ backgroundImage: `url('https://emslindia.com/wp-content/uploads/2024/04/service-page-header.png')`, backgroundColor: '#333' }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        {/* The Dark Red Box at bottom left */}
        <div className="relative z-10 bg-primary/95 w-full md:w-[600px] md:ml-[10%] p-10 md:p-14 md:pb-16 flex flex-col justify-end">
          <p className="text-secondary font-bold mb-3 text-[17px]">Services</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2">What we offer</h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 md:px-[10%] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images on Left */}
          <div className="relative w-full h-[550px]">
            {/* The primary circular badge */}
            <div className="absolute top-10 left-4 z-30 w-32 h-32 md:w-40 md:h-40 bg-primary/95 rounded-full flex items-center justify-center -rotate-12 shadow-lg">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                <path id="curve" fill="transparent" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[10px] font-bold fill-white tracking-widest uppercase">
                  <textPath href="#curve" startOffset="0%">About Us - About Us - About Us -</textPath>
                </text>
              </svg>
              <div className="absolute w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            {/* Top Back Image (Hills/Landscape) */}
            <div className="absolute top-0 right-10 w-[80%] h-[70%] z-10 shadow-lg">
              <Image 
                src="https://emslindia.com/wp-content/uploads/2024/04/who-we-are2.png" 
                alt="Landscape overlay" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Bottom Front Image (Highway with Cars) */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[60%] z-20 shadow-[0_10px_40px_rgba(0,0,0,0.2)] bg-white p-2">
              <Image 
                src="https://emslindia.com/wp-content/uploads/2024/04/brief-aboutus2.png" 
                alt="Highway overlay" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Text on Right */}
          <div className="flex flex-col pr-0 md:pr-10 z-10">
            <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">WHAT WE OFFER</h4>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary leading-[1.1] mb-6">
              Innovative Solutions for Infrastructure O&M to IT systems under one roof
            </h2>
            <p className="text-gray-800 text-[17px] font-medium leading-relaxed">
              Highways play a vital role in the economic development of a nation by linking producers to markets, workers to jobs, students to school, and the sick to hospitals. Operation and Maintenance of Road Infrastructure is a crucial factor. Elsamex having decades of O&M experience helps its clients in maintaining the mega structures ranging from Expressways to Tunnels. Pioneering the concept of Micro surfacing to provide the best in class Traffic Management Solutions , we have Every Solution Under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion List Section */}
      <section className="py-20 px-4 md:px-[10%] w-full relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col relative z-20">
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">SERVICES WE OFFER</h4>
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary leading-[1.1] mb-8">
            EMSL Highway Operations
          </h2>
          <div className="space-y-6 text-gray-800 text-lg font-medium leading-relaxed max-w-5xl mb-16">
            <p>
              Highways aid development by facilitating trade and migration, and reducing barriers to the spread of new technologies. It is not merely the construction of a highway, but also the maintenance that enables a commuter to define the road as the safest, smoothest and reliable source of communication.
            </p>
            <p>
              EMSL approach to highway operations ensure prevention of traffic congestion and provision of safety and easy navigation.
            </p>
          </div>

          {/* Accordion container */}
          <div className="w-full flex flex-col">
            {accordionData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-b border-gray-200 bg-white">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-8 flex flex-col text-left group transition-all"
                  >
                    <span className="text-secondary font-bold text-sm mb-2">{item.num}</span>
                    <h3 className={`text-[32px] md:text-4xl font-extrabold transition-colors ${isOpen ? 'text-black' : 'text-gray-800 group-hover:text-primary'}`}>
                      {item.title}
                    </h3>
                  </button>
                  
                  {/* Dropdown Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] mb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <hr className="w-full border-t border-gray-300 mb-8" />
                    <div className="pt-2 max-w-4xl text-[17px]">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Projects Section Divider (From Screenshot) */}
      <section className="py-24 w-full bg-primary relative overflow-hidden">
        <div className="px-4 md:px-[10%] flex justify-between items-end mb-12">
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">OUR PROJECTS</h4>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Works Showcase</h2>
          </div>
          <div className="flex gap-4">
            <a href="/projects" className="hidden md:inline-flex items-center gap-2 border border-white/20 hover:border-white text-white font-medium py-3 px-8 transition-colors text-sm rounded-full">
              View All <span>↗</span>
            </a>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors text-xl">
              &lt;
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors text-xl">
              &gt;
            </button>
          </div>
        </div>

        <div className="pl-4 md:pl-[10%] flex gap-6 overflow-x-auto hide-scrollbar pb-10">
          
          <div className="min-w-[400px] aspect-[4/3] bg-white flex items-end shadow-sm cursor-pointer p-8 relative">
            <h3 className="text-black font-bold text-[22px] leading-tight z-10 bottom-6 left-6 absolute">Baleshwar-<br/>Kharagpur</h3>
          </div>

          <div className="min-w-[400px] aspect-[4/3] relative group cursor-pointer shadow-sm">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/our-projects2.jpg" fill className="object-cover" alt="Ranchi Ring Road" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-bold text-[22px] z-10">Ranchi Ring Road</h3>
          </div>
          
          <div className="min-w-[400px] aspect-[4/3] relative group cursor-pointer shadow-sm">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/our-projects3.jpg" fill className="object-cover" alt="Pune-Solapur" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-bold text-[22px] z-10">Pune-Solapur</h3>
          </div>
          
          <div className="min-w-[400px] aspect-[4/3] relative group cursor-pointer shadow-sm">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/our-projects4.jpg" fill className="object-cover" alt="Sikar-Bikaner" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-bold text-[22px] z-10">Sikar-Bikaner</h3>
          </div>
          
          <div className="min-w-[400px] aspect-[4/3] relative group cursor-pointer shadow-sm">
            <Image src="https://emslindia.com/wp-content/uploads/2024/04/our-projects5.jpg" fill className="object-cover" alt="Moradabad-Bareilly" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
            <h3 className="absolute bottom-6 left-6 text-white font-bold text-[22px] z-10">Moradabad-Bareilly</h3>
          </div>
        </div>
      </section>

      {/* Our Clientle */}
      <section className="py-24 px-4 w-full bg-white text-center">
        <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">OUR CLIENTLE</h4>
        
        <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center mb-16 px-4 md:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary">
            Take a look @ our clients
          </h2>
          <div className="hidden md:flex gap-4">
             <button className="w-12 h-12 rounded-full border border-gray-800 text-gray-800 flex items-center justify-center text-xl hover:bg-gray-800 hover:text-white transition-colors cursor-pointer">
              &lt;
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-800 text-gray-800 flex items-center justify-center text-xl hover:bg-gray-800 hover:text-white transition-colors cursor-pointer">
              &gt;
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1500px] mx-auto overflow-hidden pl-4 md:pl-12">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-10 pr-12 min-h-[220px] items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="min-w-[280px] h-[160px] bg-white rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex items-center justify-center p-8 text-center"
              >
                <p className="font-medium text-gray-800 text-lg leading-snug">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
