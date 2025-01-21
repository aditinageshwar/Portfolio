import React, {useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, useTexture } from '@react-three/drei';
import Model from '../Assest/macbook_laptop.glb';
import screen from "../Assest/screen1.png";

function LaptopModel() {
  const { scene } = useGLTF(Model); 
  const image = useTexture(screen); 
  
  useEffect(() => {
    const laptopScreen = scene.getObjectByName('Cube_Material003_0');     //mesh name
    if (laptopScreen) {
      laptopScreen.material.map = image; 
      laptopScreen.material.needsUpdate = true;

      if (laptopScreen.material.map) {
        laptopScreen.material.map.repeat.set(1.3, 1); 
      }
    }
  }, [scene, image]);

  return <primitive object={scene}/>;
}

function ThreeScene() {
  return (
    <div className='h-80 w-1/3'> 
    <Canvas camera={{ position: [-40, 10, 25], fov: 20 }}>        
      <Stage environment='city'>
        <LaptopModel />
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    </div>
  );
}

export default ThreeScene;