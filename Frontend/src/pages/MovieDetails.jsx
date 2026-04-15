import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets.js";
import BlurCircle from "../components/BlurCircle.jsx";
import { Heart, PlayCircle, StarIcon } from "lucide-react";
import DateSelact from "../components/dateSelact.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Loding from "../components/Loding.jsx";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(null);

  // ✅ Format runtime
  const timeFormat = (time) => {
    const h = Math.floor(time / 60);
    const m = time % 60;
    return `${h}h ${m}m`;
  };

  // ✅ Get movie (FIXED ID)
  const getMovie = () => {
    const movie = dummyShowsData.find((m) => m.id === Number(id));

    if (movie) {
      setShow({
        movie,
        dateTime: dummyDateTimeData,
      });
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div>
      {show ? (
        <div className="px-6 md:px-16 lg:px-40 pt-28 md:pt-40">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            {/* ✅ FIXED IMG */}
            <img
              src={show.movie.poster_path}
              alt={show.movie.title}
              className="w-full max-md:mx-auto rounded-xl h-[420px] max-w-[280px] object-cover"
            />

            <div className="flex flex-col gap-4 relative">
              <BlurCircle top="-100px" left="-100px" />

              <p className="text-primary">English</p>

              <h1 className="text-3xl md:text-4xl font-semibold max-w-md">
                {show.movie.title}
              </h1>

              <div className="flex items-center gap-2 text-gray-300">
                <StarIcon className="w-5 h-5 text-red-500 fill-red-500" />
                {show.movie.vote_average.toFixed(1)} User Rating
              </div>

              <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
                {show.movie.overview}
              </p>

              <p className="text-gray-300 text-sm">
                {timeFormat(show.movie.runtime)} |{" "}
                {new Date(show.movie.release_date).getFullYear()} |{" "}
                {show.movie.genres.map((g) => g.name).join(", ")}
              </p>

              <div className="flex items-center flex-wrap gap-4 mt-4">
                <button className="flex items-center gap-1 px-7 py-3 text-sm bg-primary bg-gray-800 rounded-md hover:bg-gray-900 hover:bg-primary-dull transition  font-medium cursor-pointer">
                  <PlayCircle className="w-5 h-5" />
                  Watch trailer
                </button>
                <a
                  href="#dateSelect"
                  className="flex items-center gap-1 px-7 py-3 text-sm bg-primary bg-red-500 rounded-md hover:bg-red-600 hover:bg-primary-dull transition  font-medium cursor-pointer"
                >
                  Buy Tickets
                </a>
                <button className="cursor-pointer rounded-full text-gray-300 hover:text-red-500 transition  font-medium bg-gray-700 p-2.5 hover:bg-gray-600">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <p>Your Favorite Cast</p>
          <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
            <div className="flex items-center gap-4 w-max px-4 ">
              {show.movie.casts.slice(0, 12).map((cast, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <img
                    src={cast.profile_path}
                    alt={cast.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <p className="text-sm text-gray-300">{cast.name}</p>
                </div>
              ))}
            </div>
          </div>
          <DateSelact dateTime={show.dateTime} id={id} />

          <p className="text-xl font-medium mb-8 mt-20">You May Also Like</p>
          <div className="flex flex-wrap max-sm:justify-center gap-4 ">
            {dummyShowsData.slice(0, 4).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
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
      ) : (
        <div className="flex items-center justify-center h-screen text-white">
         <Loding />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
