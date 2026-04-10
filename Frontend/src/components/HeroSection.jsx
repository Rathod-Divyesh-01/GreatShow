import React from "react";
import { assets } from "../assets/assets.js";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${assets.backgroundImage})` }}
      className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-cover 
    bg-center h-screen"
    >
      <img
        src={assets.marvelLogo}
        alt="MarvelLogo"
        className=" mex-h-11 lg:h-11 mt-20"
      />

      <h1 className=" text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Gurdians <br /> of the Galaxy
      </h1>

      <div className=" flex items-center gap-4 text-gray-300">
        <span className=" text-sm">Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" />
          2026
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" />
          2h 30m
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        In a post-apocalyptic world wher cities ride on wheels and consume each
        other to survive, two people meet in London and try to stop a cospiracy
      </p>
      <button
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary bg-red-500 rounded-full hover:bg-red-600 hover:bg-primary-dull transition  font-medium cursor-pointer "
        onClick={() => navigate("/movies")}
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Herosection;
