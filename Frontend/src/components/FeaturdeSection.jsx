import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import MovieCard from "./MovieCard";
import { dummyShowsData } from "../assets/assets.js";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />

        <p className="text-gray-300 font-medium text-lg">New Showing</p>

        <button
          onClick={() => navigate("/movies")}
          className="group flex items-center gap-2 text-sm text-gray-300"
        >
          View All
          <ArrowRight className="group-hover:translate-x-1 transition w-4 h-4" />
        </button>
      </div>

      {/* Movie Cards */}
      <div className="flex items-center gap-6 overflow-x-auto pb-6">
        {dummyShowsData.slice(0, 4).map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/movies");
          window.scrollTo(0, 0);
        }}
        className="flex items-center gap-1 px-6 py-3 text-sm  text-white :bg-primary bg-red-500 rounded-md  hover:bg-red-600 hover:bg-primary-dull transition  font-medium cursor-pointer m-auto "
      >
        Show more
      </button>
    </div>
  );
};

export default FeaturedSection;
