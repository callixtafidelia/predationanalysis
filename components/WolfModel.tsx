"use client";

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

function WolfModelInner() {
  const { scene, animations } = useGLTF("/assets/wolf.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAnim = Object.keys(actions)[0];
      actions[firstAnim]?.play();
    }
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={0.45}
      position={[0.2, -0.2, 0]}
      rotation={[0, -Math.PI / 6, 0]}
    />
  );
}

export default function WolfModel() {
  return (
    <Canvas camera={{ position: [3.5, 2.2, 4], fov: 35 }}>
      <ambientLight intensity={4} />
      <directionalLight position={[4, 4, 3]} intensity={4} />
      <WolfModelInner />
    </Canvas>
  );
}
