// Our video Pop 
// copied and modified my  Movie Info project

import React, { useContext } from "react";
import ReactPlayer from "react-player/youtube";
import { GameContext, GameProvider } from "./Context";


import { fadeIn, textVariant } from "../utils/motion";



const VideoPopup = () => {

    const { show, videoId } = useContext(GameContext);
    const [showValue, setShowValue] = show;
    const [videoIdValue, setVideoIdValue] = videoId;
    const hidePopup = () => {
        setShowValue(false);
        setVideoIdValue(null);
    };
    return (
        <div className={`flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0  z-10 ${showValue ? "opacity-1 visible" : "opacity-0 invisible"}`}>
            <div className={`absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000040] backdrop-blur-sm  ${showValue ? "opacity-1 " : "opacity-0   "} ease-in-out`} onClick={hidePopup}></div>



            {/* videoPlayer */}
            <div className={`relative w-[90%] lg:w-[800px] aspect-video  bg-white  ${show ? "scale-[1] " : "scale-[0.2]  "} ease-in-out`}>
                <span className={`absolute top-[-20px] right-0 text-white cursor-pointer`} onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`${videoIdValue}`}
                    controls
                    width="100%"
                    height="100%"
                // playing={true}
                />
            </div>


        </div>
    );
};

export default VideoPopup;