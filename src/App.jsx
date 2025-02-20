import { Canvas } from "@react-three/fiber";
import { OrbitControls } 
from "@react-three/drei";
import CarModel from "./components/CarModel";
import Navbar from "./components/navbar";


export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas camera={{ position: [-1,0.2,0.6], fov: 50 }}>
        <ambientLight intensity={5} />
        {/* Directional Light - Simulates sunlight */}
        <directionalLight position={[0, 0, 0]} intensity={5} castShadow />
        <directionalLight position={[2,0,1]} intensity={5} />
             {/* SpotLight - Creates a focused dramatic effect */}
             <spotLight position={[-5, 10, 5]} angle={0.3} intensity={30} penumbra={1} castShadow />
             {/* Point Lights for reflections */}
        <pointLight position={[0, 5, -5]} intensity={1.5} />
        <pointLight position={[5, 3, 5]} intensity={10} color="blue" />
        <pointLight position={[-5, 2, 3]} intensity={10} color="black" />

         
        <CarModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}