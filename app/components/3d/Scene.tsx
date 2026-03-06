"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import Particles from "./Particles";
import GlassModel from "./GlassModel";

export default function Scene() {
   return (
      <div className="scene-container">
         <Canvas
            camera={{ position: [0, 0, 10], fov: 60 }}
            dpr={[1, 1.5]}
            gl={{
               antialias: true,
               alpha: true,
               powerPreference: "high-performance",
            }}
            style={{
               position: "fixed",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
               zIndex: 0,
               pointerEvents: "none",
            }}
         >
            <Suspense fallback={null}>
               <ambientLight intensity={0.3} />
               <directionalLight position={[5, 5, 5]} intensity={0.5} color="#8B5CF6" />
               <pointLight position={[-5, 3, -5]} intensity={0.8} color="#6D28D9" />
               <pointLight position={[5, -3, 5]} intensity={0.4} color="#C4B5FD" />

               <Particles count={400} />

               <GlassModel
                  position={[-5, 3, -3]}
                  scale={1.2}
                  shape="icosahedron"
                  color="#8B5CF6"
                  speed={0.3}
               />
               <GlassModel
                  position={[5, -2, -4]}
                  scale={0.9}
                  shape="torus"
                  color="#6D28D9"
                  speed={0.4}
               />
               <GlassModel
                  position={[-3, -3, -2]}
                  scale={0.7}
                  shape="octahedron"
                  color="#A78BFA"
                  speed={0.5}
               />
               <GlassModel
                  position={[4, 3, -5]}
                  scale={1.0}
                  shape="dodecahedron"
                  color="#7C3AED"
                  speed={0.25}
               />
               <GlassModel
                  position={[0, 0, -6]}
                  scale={1.5}
                  shape="torusKnot"
                  color="#8B5CF6"
                  speed={0.2}
               />

               <Environment preset="night" />
            </Suspense>
         </Canvas>
      </div>
   );
}
