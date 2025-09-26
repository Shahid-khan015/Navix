import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars and decorative elements */}
        <div className="absolute top-20 left-10 text-white text-2xl">✦</div>
        <div className="absolute top-40 right-20 text-white text-lg">✧</div>
        <div className="absolute bottom-40 left-20 text-white text-xl">✦</div>
        <div className="absolute top-60 left-1/4 text-white text-sm">✧</div>
        <div className="absolute bottom-60 right-1/4 text-white text-lg">✦</div>
        <div className="absolute top-80 right-10 text-white text-sm">✧</div>
        <div className="absolute bottom-20 left-1/3 text-white text-xl">✦</div>
        <div className="absolute top-32 right-1/3 text-white text-sm">✧</div>
        
        {/* Floating lines */}
        <div className="absolute top-16 left-16 w-8 h-0.5 bg-white opacity-60 rotate-45"></div>
        <div className="absolute bottom-32 right-16 w-12 h-0.5 bg-white opacity-60 -rotate-12"></div>
        <div className="absolute top-1/2 left-8 w-6 h-0.5 bg-white opacity-60 rotate-12"></div>
        <div className="absolute top-1/3 right-8 w-10 h-0.5 bg-white opacity-60 -rotate-45"></div>
      </div>

      <div className="relative z-10 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 pt-8">
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Select Dream Career
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Discover your strength, explorer career option and find out the all Information regarding your nearest College through <span className="font-bold">NaviX</span> designed just for you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/aptitude"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
                >
                  Free Quiz →
                </Link>
                <Link
                  to="/counselor"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
                >
                  Counseling
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              {/* Character illustration */}
              <div className="relative">
                <div className="w-64 h-80 relative">
                  {/* Character body */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    {/* Legs */}
                    <div className="w-16 h-32 bg-teal-400 rounded-t-full mx-auto mb-2"></div>
                    
                    {/* Body */}
                    <div className="w-24 h-40 bg-gradient-to-b from-red-500 via-white to-red-500 rounded-t-3xl mx-auto relative">
                      {/* Stripes */}
                      <div className="absolute top-8 left-0 right-0 h-4 bg-white"></div>
                      <div className="absolute top-16 left-0 right-0 h-4 bg-red-500"></div>
                      <div className="absolute top-24 left-0 right-0 h-4 bg-white"></div>
                    </div>
                    
                    {/* Arms */}
                    <div className="absolute top-16 -left-6 w-6 h-16 bg-orange-300 rounded-full transform rotate-12"></div>
                    <div className="absolute top-16 -right-6 w-6 h-16 bg-orange-300 rounded-full transform -rotate-12"></div>
                    
                    {/* Head */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-orange-300 rounded-full">
                      {/* Hair */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-full"></div>
                      
                      {/* Eyes */}
                      <div className="absolute top-6 left-4 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-6 right-4 w-2 h-2 bg-black rounded-full"></div>
                      
                      {/* Smile */}
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Why you should select your Dream Career
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Passion and Fulfillment
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    A dream career aligns with your interests and passions, making work feel enjoyable instead of just an obligation.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    You feel motivated, engaged, and satisfied because you're doing something meaningful to you.
                  </li>
                </ul>
              </div>

              <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Better Performance & Success
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    When you love what you do, you naturally put in more effort and excel in your field.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    This leads to better career advancement and financial rewards over time.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link 
              to="/career-info"
              className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold mb-3">Career Exploration</h3>
              <p className="text-purple-100">Discover various career paths and their requirements</p>
            </Link>

            <Link 
              to="/college-info"
              className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold mb-3">College Finder</h3>
              <p className="text-blue-100">Find the best colleges for your dream career</p>
            </Link>

            <Link 
              to="/competitive-exam"
              className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold mb-3">Scholarships</h3>
              <p className="text-green-100">Find scholarships and competitive exams</p>
            </Link>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              to="/game-zone"
              className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Game Zone</h3>
              <p className="text-gray-600">Fun games and quizzes to discover hidden careers and skills</p>
            </Link>

            <Link 
              to="/peer-connect"
              className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Campus Clarity</h3>
              <p className="text-gray-600">Connect with current students and get real insights</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;