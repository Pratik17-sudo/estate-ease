import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className="text-gray-600 mb-6 text-lg max-w-xl mx-auto lg:mx-0">
          Find your dream home or perfect investment—fast and hassle-free.
          Explore verified listings with photos, prices, and location insights.
          Buy, sell, or rent with confidence through trusted agents and tools.
          Your next property journey starts here—only at ESTATE EASE.
        </p>

        {/* Search Bar */}
        <SearchBar />

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-gray-700">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-3xl font-bold">16+</h2>
            <p className="text-sm">Years of Experience</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-3xl font-bold">200</h2>
            <p className="text-sm">Award Gained</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-3xl font-bold">2000+</h2>
            <p className="text-sm">Property Ready</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 animate-fade-in">
        <img
          src="/bg.png"
          alt="Real Estate Banner"
          className="w-full max-w-md md:max-w-lg rounded-3xl shadow-xl"
        />
      </div>
    </div>
  );
}

export default HomePage;
