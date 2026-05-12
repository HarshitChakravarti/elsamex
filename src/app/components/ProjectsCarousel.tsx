"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  img?: string;
  state?: string;
  authority?: string;
  model?: string;
  servingSince?: string;
  length?: string;
};

const projects: Project[] = [
  {
    name: "Ranchi Ring Road",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects2.jpg",
    state: "Jharkhand",
    authority: "Government of Jharkhand",
    model: "Annuity",
    servingSince: "April 2015",
    length: "141 lane-km",
  },
  {
    name: "Jharkhand Road Projects",
    img: "https://emslindia.com/wp-content/uploads/2025/11/Jharkhand-Road-Projects-1.png",
    state: "Jharkhand",
    authority: "Government of Jharkhand",
    model: "Annuity",
    servingSince: "April 2015",
    length: "664 lane-km",
  },
  {
    name: "Chenani–Nashri Tunnelway",
    img: "https://emslindia.com/wp-content/uploads/2025/11/Chenani–Nashri-Tunnelway-2.png",
    state: "Jammu & Kashmir",
    authority: "NHAI",
    model: "Annuity",
    servingSince: "December 2014",
    length: "38 lane-km",
  },
  {
    name: "Barwa Adda–Panagarh",
    img: "https://emslindia.com/wp-content/uploads/2025/11/Barwa-Adda-to-Panagarh.png",
    state: "West Bengal & Jharkhand",
    authority: "NHAI",
    model: "Toll",
    servingSince: "April 2015",
    length: "727 lane-km",
  },
  {
    name: "Thiruvananthapuram",
    img: "https://emslindia.com/wp-content/uploads/2024/04/sample-image.png",
    state: "Kerala",
    authority: "Kerala Road Fund Board (Government of Kerala)",
    model: "Annuity",
    servingSince: "January 2016",
    length: "108 lane-km",
  },
  {
    name: "Pune–Solapur",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects3.jpg",
    state: "Maharashtra",
    authority: "NHAI",
    model: "Toll",
    servingSince: "February 2014",
    length: "571 lane-km",
  },
  {
    name: "Sikar–Bikaner",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects4.jpg",
    state: "Rajasthan",
    authority: "Ministry of Road Transport & Highways (MoRTH)",
    model: "Toll",
    servingSince: "November 2015",
    length: "540 lane-km",
  },
  {
    name: "Hazaribagh–Ranchi",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects6.jpg",
    state: "Jharkhand",
    authority: "NHAI",
    model: "Annuity",
    servingSince: "April 2015",
    length: "319 lane-km",
  },
  {
    name: "Moradabad–Bareilly",
    img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects5.jpg",
    state: "Uttar Pradesh",
    authority: "NHAI",
    model: "Toll",
    servingSince: "February 2015",
    length: "522 lane-km",
  },
  {
    name: "RIDCOR– TMS Maintenance (11 Toll Plazas)",
    state: "Rajasthan",
    authority: "Government of Rajasthan",
    model: "TMS O&M",
    servingSince: "July 2022",
  },
  {
    name: "RIDCOR – Toll Collection (4 Toll Plazas)",
    state: "Rajasthan",
    authority: "Government of Rajasthan",
    model: "Toll",
    servingSince: "July 2022",
    length: "Not applicable (Tolling only – covers 4 toll plazas)",
  },
  {
    name: "Baleshwar–Kharagpur",
    state: "West Bengal & Odisha",
    authority: "NHAI",
    model: "Toll",
    servingSince: "April 2018",
    length: "477 lane-km",
  },
];

// Duplicate for seamless loop
const looped = [...projects, ...projects];

export default function ProjectsCarousel() {
  return (
    <section className="py-24 w-full bg-primary relative overflow-hidden">
      <div className="px-4 md:px-[10%] flex flex-col gap-8 md:flex-row md:justify-between md:items-end mb-12">
        <div>
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">OUR PROJECTS</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Works Showcase</h2>
        </div>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white font-medium py-2 px-6 transition-colors text-sm rounded-full"
          >
            View All <span>↗</span>
          </Link>
        </div>
      </div>

      {/* Marquee track */}
      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] pb-12">
          {looped.map((project, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[400px] group">
              {/* Card image + overlay */}
              <div className="aspect-[4/3] relative cursor-pointer overflow-hidden bg-[#3a3a3a]">
                {/* Background image */}
                {project.img && (
                  <Image
                    src={project.img}
                    fill
                    sizes="(min-width: 768px) 400px, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={project.name}
                  />
                )}

                {/* Default dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-center px-6 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm mb-1">
                    <span className="font-bold">State: </span>{project.state ?? "—"}
                  </p>
                  <p className="text-white text-sm mb-1">
                    <span className="font-bold">Authority: </span>{project.authority ?? "—"}
                  </p>
                  <p className="text-white text-sm mb-1">
                    <span className="font-bold">Model: </span>{project.model ?? "—"}
                  </p>
                  <p className="text-white text-sm mb-1">
                    <span className="font-bold">Serving Since: </span>{project.servingSince ?? "—"}
                  </p>
                  {project.length && (
                    <p className="text-white text-sm">
                      <span className="font-bold">Length: </span>{project.length}
                    </p>
                  )}
                </div>
              </div>

              {/* Project name below card */}
              <h3 className="mt-5 text-white font-bold text-xl leading-tight">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
