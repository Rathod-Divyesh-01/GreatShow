import React from "react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "lucide-react";
import timeFormat from "../Lib/timeFormat.js";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-72 m-4 p-2">
      {/* Image */}
      <div className="overflow-hidden pb-3 rounded-xl">
        <img
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            window.scrollTo(0, 0);
          }}
          src={movie.backdrop_path}
          alt="Movie Poster"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-md font-semibold">{movie.title}</h3>

        <p className="text-sm text-gray-400 mt-3">
          {new Date(movie.release_date).getFullYear()} •{" "}
          {movie.genres
            ?.slice(0, 2)
            .map((g) => g.name)
            .join(" | ")}{" "}
          • {timeFormat(movie.runtime)}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-4 pb-3">
          <button
            onClick={() => {
              navigate(`/movies/${movie._id}`);
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-1 px-4 py-2 text-sm bg-primary bg-red-500 rounded-full hover:bg-red-600 hover:bg-primary-dull transition  font-medium cursor-pointer"
          >
            Buy Tickets
          </button>

          {/* ⭐ Rating Badge */}
          <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md">
            <StarIcon className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="text-sm">
              {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
