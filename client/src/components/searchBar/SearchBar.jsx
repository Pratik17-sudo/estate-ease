import { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Type Selector */}
      <div className="flex mb-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-6 py-3 text-sm font-medium transition-all duration-300 first:rounded-l-xl last:rounded-r-xl border-2 border-b-0 ${
              query.type === type
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-600 shadow-lg transform -translate-y-1"
                : "bg-white/80 backdrop-blur-sm text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-2">
        <form className="flex flex-col sm:flex-row gap-2">
          {/* City Input */}
          <div className="flex-1">
            <input
              type="text"
              name="city"
              placeholder="Enter city name"
              onChange={handleChange}
              className="w-full px-4 py-4 text-gray-700 bg-transparent border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 placeholder-gray-400 text-sm font-medium"
            />
          </div>

          {/* Price Inputs */}
          <div className="flex flex-col sm:flex-row gap-2 sm:flex-1">
            <input
              type="number"
              name="minPrice"
              min={0}
              max={10000000}
              placeholder="Min Price"
              onChange={handleChange}
              className="flex-1 px-4 py-4 text-gray-700 bg-transparent border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 placeholder-gray-400 text-sm font-medium"
            />
            <input
              type="number"
              name="maxPrice"
              min={0}
              max={10000000}
              placeholder="Max Price"
              onChange={handleChange}
              className="flex-1 px-4 py-4 text-gray-700 bg-transparent border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 placeholder-gray-400 text-sm font-medium"
            />
          </div>

          {/* Search Button */}
          <Link
            to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
            className="flex-shrink-0"
          >
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl group"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </div>
            </button>
          </Link>
        </form>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <button className="px-4 py-2 text-xs font-medium text-gray-600 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white/80 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300">
          🏠 Houses
        </button>
        <button className="px-4 py-2 text-xs font-medium text-gray-600 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white/80 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300">
          🏢 Apartments
        </button>
        <button className="px-4 py-2 text-xs font-medium text-gray-600 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white/80 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300">
          🏘️ Condos
        </button>
        <button className="px-4 py-2 text-xs font-medium text-gray-600 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-white/80 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300">
          💰 Under $500K
        </button>
      </div>
    </div>
  );
}

export default SearchBar;