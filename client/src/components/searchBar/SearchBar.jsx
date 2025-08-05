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
    <div className="mt-8 w-full">
      {/* Type Switch */}
      <div className="flex gap-4 mb-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border 
              ${query.type === type 
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          min={0}
          max={10000000}
          onChange={handleChange}
          className="w-32 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          min={0}
          max={10000000}
          onChange={handleChange}
          className="w-32 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="flex items-center justify-center"
        >
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center transition"
          >
            <img src="/search.png" alt="Search" className="w-5 h-5" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
