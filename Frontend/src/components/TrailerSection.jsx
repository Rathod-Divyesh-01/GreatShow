import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { dummyTrailers } from "../assets/assets.js";
import BlurCircle from "./BlurCircle";
import {PlayCircleIcon } from "lucide-react";

const TrailerSection = () => {
  const [currentTrailer,setCurrentTrailer] = useState(dummyTrailers?.[0]);
  useEffect(() => {   
    console.log("Trailer URL updated:", currentTrailer?.videoUrl);
  }, [currentTrailer]);

  console.log("Current Trailer:", currentTrailer?.videoUrl);

  return (
    <div className="px-6 md:px-16 xl:px-24 py-20">
      <p className="text-lg text-gray-300 font-medium max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />

        <div className="mx-auto max-w-[960px] aspect-video">
          <ReactPlayer
            url={currentTrailer?.videoUrl}
            controls
            playing
            muted
            width="100%"
            height="100%"
          />
        </div>

        <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto"> 
            {dummyTrailers?.map((trailer, index) => (
              <div key={index} className="relative cursor-pointer group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300  transition max-md:h-60 md:max-h-60 " onClick={()=>{
                setCurrentTrailer(trailer)
              }}>
                <img src={trailer.image} alt="trailer thumbnail" className="w-full h-full rounded-lg object-cover brightness-75" />
                <PlayCircleIcon strokeWidth={1.6} className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2 " />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;