import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Text Content */}
        <div className="flex-1 lg:flex-[3] flex items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 py-12 lg:py-0">
          <div className="max-w-2xl w-full space-y-8 lg:space-y-12">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Find Real Estate &{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Get Your Dream Place
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Find your dream home or perfect investment—fast and hassle-free.
                Explore verified listings with photos, prices, and location insights.
                Buy, sell, or rent with confidence through trusted agents and tools.
                Your next property journey starts here—only at{" "}
                <span className="font-semibold text-indigo-600">ESTATE EASE</span>.
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full">
              <SearchBar />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 lg:pt-12">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    16+
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    Years of Experience
                  </p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    200
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    Awards Gained
                  </p>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    2000+
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    Properties Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 lg:flex-[2] relative overflow-hidden lg:min-h-screen">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-60 animate-pulse delay-500"></div>
          
          {/* Main Image */}
          <div className="relative h-64 lg:h-full flex items-center justify-center p-8 lg:p-12">
            <div className="relative max-w-md lg:max-w-lg xl:max-w-xl w-full">
              <img
                src="/bg.png"
                alt="Dream House"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20 animate-bounce">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">$2.5M</div>
                  <div className="text-xs text-gray-600">Avg. Sale</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20 animate-bounce delay-500">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Estate Ease?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make property hunting simple, transparent, and rewarding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Search</h3>
              <p className="text-gray-600">Advanced filters to find exactly what you're looking for</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Listings</h3>
              <p className="text-gray-600">All properties are verified and up-to-date</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional agents ready to help you succeed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
