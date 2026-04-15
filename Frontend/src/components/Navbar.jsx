import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  // Active link styling
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-red-400 font-semibold"
      : "hover:text-red-400 transition";

  // Scroll + close mobile menu
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between py-4 px-6 md:px-20 text-white bg-black/30 backdrop-blur-md">
      
      {/* Logo */}
      <Link to="/" onClick={handleNavClick}>
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg text-sm">
        
        <NavLink to="/" end className={navLinkClass} onClick={handleNavClick}>
          Home
        </NavLink>

        <NavLink to="/movies" className={navLinkClass} onClick={handleNavClick}>
          Movies
        </NavLink>

        <NavLink to="/theaters" className={navLinkClass} onClick={handleNavClick}>
          Theaters
        </NavLink>

        <NavLink to="/releases" className={navLinkClass} onClick={handleNavClick}>
          Releases
        </NavLink>

        <NavLink to="/favorite" className={navLinkClass} onClick={handleNavClick}>
          Favorites
        </NavLink>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        
        {/* Search Icon */}
        <SearchIcon className="cursor-pointer hover:text-red-400" />

        {/* Auth Section */}
        {!user ? (
          <button
            className="bg-red-500 px-6 py-2 rounded-full hover:bg-red-600 transition"
            onClick={openSignIn}
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Booking"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

        {/* Mobile Menu Button */}
        <MenuIcon
          onClick={() => setIsOpen(true)}
          className="md:hidden cursor-pointer"
        />
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-8 text-lg z-50 transition-all duration-300">
          
          {/* Close Button */}
          <XIcon
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 cursor-pointer"
          />

          <NavLink to="/" end className={navLinkClass} onClick={handleNavClick}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navLinkClass} onClick={handleNavClick}>
            Movies
          </NavLink>

          <NavLink to="/theaters" className={navLinkClass} onClick={handleNavClick}>
            Theaters
          </NavLink>

          <NavLink to="/releases" className={navLinkClass} onClick={handleNavClick}>
            Releases
          </NavLink>

          <NavLink to="/favorite" className={navLinkClass} onClick={handleNavClick}>
            Favorites
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;