import { BrowserRouter } from "react-router-dom";
import { useEffect,useState } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {



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

    
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className={isMobile?'bg-hero-pattern bg-cover bg-no-repeat bg-center':''}>
          <Navbar />
          <Hero isMobile= {isMobile}/>
          
        </div>
        <About />
        <Experience />
        
        {!isMobile && (<Tech isMobile= {isMobile} />)}
        <Works />
        {/* <Feedbacks /> */}

        <div className='relative z-0'>
          <Contact />
          {isMobile && (<StarsCanvas isMobile={isMobile} />)}
        </div>

        {!isMobile && (<StarsCanvas isMobile= {isMobile} />)}
        
      </div>
    </BrowserRouter>
  );
}

export default App;
