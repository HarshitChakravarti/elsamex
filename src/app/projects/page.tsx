"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectCategory = "all" | "invit" | "spv";

type Project = {
  name: string;
  category: Exclude<ProjectCategory, "all">;
  img?: string;
  state?: string;
  authority?: string;
  model?: string;
  servingSince?: string;
  length?: string;
};

const invitProjects: Project[] = [
  {
    name: "Barwa Adda–Panagarh",
    category: "invit",
    img: "https://emslindia.com/wp-content/uploads/2025/11/Barwa-Adda-to-Panagarh.png",
    state: "West Bengal & Jharkhand",
    authority: "NHAI",
    model: "Toll",
    servingSince: "April 2015",
    length: "727 lane-km",
  },
  {
    name: "Thiruvananthapuram",
    category: "invit",
    img: "https://emslindia.com/wp-content/uploads/2024/04/sample-image.png",
    state: "Kerala",
    authority: "Kerala Road Fund Board (Government of Kerala)",
    model: "Annuity",
    servingSince: "January 2016",
    length: "108 lane-km",
  },
  {
    name: "Pune–Solapur",
    category: "invit",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects3.jpg",
    state: "Maharashtra",
    authority: "NHAI",
    model: "Toll",
    servingSince: "February 2014",
    length: "571 lane-km",
  },
  {
    name: "Sikar–Bikaner",
    category: "invit",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects4.jpg",
    state: "Rajasthan",
    authority: "Ministry of Road Transport & Highways (MoRTH)",
    model: "Toll",
    servingSince: "November 2015",
    length: "540 lane-km",
  },
  {
    name: "Hazaribagh–Ranchi",
    category: "invit",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects6.jpg",
    state: "Jharkhand",
    authority: "NHAI",
    model: "Annuity",
    servingSince: "April 2015",
    length: "319 lane-km",
  },
  {
    name: "Moradabad–Bareilly",
    category: "invit",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects5.jpg",
    state: "Uttar Pradesh",
    authority: "NHAI",
    model: "Toll",
    servingSince: "February 2015",
    length: "522 lane-km",
  },
];

const spvProjects: Project[] = [
  {
    name: "Ranchi Ring Road",
    category: "spv",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects2.jpg",
    state: "Jharkhand",
    authority: "Government of Jharkhand",
    model: "Annuity",
    servingSince: "April 2015",
    length: "141 lane-km",
  },
  {
    name: "Jharkhand Road Projects",
    category: "spv",
    img: "https://emslindia.com/wp-content/uploads/2025/11/Jharkhand-Road-Projects-1.png",
    state: "Jharkhand",
    authority: "Government of Jharkhand",
    model: "Annuity",
    servingSince: "April 2015",
    length: "664 lane-km",
  },
  {
    name: "Chenani–Nashri Tunnelway",
    category: "spv",
    img: "https://emslindia.com/wp-content/uploads/2025/11/Chenani–Nashri-Tunnelway-2.png",
    state: "Jammu & Kashmir",
    authority: "NHAI",
    model: "Annuity",
    servingSince: "December 2014",
    length: "38 lane-km",
  },
  {
    name: "RIDCOR– TMS Maintenance (11 Toll Plazas)",
    category: "spv",
    state: "Rajasthan",
    authority: "Government of Rajasthan",
    model: "TMS O&M",
    servingSince: "July 2022",
  },
  {
    name: "RIDCOR – Toll Collection (4 Toll Plazas)",
    category: "spv",
    state: "Rajasthan",
    authority: "Government of Rajasthan",
    model: "Toll",
    servingSince: "July 2022",
    length: "Not applicable (Tolling only – covers 4 toll plazas)",
  },
  {
    name: "Baleshwar–Kharagpur",
    category: "spv",
    state: "West Bengal & Odisha",
    authority: "NHAI",
    model: "Toll",
    servingSince: "April 2018",
    length: "477 lane-km",
  },
];

const allProjects = [...invitProjects, ...spvProjects];

const tabs: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "InvIT Projects", value: "invit" },
  { label: "SPV Projects", value: "spv" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[4/3] w-full group overflow-hidden cursor-pointer bg-[#3a3a3a] shadow-sm">
      {/* Background image */}
      {project.img && (
        <Image
          src={project.img}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Default gradient + name */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-0" />
      <h3 className="absolute bottom-6 left-6 right-6 text-white font-bold text-[22px] z-10 leading-tight transition-opacity duration-300 group-hover:opacity-0">
        {project.name}
      </h3>

      {/* Hover overlay with details */}
      <div className="absolute inset-0 bg-black/80 flex flex-col justify-center px-8 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <p className="text-white text-sm mb-2">
          <span className="font-bold">State: </span>{project.state ?? "—"}
        </p>
        <p className="text-white text-sm mb-2">
          <span className="font-bold">Authority: </span>{project.authority ?? "—"}
        </p>
        <p className="text-white text-sm mb-2">
          <span className="font-bold">Model: </span>{project.model ?? "—"}
        </p>
        <p className="text-white text-sm mb-2">
          <span className="font-bold">Serving Since: </span>{project.servingSince ?? "—"}
        </p>
        {project.length && (
          <p className="text-white text-sm">
            <span className="font-bold">Length: </span>{project.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const visibleProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <main className="flex flex-col w-full min-h-screen font-sans bg-white">
      {/* Banner Section */}
      <section 
        className="relative w-full h-[600px] flex items-end justify-start bg-cover bg-center"
        style={{ backgroundImage: `url('https://emslindia.com/wp-content/uploads/2024/04/product-listing-page-header-1.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
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
            Elsamex Maintenance Services Limited (EMSL) is currently catering their services as O&M contractor and InvIT Project Manager to two major clients - InvIT and SPV besides other external Clients as well.
          </p>
          
          {/* Tabs */}
          <div className="flex gap-4 mt-12 justify-center flex-wrap">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.value;

              return (
                <button
                  key={tab.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(tab.value)}
                  className={`rounded-full px-8 py-2 font-bold text-sm transition-colors border ${
                    isActive
                      ? "border-secondary text-secondary"
                      : "border-gray-300 text-gray-600 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={`${project.category}-${project.name}`} project={project} />
          ))}
        </div>
      </section>

    </main>
  );
}
