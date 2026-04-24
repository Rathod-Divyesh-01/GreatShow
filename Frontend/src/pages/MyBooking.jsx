import React, { useEffect, useState } from "react";
import { dummyBookingData } from "../assets/assets.js";
import Loding from "../components/Loding.jsx";
import BlurCircle from "../components/BlurCircle.jsx";
import timeFormat from "../Lib/timeFormat.js";
import { dateFormat } from "../Lib/DateFormat.js";
import toast from "react-hot-toast";

const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const data = dummyBookingData;
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handlePayment = (item) => {
    // 🔥 Replace with real payment logic later
    toast.success(`Proceeding to payment for ${item.show.movie.title}`);
    console.log("Pay for booking:", item);
  };

  if (loading) return <Loding />;

  return (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      
      {/* Background Effects */}
      <BlurCircle top="100px" left="100px" />
      <BlurCircle bottom="0px" left="600px" />

      <h1 className="text-xl font-semibold mb-6">My Bookings</h1>

      {/* Empty State */}
      {bookings.length === 0 && (
        <p className="text-gray-400 mt-10 text-center">
          No bookings found 🎟️
        </p>
      )}

      {/* Booking Cards */}
      {bookings.map((item, index) => (
        <div
          key={item.id || index}
          className="flex flex-col md:flex-row justify-between bg-red-500/10 border border-red-600/20 backdrop-blur-sm rounded-lg p-3 mt-4 max-w-3xl"
        >
          
          {/* Left Section */}
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={item?.show?.movie?.poster_path}
              alt="Movie Poster"
              className="w-full md:w-40 aspect-video object-cover object-bottom rounded"
            />

            <div className="flex flex-col p-2">
              <p className="text-lg font-semibold">
                {item?.show?.movie?.title}
              </p>

              <p className="text-gray-400 text-sm">
                {timeFormat(item?.show?.movie?.runtime)}
              </p>

              <p className="text-gray-400 text-sm mt-auto">
                {dateFormat(item?.show?.showDateTime)}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:items-end md:text-right justify-between p-2">
            
            {/* Price + Payment */}
            <div>
              <p className="text-2xl font-semibold mb-2">
                {currency}
                {Number(item.amount).toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>

              {/* Status */}
              <p
                className={`text-xs font-medium mb-2 ${
                  item.isPaid ? "text-green-400" : "text-yellow-400"
                }`}
              >
                {item.isPaid ? "Paid" : "Pending"}
              </p>

              {/* Pay Button */}
              {!item.isPaid && (
                <button
                  onClick={() => handlePayment(item)}
                  className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-1.5 mb-2 text-sm rounded-full font-medium"
                >
                  Pay Now
                </button>
              )}
            </div>

            {/* Seat Info */}
            <div className="text-sm">
              <p>
                <span className="text-gray-400">Total tickets: </span>
                {item?.bookedSeats?.length}
              </p>

              <p>
                <span className="text-gray-400">Seat Number: </span>
                {item?.bookedSeats?.join(", ")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;