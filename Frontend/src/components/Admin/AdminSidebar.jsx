import React from "react";
import { assets } from "../../assets/assets.js";
import { NavLink, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const user = {
    firstName: "Divyesh",
    lastName: "Rathod",
    imageurl: assets.profile,
  };

  const adminNavLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Add Show", path: "/admin/add-show" },
    { name: "List Show", path: "/admin/list-show" },
    { name: "List Booking", path: "/admin/list-booking" },
  ];

  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 border-r border-gray-300/20 text-sm ">
      {/* User Info */}
      <div className="flex flex-col items-center justify-center gap-3 mb-6">
        <img
          src={user.imageurl}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <p className="font-semibold">
          {user.firstName} {user.lastName}
        </p>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col gap-3 w-full ">
        {adminNavLinks.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 h-10 transition flex items-center gap-2 justify-center md:justify-start rounded-sm ${
                  isActive
                    ? "bg-red-500/30 text-white"
                    : "border border-red-400/50 hover:bg-red-500/20"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Icon */}
                  {link.icon && <link.icon className="w-5 h-5" />}

                  {/* Text */}
                  <p className="hidden md:block">{link.name}</p>

                  {/* Active Indicator */}
                  <span
                    className={`w-1.5 h-full top-0 rounded-sm absolute right-0 transition-all duration-300 ${
                      isActive ? "bg-red-500" : ""
                    }`}
                  />
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
