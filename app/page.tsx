"use client";

import dynamic from "next/dynamic";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

// Dynamic import for the 3D scene to avoid SSR issues
const Scene = dynamic(() => import("./components/3d/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* 3D Background Scene */}
      <Scene />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <div className="gradient-line max-w-4xl mx-auto" />
        <Skills />
        <div className="gradient-line max-w-4xl mx-auto" />
        <Projects />
        <div className="gradient-line max-w-4xl mx-auto" />
        <Contact />
      </main>
    </>
  );
}
