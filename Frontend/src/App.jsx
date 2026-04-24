import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import SeatLayout from "./pages/SeatLayout.jsx";
import MyBooking from "./pages/MyBooking.jsx";
import Favorite from "./pages/Favorite.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import Layout from "./pages/admin/Layout.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AddShow from "./pages/admin/AddShow.jsx";
import ListBooking from "./pages/admin/ListBooking.jsx";
import ListShow from "./pages/admin/ListShow.jsx";

const App = () => {
  const isAdmin = useLocation().pathname.includes("/admin");

  return (
    <div>
      <Toaster />

      {!isAdmin && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/admin/*" element={<Layout />}>
           <Route index element={<Dashboard />} />
           <Route path="add-show" element={<AddShow />} />
           <Route path="list-show" element={<ListShow />} />
           <Route path="list-booking" element={<ListBooking />} />
        </Route>
      </Routes>

      {!isAdmin && <Footer />}
    </div>
  );
};

export default App;