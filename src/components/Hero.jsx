// HERO SECTION 

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";

// IMPORTING OUR 3d COMPUTER CANVAS
import { ComputersCanvas, EarthCanvas } from "./canvas";
import RocketsCanvas from "./canvas/rocket";


const Hero = ({isMobile}) => {



  return (
    <section className={` relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto  ${styles.paddingX} flex flex-row items-start gap-5 z-1`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rajeeb</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop MERN web application  <br className='sm:block hidden' />
            and three js web application
          </p>
          {isMobile && (<p className="text-red-400   "> !!! Please look at my portfolio from PC . I was unable to show all of my 3d models and tilt fuctionality of card in mobile as the browser kept on crashing and showing blank white sheet in mobile devices</p>)}
        </div>
      </div>

      
      { !isMobile ? (<RocketsCanvas/>):(
        <ComputersCanvas/>
        // <><p className="text-red-400 absolute mt-[400px] mr-5 ml-5">I was unable to show full size of  the 3d rocket model as it will most likely crash the browser or show white blank sheet in mobile devies.&nbsp; Please use Desktop or laptop for this 3d website</p>
        // <div className=" absolute mt-[400px] mr-5 ml-5 w-40 h-40"><ComputersCanvas /></div>
        // </>
        
      )}
      


      {/* small gif we created ourself */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        
        <a href='#about'>

          {/* we have made capsule like circle using tailwind */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            
            {/*from  Framer motion  */}
            <motion.div
              animate={{
                // move 24 pixel up and down
                y: [0, 24, 0],
              }}

              // how transition look like
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              // making roundball using tailwind css
              // using motion to animate to ball up and down
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
