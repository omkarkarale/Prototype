"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
   const containerRef = useRef<HTMLDivElement>(null);
   const titleRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);
   const glowRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
         glowRef.current,
         { opacity: 0, scale: 0.5 },
         { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      )
         .fromTo(
            titleRef.current,
            { opacity: 0, y: 60, clipPath: "inset(0 100% 0 0)" },
            {
               opacity: 1,
               y: 0,
               clipPath: "inset(0 0% 0 0)",
               duration: 1.2,
               ease: "power4.out",
            },
            "-=1"
         )
         .fromTo(
            subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5"
         )
         .fromTo(
            ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
         );
   }, []);

   const scrollDown = () => {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <section
         id="hero"
         ref={containerRef}
         className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
         {/* Glow effect */}
         <div
            ref={glowRef}
            className="absolute w-[600px] h-[600px] rounded-full opacity-0"
            style={{
               background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)",
               filter: "blur(60px)",
            }}
         />

         {/* Content */}
         <div className="relative z-10 text-center px-6 max-w-4xl">
            <div className="mb-4">
               <span className="inline-block px-4 py-1.5 text-sm font-medium text-purple-300 border border-purple-500/30 rounded-full backdrop-blur-sm bg-purple-500/5">
                  Full Stack Developer & Creative Technologist
               </span>
            </div>

            <h1
               ref={titleRef}
               className="text-6xl md:text-8xl font-bold mb-6 opacity-0"
               style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #C4B5FD 50%, #8B5CF6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
               }}
            >
               Omkar Karale
            </h1>

            <p
               ref={subtitleRef}
               className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto opacity-0 leading-relaxed"
            >
               Building immersive digital experiences with modern web technologies,
               AI-powered solutions, and interactive applications.
            </p>

            <div ref={ctaRef} className="flex gap-4 justify-center opacity-0">
               <a
                  href="#projects"
                  className="group relative px-8 py-3 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                  onClick={(e) => {
                     e.preventDefault();
                     document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
               >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">View Projects</span>
               </a>
               <a
                  href="#contact"
                  className="px-8 py-3 rounded-lg font-semibold text-purple-300 border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  onClick={(e) => {
                     e.preventDefault();
                     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
               >
                  Get In Touch
               </a>
            </div>
         </div>

         {/* Scroll indicator */}
         <button
            onClick={scrollDown}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-400/60 hover:text-purple-400 transition-colors cursor-pointer"
            aria-label="Scroll down"
         >
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-purple-400/30 flex items-start justify-center p-1">
               <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
            </div>
         </button>
      </section>
   );
}
