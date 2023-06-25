// ABOUT SECTION
// at bottom look how we use higher oder componnet in export

// NPM PACKAGE
import React from 'react';
// imp: use tilt to tilt the card whenever we hover on it
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';



// OUR OWN CREATED
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';




// Making Our Own Component for SERVICE CARD
const ServiceCard = ({ index, title , icon }) => {
  return (

    // USING TILT
    <Tilt className = ' xs:w-[250px] w-full '>
      <motion.div 
        variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          // Tilt options
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className = ' bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col item-center '
        >
          <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>

  )
}


const About = () => {
  return (

    <>

      {/* variant is to control attribute of motion.div using components */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction </p>
        <h2 className={styles.sectionHeadText} ><span className='text-pink-600'>Over</span>View</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className = ' mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]  '  
      >
        
        I am a software developer who has a passion for learning new technologies and solving challenging problems. I have experience in developing web applications using HTML, CSS, JavaScript and typescript. I have experience on framework like React, Node.js ,NEXT.js, Three.js(beginner) and Express.js, and expertise on MERN stack development, Sanity backend development. I am always eager to expand my skills and knowledge by taking online courses, reading books and blogs and building new projects. I am looking for an opportunity to join a dynamic and innovative team where I can contribute to the development of cutting-edge software solutions and grow as a professional.
      </motion.p>

      {/* for displaying the card */}
       <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (

          // our custom service card
          // {...service} will send everything inside service as props
          <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      
    </>

  )
}

// WAY WE USE HIGH ORDER COMPONENT
export default SectionWrapper(About,"about")