import { Canvas } from "@react-three/fiber";
import { OrbitControls } 
from "@react-three/drei";
import CarModel from "./components/CarModel";
import Navbar from "./components/navbar";


export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas camera={{ position: [-1,0,0], fov: 1 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2,0,1]} intensity={1} />
        <CarModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}