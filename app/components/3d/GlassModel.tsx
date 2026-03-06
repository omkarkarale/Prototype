"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

interface GlassModelProps {
   position?: [number, number, number];
   scale?: number;
   shape?: "icosahedron" | "torus" | "octahedron" | "dodecahedron" | "torusKnot";
   color?: string;
   speed?: number;
}

export default function GlassModel({
   position = [0, 0, 0],
   scale = 1,
   shape = "icosahedron",
   color = "#8B5CF6",
   speed = 0.5,
}: GlassModelProps) {
   const meshRef = useRef<THREE.Mesh>(null!);

   useFrame((state) => {
      if (!meshRef.current) return;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.3;
      meshRef.current.rotation.y += speed * 0.005;
      meshRef.current.position.y =
         (position[1] || 0) + Math.sin(state.clock.elapsedTime * speed * 0.6) * 0.3;
   });

   const renderGeometry = () => {
      switch (shape) {
         case "torus":
            return <torusGeometry args={[1, 0.4, 32, 64]} />;
         case "octahedron":
            return <octahedronGeometry args={[1, 0]} />;
         case "dodecahedron":
            return <dodecahedronGeometry args={[1, 0]} />;
         case "torusKnot":
            return <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />;
         default:
            return <icosahedronGeometry args={[1, 1]} />;
      }
   };

   return (
      <mesh ref={meshRef} position={position} scale={scale}>
         {renderGeometry()}
         <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={0.5}
            chromaticAberration={0.2}
            anisotropy={0.3}
            distortion={0.4}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color={color}
            roughness={0.1}
            transmission={0.95}
            ior={1.5}
         />
      </mesh>
   );
}
