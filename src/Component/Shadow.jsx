import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';

const Shadow = () => {
  const [color, setColor] = useState('orange'); 

  useEffect(() => {                                                                //for color toggle
    const updateColor = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setColor(isDarkMode ? '#06B6D4' : 'orange');
    };
    updateColor(); 

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {attributes: true, attributeFilter: ['class']});

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='h-[600px] w-[700px]'>
       <Canvas>
          <mesh>
           <Sphere args={[1,50,50]} scale={2.3}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.3}                    //how much move
              speed={2}
            />
           </Sphere> 
           <ambientLight intensity={3} />
           <OrbitControls enableZoom={false}/>
          </mesh>  
       </Canvas> 
    </div>
  )
}
export default Shadow;