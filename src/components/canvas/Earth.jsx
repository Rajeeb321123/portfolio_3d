// EARTH CANVAS


// NPM PACKAGES
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

// OUR CREATED
import CanvasLoader from '../Loader'



// EARTH Componenet 
const Earth = () => {

  // importing 3d model
  const earth  = useGLTF('./planet/scene.gltf');

  
  return (
   
    <primitive
      object={ earth.scene}
      scale = {2.5}

      position-y = {0}
      
      //so we can rotate horizontally on yaxis 
      rotation-y = {0} 
    />
  )
}

import React from 'react'

const EarthCanvas = () => {

  return (

    // we need canvas for 3d model
    <Canvas
      shadows
      frameloop='demand'
      gl = {{ preserveDrawingBuffer:true }}
      camera = {{

        fov: 45,
        near:0.1,
        far:200,
        position: [-4,3,6]
        
      }}
    >

        <Suspense fallback = { <CanvasLoader />}>
          
          {/* for mouse control of model */}
          <OrbitControls 
            autoRotate
            enableZoom = { false }
            maxPolarAngle = { Math.PI / 2 }
            minPolarAngle= { Math.PI / 2 }
          />
          <Earth />
        </Suspense>

    </Canvas>
  )
}

export default EarthCanvas;