// CONTACT AND EARTH model

import { useState, useRef } from 'react'
import { motion } from 'framer-motion';
// so people can send email to us
import emailjs from '@emailjs/browser';

import {styles} from '../styles'
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn} from '../utils/motion';

const Contact = () => {

  // state for our form
  const formRef = useRef();
  const [ form , setForm ] = useState({
    name:'',
    email:'',
    message:'',
  });

  // loading when we click send
  const [loading, setLoading] = useState(false);



  // for typing in form
  const handleChange = (e) =>{
    // SO WE CAN TYPE
    // extract the target
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })


  };

  // IMP
  // When we click send button
  const handleSubmit = (e) =>{
    // to not let browser refresh it
    e.preventDefault();
    setLoading(true);

    // EMAIL JS 
    emailjs.send(

      // form email js id
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

      // parameter along with send
      // we send the sender name, email, message
      {
        form_name: form.name,
        to_name: 'Rajeeb',
        fom_email: form.email,
        to_email: 'starsgazer321@gmail.com',
        message: form.message,
      },

      // public key
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      // reseting the form
      setForm({
        name: '',
        email: '',
        message: '',
      })
    },
      // for error
      (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.')
      }
    )


  };
 


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>


      {/* EARTH MODEL */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};


export default SectionWrapper(Contact, 'contact')


// template_vbqdx17
// service_Portfolio