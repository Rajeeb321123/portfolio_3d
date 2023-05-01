// HIGHER ORDER COMPONENT THAT WRAP EVERY OTHERE COMPONENT

import { motion } from 'framer-motion';


import { styles } from '../styles' ;
import { staggerContainer } from  '../utils/motion';


// AS IT IS A WRAPPER WE NEED COMPONENT AS PROPS AND THEIR IDName
// Funtion returning Function
const SectionWrapper = ( Component, idName ) => 
function HOC() {
    return (
        <motion.section
            variants ={ staggerContainer() }
            initial = 'hidden'
            whileInView = 'show'

            // show animation once and for 0.25 sec
            viewport = { { one:true, amount: 0.25 } }

            className = {`{ ${styles.padding } max-w-7xl mx-auto relative z-0 }`}
        >
            
            {/* IMP */}
            {/* This will allow to move down we click the gif button we created */}
            <span className=' hash-span ' id= { idName } ></span>

            <Component />
        </motion.section>
    )
}



export default SectionWrapper