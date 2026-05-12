"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

type Project = {
  name: string;
  img?: string;
};

const projects: Project[] = [
  { name: "Barwa Adda–Panagarh", img: "https://emslindia.com/wp-content/uploads/2025/11/Barwa-Adda-to-Panagarh.png" },
  { name: "Thiruvananthapuram", img: "https://emslindia.com/wp-content/uploads/2024/04/sample-image.png" },
  { name: "Pune–Solapur", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects3.jpg" },
  { name: "Sikar–Bikaner", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects4.jpg" },
  { name: "Hazaribagh–Ranchi", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects6.jpg" },
  { name: "Moradabad–Bareilly", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects5.jpg" },
  { name: "Ranchi Ring Road", img: "https://emslindia.com/wp-content/uploads/2024/04/our-projects2.jpg" },
  { name: "Jharkhand Road Projects", img: "https://emslindia.com/wp-content/uploads/2025/11/Jharkhand-Road-Projects-1.png" },
  { name: "Chenani–Nashri Tunnelway", img: "https://emslindia.com/wp-content/uploads/2025/11/Chenani–Nashri-Tunnelway-2.png" },
  { name: "RIDCOR– TMS Maintenance (11 Toll Plazas)" },
  { name: "RIDCOR – Toll Collection (4 Toll Plazas)" },
  { name: "Baleshwar–Kharagpur" },
];

const INITIAL_BEFORE_REPEATS = 2;
const INITIAL_AFTER_REPEATS = 4;

export default function ProjectsCarousel() {
  const [beforeRepeats, setBeforeRepeats] = useState(INITIAL_BEFORE_REPEATS);
  const [afterRepeats, setAfterRepeats] = useState(INITIAL_AFTER_REPEATS);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const pendingPrependWidthRef = useRef(0);
  const isExtendingBeforeRef = useRef(false);
  const isExtendingAfterRef = useRef(false);

  const loopedProjects = useMemo(
    () =>
      Array.from(
        { length: beforeRepeats + afterRepeats + 1 },
        (_, copyIndex) => copyIndex - beforeRepeats,
      ).flatMap((copyIndex) =>
        projects.map((project) => ({
          ...project,
          copyIndex,
        })),
      ),
    [afterRepeats, beforeRepeats],
  );

  const getCardStep = useCallback(() => {
    const scroller = scrollerRef.current;
    const firstCard = scroller?.querySelector<HTMLElement>("[data-project-card]");

    if (!scroller || !firstCard) {
      return 0;
    }

    const gap = parseFloat(window.getComputedStyle(scroller).columnGap || "0");

    return firstCard.offsetWidth + gap;
  }, []);

  const getProjectSetWidth = useCallback(() => getCardStep() * projects.length, [getCardStep]);

  const extendTrackIfNeeded = useCallback(() => {
    const scroller = scrollerRef.current;
    const setWidth = getProjectSetWidth();

    if (!scroller || !setWidth) {
      return;
    }

    if (scroller.scrollLeft < setWidth && !isExtendingBeforeRef.current) {
      isExtendingBeforeRef.current = true;
      pendingPrependWidthRef.current += setWidth;
      setBeforeRepeats((current) => current + 1);
    }

    const remainingScroll = scroller.scrollWidth - scroller.clientWidth - scroller.scrollLeft;

    if (remainingScroll < setWidth * 2 && !isExtendingAfterRef.current) {
      isExtendingAfterRef.current = true;
      setAfterRepeats((current) => current + 1);
    }
  }, [getProjectSetWidth]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const setWidth = getProjectSetWidth();

    if (!scroller || !setWidth) {
      return;
    }

    if (!initializedRef.current) {
      scroller.scrollLeft = setWidth * beforeRepeats;
      initializedRef.current = true;

      return;
    }

    if (pendingPrependWidthRef.current) {
      scroller.scrollLeft += pendingPrependWidthRef.current;
      pendingPrependWidthRef.current = 0;
      isExtendingBeforeRef.current = false;
    }

    isExtendingAfterRef.current = false;
  }, [beforeRepeats, afterRepeats, getProjectSetWidth]);

  const handleScroll = useCallback(() => {
    extendTrackIfNeeded();
  }, [extendTrackIfNeeded]);

  const scrollByProject = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    const cardStep = getCardStep();

    if (!scroller || !cardStep) {
      return;
    }

    extendTrackIfNeeded();
    scroller.scrollBy({
      left: direction * cardStep,
      behavior: "smooth",
    });
  }, [extendTrackIfNeeded, getCardStep]);

  return (
    <section className="py-24 w-full bg-primary relative overflow-hidden">
      <div className="px-4 md:px-[10%] flex flex-col gap-8 md:flex-row md:justify-between md:items-end mb-12">
        <div>
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">OUR PROJECTS</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Works Showcase</h2>
        </div>
        <div className="flex gap-4">
          <Link href="/projects" className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white font-medium py-2 px-6 transition-colors text-sm rounded-full">
            View All <span>↗</span>
          </Link>
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => scrollByProject(-1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
          >
            &lt;
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => scrollByProject(1)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="pl-4 md:pl-[10%] pr-4 flex gap-6 overflow-x-auto hide-scrollbar pb-12 snap-x snap-mandatory scroll-smooth overscroll-x-contain"
      >
        {loopedProjects.map((project) => (
          <div
            key={`${project.copyIndex}-${project.name}`}
            data-project-card
            className="min-w-[300px] md:min-w-[400px] snap-start"
          >
            <div className="aspect-[4/3] relative group cursor-pointer overflow-hidden bg-[#8b8b8b]">
              {project.img ? (
                <Image
                  src={project.img}
                  fill
                  sizes="(min-width: 768px) 400px, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={project.name}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              )}
            </div>
            <h3 className="mt-5 text-white font-bold text-xl leading-tight">{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
