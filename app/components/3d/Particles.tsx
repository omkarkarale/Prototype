"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles({ count = 500 }: { count?: number }) {
   const mesh = useRef<THREE.Points>(null!);

   const [positions, colors] = useMemo(() => {
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);

      const color = new THREE.Color("#8B5CF6");
      const colorAlt = new THREE.Color("#6D28D9");
      const colorWhite = new THREE.Color("#C4B5FD");

      for (let i = 0; i < count; i++) {
         pos[i * 3] = (Math.random() - 0.5) * 40;
         pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
         pos[i * 3 + 2] = (Math.random() - 0.5) * 40;

         const colorChoice = Math.random();
         const c = colorChoice < 0.5 ? color : colorChoice < 0.8 ? colorAlt : colorWhite;
         col[i * 3] = c.r;
         col[i * 3 + 1] = c.g;
         col[i * 3 + 2] = c.b;
      }

      return [pos, col];
   }, [count]);

   const posAttr = useMemo(
      () => new THREE.BufferAttribute(positions, 3),
      [positions]
   );
   const colAttr = useMemo(
      () => new THREE.BufferAttribute(colors, 3),
      [colors]
   );

   useFrame((state) => {
      if (!mesh.current) return;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
   });

   return (
      <points ref={mesh}>
         <bufferGeometry>
            <primitive attach="attributes-position" object={posAttr} />
            <primitive attach="attributes-color" object={colAttr} />
         </bufferGeometry>
         <pointsMaterial
            size={0.08}
            vertexColors
            transparent
            opacity={0.8}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
            depthWrite={false}
         />
      </points>
   );
}
