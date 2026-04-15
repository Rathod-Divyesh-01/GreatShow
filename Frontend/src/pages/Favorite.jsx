import React from "react";
import { dummyShowsData } from "../assets/assets.js";
import BlurCircle from "../components/BlurCircle.jsx";
import MovieCard from "../components/MovieCard.jsx";

const Movies = () => {
  return (
    <div>
      {dummyShowsData.length > 0 ? (
        <div className="relative pt-28 pb-20 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
          
          <BlurCircle top="150px" left="0px" />
          <BlurCircle bottom="50px" right="50px" />

          <h1 className="text-lg font-medium my-4 text-white">
            Your Favorite Movies
          </h1>

          {/* ✅ GRID FIX HERE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {dummyShowsData.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-white">
          <p className="font-semibold">No movies available.</p>
        </div>
      )}
    </div>
  );
};

export default Movies;