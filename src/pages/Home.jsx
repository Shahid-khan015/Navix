import { Link } from 'react-router-dom';
import MascotAvatar from '../components/MascotAvatar';

const Home = () => {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Select Dream Career
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover your strength, explore career options and find out all the information regarding your nearest College through NaviX designed just for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/aptitude"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
              >
                Free Quiz
              </Link>
              <Link
                to="/counselor"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
              >
                Counseling
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <MascotAvatar size="xl" animate={true} />
          </div>
        </div>

        {/* Why Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why you should select your Dream Career
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
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

            <div className="bg-white rounded-2xl p-8 shadow-lg">
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
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Game Zone</h3>
            <p className="text-gray-600">Fun games and quizzes to discover hidden careers and skills</p>
          </Link>

          <Link 
            to="/peer-connect"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Campus Clarity</h3>
            <p className="text-gray-600">Connect with current students and get real insights</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;