import React, { Suspense, useEffect, useRef, useState } from "react";
import { Box3, Vector3 } from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import server from "../../assets/server.glb";

function RoomModel({ controls }) {
  const { nodes, scene } = useGLTF(server);
  const [dragging, setDragging] = useState(false);
  const [focused, setFocused] = useState(false);

  const chairRef = useRef();
  const originalPosition = useRef(new Vector3());
  const originalTarget = useRef(new Vector3());


  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const hue = (t * 60) % 360;
    const color = `hsl(${hue}, 100%, 50%)`;

    scene.traverse((child) => {
      if (child.isMesh) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((mat) => {
          if (mat.name && mat.name.includes("Neon")) {
            mat.emissive.setStyle(color);
            mat.emissiveIntensity = 5;
            mat.toneMapped = false;
          }
        });
      }
    });
  });

  const zoomToObject = (object) => {
    if (!object) return;

    const box = new Box3().setFromObject(object);
    const center = new Vector3();
    box.getCenter(center);

    // Save original camera position and target
    originalPosition.current.copy(controls.current.object.position);
    originalTarget.current.copy(controls.current.target);

    // Compute front-facing offset along the object's local Z axis
    const frontDirection = new Vector3(0, 0, 1);
    object.localToWorld(frontDirection);
    frontDirection.sub(object.getWorldPosition(new Vector3())).normalize();

    const distance = 1.5;
    const newPosition = center.clone().add(frontDirection.multiplyScalar(distance));

    // Move camera
    controls.current.object.position.copy(newPosition);
    controls.current.target.copy(center);
    controls.current.update();

    // Disable controls
    controls.current.enabled = false;
    setFocused(true);
  };


  return (
    <>
      {/* Render the whole scene */}
      <primitive
        object={scene}
        onPointerDown={(e) => {
          if (focused) {
            controls.current.object.position.copy(originalPosition.current);
            controls.current.target.copy(originalTarget.current);
            controls.current.enabled = true;
            controls.current.update();
            setFocused(false);
          } else if (dragging) {
            setDragging(false);
            controls.current.enabled = true;
          }
        }} />

      {/* Render chair separately with click */}
      <primitive
        object={nodes["Chair"]}
        ref={chairRef}
        onPointerDown={(e) => {
          e.stopPropagation();
          setDragging(true);
          controls.current.enabled = false;
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          setDragging(false);
          controls.current.enabled = true;
        }}
        onPointerMove={(e) => {
          if (dragging && chairRef.current) {
            const deltaX = e.movementX;
            chairRef.current.rotation.z += deltaX * 0.01;
          }
        }}
        onPointerOver={() => {
          document.body.style.cursor = "grab";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      />
      <primitive
        object={nodes["TV"]}
        onPointerDown={(e) => {
          e.stopPropagation();
          if (!focused) {
            zoomToObject(e.object);
          }
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      />

    </>
  );
}

function CameraController({ controls }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(2, 1, 2);
    controls.current.update();
  }, [camera]);

  return (
    <OrbitControls
      ref={controls}
      target={[0, 1, 0]}
      maxDistance={5}
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
  const controls = useRef();
  return (
    <Canvas camera={{ fov: 40 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={0.8} />

      <Suspense fallback={null}>
        <RoomModel controls={controls} />
      </Suspense>

      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        />
      </EffectComposer>
      <CameraController controls={controls} />
    </Canvas>
  );
}
