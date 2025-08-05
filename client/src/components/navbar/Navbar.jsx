import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();

  return (
    <nav className="w-full px-6 py-4 shadow-md bg-gradient-to-r from-white via-blue-50 to-blue-100 flex justify-between items-center sticky top-0 z-50 font-sans">
      {/* Left Side */}
      <div className="left flex items-center gap-6">
        <a href="/" className="logo flex items-center gap-2 text-xl font-bold text-blue-700 hover:text-blue-900 transition">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span className="text-lg font-semibold">Estate Ease</span>
        </a>
        <a href="/" className="hidden md:inline text-gray-600 hover:text-blue-600 transition">Home</a>
        <a href="/" className="hidden md:inline text-gray-600 hover:text-blue-600 transition">About</a>
        <a href="/" className="hidden md:inline text-gray-600 hover:text-blue-600 transition">Contact</a>
        <a href="/" className="hidden md:inline text-gray-600 hover:text-blue-600 transition">Agents</a>
      </div>

      {/* Right Side */}
      <div className="right flex items-center gap-4 relative">
        {currentUser ? (
          <div className="user flex items-center gap-3">
            <img
              src={currentUser.avatar || "/Noavatar.png"}
              alt="avatar"
              className="w-9 h-9 rounded-full border-2 border-blue-500 object-cover"
            />
            <span className="font-medium text-gray-700">{currentUser.username}</span>
            <Link to="/profile" className="profile relative text-blue-600 hover:text-blue-800 transition">
              {number > 0 && (
                <div className="notification absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {number}
                </div>
              )}
              <span className="ml-2 font-semibold">Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login" className="text-gray-700 hover:text-blue-600 transition font-medium">Sign in</a>
            <a href="/register" className="register bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full transition">
              Sign up
            </a>
          </>
        )}

        {/* Mobile Menu Icon */}
        <div className="menuIcon md:hidden">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
            className="w-7 h-7 cursor-pointer"
          />
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`menu absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 transition-all duration-300 ease-in-out ${
            open ? "block" : "hidden"
          } md:hidden z-50`}
        >
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/" className="text-gray-700 hover:text-blue-600">Contact</a>
          <a href="/" className="text-gray-700 hover:text-blue-600">Agents</a>
          <a href="/login" className="text-gray-700 hover:text-blue-600">Sign in</a>
          <a href="/register" className="text-gray-700 hover:text-blue-600">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
