"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contacts } from "@/app/constants/contacts";

gsap.registerPlugin(ScrollTrigger);

function GitHubContactIcon() {
   return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
   );
}

function EmailIcon() {
   return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <rect x="2" y="4" width="20" height="16" rx="2" />
         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
   );
}

function InstagramIcon() {
   return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
         <circle cx="12" cy="12" r="5" />
         <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
   );
}

function SpotifyIcon() {
   return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
   );
}

const iconMap: Record<string, () => React.ReactNode> = {
   github: GitHubContactIcon,
   email: EmailIcon,
   instagram: InstagramIcon,
   spotify: SpotifyIcon,
};

export default function Contact() {
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

      const contactCards = cards.querySelectorAll(".contact-card");
      gsap.fromTo(
         contactCards,
         { opacity: 0, y: 40, scale: 0.95 },
         {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
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
         id="contact"
         ref={sectionRef}
         className="relative py-32 px-6"
      >
         <div className="max-w-4xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16">
               <span className="inline-block px-3 py-1 text-xs font-medium text-purple-400 border border-purple-500/20 rounded-full mb-4 tracking-wider uppercase">
                  Connect
               </span>
               <h2
                  ref={titleRef}
                  className="text-4xl md:text-5xl font-bold mb-4 opacity-0"
                  style={{
                     background: "linear-gradient(135deg, #ffffff 0%, #C4B5FD 100%)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                     backgroundClip: "text",
                  }}
               >
                  Get In Touch
               </h2>
               <p className="text-gray-400 max-w-md mx-auto">
                  Feel free to reach out. I&apos;m always open to new
                  opportunities and collaborations.
               </p>
            </div>

            {/* Contact cards */}
            <div
               ref={cardsRef}
               className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
               {contacts.map((contact) => {
                  const IconComponent = iconMap[contact.icon];
                  return (
                     <a
                        key={contact.label}
                        href={contact.url}
                        target={contact.type === "email" ? undefined : "_blank"}
                        rel={contact.type === "email" ? undefined : "noopener noreferrer"}
                        className="contact-card group flex flex-col items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                        style={{
                           background: "rgba(255, 255, 255, 0.04)",
                           backdropFilter: "blur(12px)",
                           border: "1px solid rgba(139, 92, 246, 0.1)",
                        }}
                     >
                        {/* Hover glow */}
                        <div
                           className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                           style={{
                              boxShadow: "0 0 30px rgba(139, 92, 246, 0.15)",
                              border: "1px solid rgba(139, 92, 246, 0.3)",
                              borderRadius: "0.75rem",
                           }}
                        />

                        <div className="relative text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                           {IconComponent && <IconComponent />}
                        </div>
                        <span className="relative text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                           {contact.label}
                        </span>
                     </a>
                  );
               })}
            </div>

            {/* Footer */}
            <div className="mt-24 pt-8 border-t border-white/5 text-center">
               <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Omkar Karale. Built with Next.js,
                  Three.js & GSAP.
               </p>
            </div>
         </div>
      </section>
   );
}
