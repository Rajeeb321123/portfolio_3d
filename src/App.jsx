import { BrowserRouter } from "react-router-dom";
import { useEffect, useState} from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import VideoPopup from "./components/VideoPop";
import { GameProvider } from "./components/Context";

const App = () => {

  console.log("It may to crash on chrome for  mobile as it canot handle the polygon from 3d model. It may lead to need of reinstall of chrome for using again if crashed. It will work for brave browser for mobile. I have tried to make it work on mobile devices for brave browser as it is most powerful browser for mobile . Still I had to remove  many 3d models . I highly recommend to only use it on Pc so I am able to show  all the 3d models ");


  const [isMobile, setIsMobile] = useState(false)


  // using useEffect to change isMobile state without using external libraries unlike we did in our dashboard project with MUI
  useEffect(() => {

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


  }, [])
  return (


    <BrowserRouter>
    
        <div className='relative z-0 bg-primary'>

          



          <div className={isMobile ? 'bg-hero-pattern bg-cover bg-no-repeat bg-center' : ''}>
            <Navbar />
            <Hero isMobile={isMobile} />

          </div>
          <About />
          <Experience />

          {!isMobile && (<Tech isMobile={isMobile} />)}

          <GameProvider>
            {/* videoPopUP */}
          <div className="w-[100%] mt-0 mb-0 ml-auto mr-auto pt-0 pb-0 pl-[20px] pr-[20px]">
            <VideoPopup
              
            />
          </div>
          <Works  isMobile={isMobile}/>
          </GameProvider>
          
          {/* <Feedbacks /> */}

          <div className='relative z-0'>
            <Contact />
            {isMobile && (<StarsCanvas isMobile={isMobile} />)}
          </div>

          {!isMobile && (<StarsCanvas isMobile={isMobile} />)}

        </div>

    
      </BrowserRouter>
  );
}

export default App;
