"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/app/constants/projects";

gsap.registerPlugin(ScrollTrigger);

function ExternalLinkIcon() {
   return (
      <svg
         width="16"
         height="16"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
         <polyline points="15 3 21 3 21 9" />
         <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
   );
}

function GitHubIcon() {
   return (
      <svg
         width="18"
         height="18"
         viewBox="0 0 24 24"
         fill="currentColor"
      >
         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
   );
}

export default function Projects() {
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

      const projectCards = cards.querySelectorAll(".project-card");
      gsap.fromTo(
         projectCards,
         { opacity: 0, y: 60 },
         {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
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
         id="projects"
         ref={sectionRef}
         className="relative py-32 px-6"
      >
         <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16">
               <span className="inline-block px-3 py-1 text-xs font-medium text-purple-400 border border-purple-500/20 rounded-full mb-4 tracking-wider uppercase">
                  Portfolio
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
                  Featured Projects
               </h2>
            </div>

            {/* Projects grid */}
            <div
               ref={cardsRef}
               className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
               {projects.map((project, index) => (
                  <div
                     key={project.title}
                     className="project-card group relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                     style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(139, 92, 246, 0.1)",
                     }}
                  >
                     {/* Top gradient line */}
                     <div
                        className="absolute top-0 left-0 right-0 h-[1px] opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                           background:
                              "linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)",
                        }}
                     />

                     {/* Hover glow border */}
                     <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                           boxShadow: "inset 0 0 30px rgba(139, 92, 246, 0.1), 0 0 40px rgba(139, 92, 246, 0.05)",
                           border: "1px solid rgba(139, 92, 246, 0.25)",
                           borderRadius: "0.75rem",
                        }}
                     />

                     <div className="relative z-10 p-8">
                        {/* Project number */}
                        <div className="flex items-center justify-between mb-4">
                           <span className="text-xs font-mono text-purple-500/40">
                              PROJECT {String(index + 1).padStart(2, "0")}
                           </span>
                           <div className="flex gap-3">
                              {project.github && (
                                 <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-purple-400 transition-colors"
                                    aria-label={`GitHub link for ${project.title}`}
                                 >
                                    <GitHubIcon />
                                 </a>
                              )}
                              {project.liveDemo && (
                                 <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-purple-400 transition-colors"
                                    aria-label={`Live demo for ${project.title}`}
                                 >
                                    <ExternalLinkIcon />
                                 </a>
                              )}
                           </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                           {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                           {project.description}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                           {project.techStack.map((tech) => (
                              <span
                                 key={tech}
                                 className="px-3 py-1 text-xs font-medium text-purple-300 rounded-full"
                                 style={{
                                    background: "rgba(139, 92, 246, 0.1)",
                                    border: "1px solid rgba(139, 92, 246, 0.2)",
                                 }}
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
