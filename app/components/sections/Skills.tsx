"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/app/constants/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const titleRef = useRef<HTMLHeadingElement>(null);
   const cardsRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const section = sectionRef.current;
      const title = titleRef.current;
      const cards = cardsRef.current;

      if (!section || !title || !cards) return;

      gsap.fromTo(
         title,
         { opacity: 0, y: 40 },
         {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
               trigger: section,
               start: "top 80%",
               toggleActions: "play none none reverse",
            },
         }
      );

      const skillCards = cards.querySelectorAll(".skill-card");
      gsap.fromTo(
         skillCards,
         { opacity: 0, y: 50, scale: 0.9 },
         {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
               trigger: cards,
               start: "top 85%",
               toggleActions: "play none none reverse",
            },
         }
      );

      return () => {
         ScrollTrigger.getAll().forEach((t) => t.kill());
      };
   }, []);

   return (
      <section
         id="skills"
         ref={sectionRef}
         className="relative py-32 px-6"
      >
         <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16">
               <span className="inline-block px-3 py-1 text-xs font-medium text-purple-400 border border-purple-500/20 rounded-full mb-4 tracking-wider uppercase">
                  Tech Stack
               </span>
               <h2
                  ref={titleRef}
                  className="text-4xl md:text-5xl font-bold opacity-0"
                  style={{
                     background: "linear-gradient(135deg, #ffffff 0%, #C4B5FD 100%)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                     backgroundClip: "text",
                  }}
               >
                  Skills & Technologies
               </h2>
            </div>

            {/* Skills grid */}
            <div
               ref={cardsRef}
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
               {skills.map((skill, index) => (
                  <div
                     key={skill.name}
                     className="skill-card group relative p-5 rounded-xl cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                     style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(139, 92, 246, 0.1)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                     }}
                  >
                     {/* Hover glow */}
                     <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                           background:
                              "radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
                           border: "1px solid rgba(139, 92, 246, 0.3)",
                           borderRadius: "0.75rem",
                        }}
                     />

                     <div className="relative z-10 text-center">
                        <div className="text-3xl mb-3">{skill.icon}</div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-purple-300 transition-colors">
                           {skill.name}
                        </span>
                     </div>

                     {/* Index corner number */}
                     <div className="absolute top-2 right-3 text-[10px] text-purple-500/20 font-mono">
                        {String(index + 1).padStart(2, "0")}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
