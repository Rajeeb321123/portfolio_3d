// for rocket model


// NPM IMPORT 
import React from 'react';
import { Suspense, useEffect, useState } from 'react';

// FOR 3D rocket
// canvas is empty canvas so we can put something in it
import { Canvas } from '@react-three/fiber';
// importing some helper
// useGLTF allow us to import 3d models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';



// OUR OWN CREATED 
import CanvasLoader from '../Loader';



const Rockets = ( { isMobile } ) => {

  // getting our  desktop or rocket scene
  const rocket = useGLTF("./space_exploration_wlp_series_8/scene.gltf");


  return (

    // mesh is like div for 3js model
    <mesh>

      {/* creating light so we can see */}
      <hemisphereLight intensity={0.15} groundColor='black' />

{/* Main brightening light  */}
      <spotLight
        position={[20, 45, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        //  the bitmap used by shadow maps must fill the area covered by the falloff of the light.
        shadow-mapSize={1024}
      />

      {/* point light : look at the glare on screen of desktop of model that is because of pint light */}
      <pointLight intensity={1} />

      {/* self closing component where we can pass the object */}
      <primitive
        object={rocket.scene}

        // Scaling and positoning
        scale= { isMobile ? 0.65: 0.75}
        position={ isMobile ? [ 0 , -3, -2.2 ] : [0, 0.1, -1.5]}
        rotation = {[-0.01, -0.2, -0.1 ]}

       />

    </mesh>
  )
}




// CREATING COMPONENT FOR rocket CANVAS

const RocketsCanvas = () =>{

  // for mobile screen 
  const [isMobile, setIsMobile] = useState(false)


  // using useEffect to change isMobile state without using external libraries unlike we did in our dashboard project with MUI
  useEffect(()=> {

    // using mediaquery to know we are on mobile device
    // checking the window size and matching it
    const mediaQuery = window.matchMedia('(max-width:500px)');

    // if matches seting boolean value to setIsMobile
    setIsMobile(mediaQuery.matches);

    // whenever width or screen  changes we have to modify  setIsMobile as per change in mediaQuery
    // callback function to handle media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // event listener for media query so above handle media query can execute
    // add the callback function  as a listener for change to media query
    // adding event listener for for change in screen size
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // as we are in UseEffect we also need to remove to event listener
  // Anywhere removing event listener is recommended as you don't want the event to get triggered multiple times without any reason
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }


  },[])
  
  return (

    <Canvas
      frameloop='demand'
      shadows
      // camera is most important part of canvas: its where we are looking from
      // fov: How wide our Field Of View
      camera={{ position: [20, 3, 5], fov: 100}}

      // gl need below value for proper render
      gl ={{ preserveDrawingBuffer: true }}

      //device pixel ratio[min, max ]
      dpr={[1, 2]}
    >

      {/* suspense is react component not 3js . it allow to have loader while our model is loading */}
      <Suspense fallback={<CanvasLoader />}>

        {/* orbitControls allows us to move left and right */}
        <OrbitControls
          enableZoom={false}
        
        // setting the max and min  angle for controls or setting specific axis for rotation
        // so we can rotate along specific axis
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />

        {/* RENDERING THE rocket COMPONENT HERE */}
        <Rockets isMobile={isMobile} />

      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default RocketsCanvas;