import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import server from "../../assets/server.glb";

function RoomModel(props) {
  const { scene } = useGLTF(server);
  return <primitive object={scene} {...props} />;
}

function CameraController() {
  const { camera } = useThree();
  const controls = useRef();

  useEffect(() => {
    camera.position.set(2, 1, 2);
    controls.current.update();
  }, [camera]);

  return (
    <OrbitControls
      ref={controls}
      target={[0, 1, 0]}
      maxDistance={4}
      minDistance={1}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={0}
      maxAzimuthAngle={Math.PI / 2}
      enablePan={true}
      enableZoom={true}
      zoomSpeed={0.5}
    />
  );
}

export default function ModelCanvas() {
  return (
    <Canvas camera={{ fov: 40 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={0.8} />

      <Suspense fallback={null}>
        <RoomModel />
      </Suspense>

      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        />
      </EffectComposer>
      <CameraController />
    </Canvas>
  );
}
