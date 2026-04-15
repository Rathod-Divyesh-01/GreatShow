import React, { useState } from "react";
import BlurCircle from "./BlurCircle";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const onBookHandler = () => {
    if (!selectedDate) {
      return toast.error("Please select a date");
    }
    navigate(`/movies/${id}/${selectedDate}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-red-800/20 border border-red-600/20 rounded-lg">
      <BlurCircle top="-100px" right="-100px" />
      <BlurCircle top="100px" right="0px" />

      <div>
        <p className="text-lg font-semibold">Choose Date</p>

        <div className="flex items-center gap-6 text-sm mt-5">
          <ChevronLeftIcon width={28} />

          <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
            {Object.keys(dateTime).map((date) => (
              <button
                key={date}
                className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
                  selectedDate === date
                    ? "bg-red-500 text-white"
                    : "border border-red-400/50"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <span>{new Date(date).getDate()}</span>
                <span>
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
              </button>
            ))}
          </span>

          <ChevronRightIcon width={28} />
        </div>
      </div>

      <button
        onClick={onBookHandler}
        className="text-white px-8 py-2 mt-6 rounded bg-red-500 hover:bg-red-600 transition-all cursor-pointer font-medium"
      >
        Book Now
      </button>
    </div>
  );
};

export default DateSelect;
