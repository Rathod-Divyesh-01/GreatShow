import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loding from "../components/Loding";
import { assets, dummyDateTimeData, dummyShowsData } from "../assets/assets.js";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { isoTimeFormat } from "../Lib/isoTimeformat.js";
import BlurCircle from "../components/BlurCircle.jsx";
import toast from "react-hot-toast";

const SeatLayout = () => {
  const { id, date } = useParams();

  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
  ];
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = () => {
    const movie = dummyShowsData.find((data) => String(data.id) === String(id));

    if (movie) {
      setShow({
        movie,
        dataTime: dummyDateTimeData,
      });
    }
  };

  const handaleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast("Please select a time first", { icon: "⏰" });
    }
    if (selectedSeats.length >= 5 && !selectedSeats.includes(seatId)) {
      return toast("You can select up to 5 seats only", { icon: "⚠️" });
    }
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className=" flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          return (
            <div
              key={seatId}
              onClick={() => handaleSeatClick(seatId)}
              className={`w-8 h-8 flex items-center justify-center text-[10px] rounded-sm cursor-pointer transition-colors ${
                selectedSeats.includes(seatId)
                  ? "bg-red-500 text-white"
                  : "bg-red-500/10 border border-red-500/20 hover:bg-red-500/30"
              }`}
            >
              {seatId}
            </div>
          );
        })}
      </div>
    </div>
  );

  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* Available Times */}
      <div className="w-60 bg-red-500/10 border border-red-500/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6 mb-4">Available Timings</p>

        <div className="flex flex-col gap-3 px-4">
          {show.dataTime?.[date]?.map((item) => (
            <div
              key={item.showId}
              onClick={() => setSelectedTime(item.time)}
              className={`flex flex-row items-center justify-center h-14  rounded cursor-pointer transition ${
                selectedTime === item.time
                  ? "bg-red-500 text-white"
                  : "border border-red-400/50"
              } hover:bg-red-500/20`}
            >
              <ClockIcon className="w-4 h-4 mb-1" />

              <p className="text-xs">{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seat Layout */}
      <div className=" relative flex flex-1 flex-col  items-center mex-md:mt-16">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0px" right="0px" />
        <h1 className="text-2xl font-semibold mb-6">Select your seat</h1>
        <div className="flex justify-center">
          <img
            src={assets.screenImage}
            alt="Screen"
            className="w-full max-w-xl rounded-lg object-cover"
          />
        </div>
        <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>

        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          <div>{groupRows[0].map((row) => renderSeats(row))}</div>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
            <div>{groupRows[1].map((row) => renderSeats(row))}</div>
          </div>
          <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
            <div>{groupRows[2].map((row) => renderSeats(row))}</div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
            <div>{groupRows[3].map((row) => renderSeats(row))}</div>
          </div>
          <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
            <div>{groupRows[4].map((row) => renderSeats(row))}</div>
          </div>
        </div>

        <button
          onClick={() => {
            if (!selectedTime) {
              return toast("Please select a time first", { icon: "⏰" });
            }
            if (selectedSeats.length === 0) {
              return toast("Please select at least one seat", { icon: "⚠️" });
            }
            navigate("/my-booking");
          }}
          className="mt-10 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded transition flex items-center gap-2 font-medium"
        >
          Proceed to Checkout
          <ArrowRightIcon className="w-4 h-4 " />
        </button>
      </div>
    </div>
  ) : (
    <Loding />
  );
};

export default SeatLayout;
