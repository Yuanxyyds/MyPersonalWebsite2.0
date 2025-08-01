import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import { Box3, Vector3, VideoTexture, LinearFilter, TextureLoader, RGBAFormat, ClampToEdgeWrapping } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function RoomModel({ controls, zoomDistance }) {
  const { nodes, scene } = useGLTF('/server/server.glb');
  const [dragging, setDragging] = useState(false);
  const [focusedMedia, setFocusedMedia] = useState(null);
  const originalPosition = useRef(new Vector3());
  const originalTarget = useRef(new Vector3());
  const selectedObject = useRef(null);

  const chairRef = useRef();
  scene.remove(nodes["Monitor1"]);
  scene.remove(nodes["Monitor2"]);
  scene.remove(nodes["Monitor3"]);

  const [monitorVideo] = useState(() => {
    const video = document.createElement("video");
    video.src = "/server/monitor.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.play();
    return video;
  });

  const monitorVideoTexture = useMemo(() => {
    const texture = new VideoTexture(monitorVideo);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBAFormat;
    texture.wrapS = ClampToEdgeWrapping;
    texture.wrapT = ClampToEdgeWrapping;
    texture.flipY = false;
    return texture;
  }, [monitorVideo]);

  // Focus video
  const [TvVideo] = useState(() => {
    const v = document.createElement("video");
    v.src = "/server/tv.mp4";
    v.crossOrigin = "anonymous";
    v.loop = true;
    v.muted = true;
    v.playsInline = true;
    v.autoplay = true;
    v.play();
    return v;
  });

  const TvVideoTexture = useMemo(() => {
    const tex = new VideoTexture(TvVideo);
    tex.flipY = false;
    return tex;
  }, [TvVideo]);

  const monitorImageTextures = useMemo(() => {
    const loader = new TextureLoader();
    return [
      loader.load("/server/node1.jpg", (texture) => { texture.flipY = false }),
      loader.load("/server/hosting.jpg", (texture) => { texture.flipY = false }),
      loader.load("/server/node2.jpg", (texture) => { texture.flipY = false }),
    ];
  }, []);

  // Neon Light Effect
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




  // Zoom Control
  useEffect(() => {
    // Zoom to Object
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

      const distance = zoomDistance;
      const newPosition = center.clone().add(frontDirection.multiplyScalar(distance));

      // Move camera
      controls.current.object.position.copy(newPosition);
      controls.current.target.copy(center);

      // Disable controls
      controls.current.enabled = false;
      controls.current.update();
    };


    if (focusedMedia === null) {
      if (chairRef.current) {
        chairRef.current.visible = true;
        // chairRef.current.raycast = () => null;
      }
      if (selectedObject.current) {
        selectedObject.current = null;
        controls.current.object.position.copy(originalPosition.current);
        controls.current.target.copy(originalTarget.current);
        controls.current.enabled = true;
        controls.current.update();
      }
    } else {
      if (chairRef.current) {
        chairRef.current.visible = false;
      }
      if (selectedObject.current) {
        zoomToObject(selectedObject.current)
      }
    }
  }, [focusedMedia, controls, zoomDistance]);


  const tvDisplay = useMemo(() => {
    if (focusedMedia !== "TV") {
      return (
        <primitive
          object={nodes["TV"]}
          onPointerDown={(e) => {
            e.stopPropagation();
            if (focusedMedia === null) {
              selectedObject.current = e.object;
              TvVideo.currentTime = 0;
              TvVideo.play();
              setFocusedMedia("TV");
            }
          }}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
        />
      );
    }

    // Focused: clone with video texture
    const clone = nodes["TV"].clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = Array.isArray(child.material)
          ? child.material.map((m) => m.clone())
          : child.material.clone();
      }
    });
    clone.traverse((child) => {
      if (child.isMesh) {
        const mats = Array.isArray(child.material)
          ? child.material
          : [child.material];
        mats.forEach((mat) => {
          if (mat.name.includes("Screen")) {
            mat.map = TvVideoTexture;
            mat.emissiveMap = TvVideoTexture;
            mat.needsUpdate = true;
            if (mat.map) mat.map.needsUpdate = true;
            if (mat.emissiveMap) mat.emissiveMap.needsUpdate = true;
          }
        });
      }
    });

    return (
      <group
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
        onPointerOver={() => {
          document.body.style.cursor = "default";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}>
        <primitive
          object={clone}
        />
      </group>
    );
  }, [focusedMedia, TvVideo, TvVideoTexture, nodes]);


  const monitorDisplays = useMemo(() => {
    const monitorConfigs = [
      { name: "Monitor1" },
      { name: "Monitor2" },
      { name: "Monitor3" },
    ];

    return monitorConfigs.map(({ name, }, i) => {
      if (focusedMedia !== "Monitor") {
        const originalGroup = nodes[name];
        const groupClone = originalGroup.clone(true);

        // Clone all materials
        groupClone.traverse((child) => {
          if (child.isMesh) {
            child.material = Array.isArray(child.material)
              ? child.material.map((m) => m.clone())
              : child.material.clone();
          }
        });

        // Replace "Screen 1" material's map
        groupClone.traverse((child) => {
          if (child.isMesh) {
            const mats = Array.isArray(child.material)
              ? child.material
              : [child.material];
            mats.forEach((mat) => {
              if (mat.name.includes("Screen")) {
                mat.map = monitorVideoTexture;
                mat.emissiveMap = monitorVideoTexture;
                mat.needsUpdate = true;
                if (mat.map) mat.map.needsUpdate = true;
                if (mat.emissiveMap) mat.emissiveMap.needsUpdate = true;
              }
            });
          }
        });

        return (
          <group
            onPointerDown={(e) => {
              e.stopPropagation();
              if (focusedMedia === null) {
                selectedObject.current = e.object;
                setFocusedMedia("Monitor");
              }
            }}
            onPointerOver={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "default";
            }}>
            <primitive
              key={name}
              object={groupClone} />
          </group>
        );
      } else {
        // Focused: clone with PNG image texture
        const clone = nodes[name].clone(true);
        clone.traverse((child) => {
          if (child.isMesh) {
            child.material = Array.isArray(child.material)
              ? child.material.map((m) => m.clone())
              : child.material.clone();
          }
        });

        clone.traverse((child) => {
          if (child.isMesh) {
            const mats = Array.isArray(child.material)
              ? child.material
              : [child.material];
            mats.forEach((mat) => {
              if (mat.name.includes("Screen")) {
                mat.map = monitorImageTextures[i];
                mat.emissiveMap = monitorImageTextures[i];
                mat.needsUpdate = true;
              }
            });
          }
        });
        return (
          <primitive
            key={name}
            object={clone}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
            onPointerOver={() => {
              document.body.style.cursor = "default";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "default";
            }}
          />
        );
      }
    });
  }, [focusedMedia, monitorImageTextures, monitorVideoTexture, nodes]);



  return (
    <>
      {/* Render the whole scene */}
      <primitive
        object={scene}
        onPointerDown={(e) => {
          e.stopPropagation();
          if (focusedMedia !== null) {
            setFocusedMedia(null);
          } else if (dragging) {
            setDragging(false);
            controls.current.enabled = true;
          }
        }}
        onPointerUp={(e) => {
          if (dragging) {
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
          if (focusedMedia !== null) {
            setFocusedMedia(null);
            return;
          }
          if (!dragging) {
            setDragging(true);
            controls.current.enabled = false;
          }

        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          if (dragging) {
            setDragging(false);
            controls.current.enabled = true;
          }
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
      {/* Render TV separately with click */}
      {tvDisplay}

      {/* Render Monitors separately with click */}
      {monitorDisplays}
    </>
  );
}


export default function ServerRoom() {
  const [width, setWidth] = useState(window.innerWidth);
  const controls = useRef();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Compute distances based on screen width
  const { minDistance, maxDistance, fov, zoomDistance } = React.useMemo(() => {
    if (width < 576) {
      return { minDistance: 1, maxDistance: 6, fov: 50, zoomDistance: 2 };
    } else if (width < 992) {
      return { minDistance: 1, maxDistance: 5, fov: 40, zoomDistance: 1.5 };
    } else {
      return { minDistance: 1, maxDistance: 4, fov: 40, zoomDistance: 1 };
    }
  }, [width]);

  return (
    <Canvas camera={{ fov: fov, position: [2, 1, 2], }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={0.8} />

      <Suspense fallback={null}>
        <RoomModel controls={controls} zoomDistance={zoomDistance} />
      </Suspense>

      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        />
      </EffectComposer>
      <OrbitControls
        ref={controls}
        target={[0, 1, 0]}
        maxDistance={maxDistance}
        minDistance={minDistance}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        enablePan={false}
        enableZoom={true}
        zoomSpeed={0.5}
      />
    </Canvas>
  );
}
