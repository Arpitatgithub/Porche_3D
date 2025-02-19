import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function CarModel() {
  const { scene } = useGLTF("/911.glb");
  const carRef = useRef();

  useFrame(({ pointer }) => {
    if (carRef.current) {
      // Apply smooth rotation and slight movement based on cursor position
      carRef.current.rotation.y = pointer.x * 0.0001; // Rotate left-right
      carRef.current.rotation.x = pointer.y * 0.0001; // Tilt up-down
      carRef.current.position.x = pointer.x * 0.0001; // Move slightly left-right
      carRef.current.position.y = -pointer.y * 0.0001; // Move slightly up-down
    }
  });

  return <primitive ref={carRef} object={scene} scale={0.4} position={[0, 0, 0]} />;
}
