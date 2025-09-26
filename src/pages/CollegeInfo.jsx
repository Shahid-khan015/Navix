import { useState } from 'react';
import { Search, MapPin, Star, Users, BookOpen, DollarSign, Filter, ExternalLink } from 'lucide-react';

const CollegeInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCollege, setSelectedCollege] = useState(null);

  const colleges = [
    {
      id: 1,
      name: 'Government Engineering College, Himmatnagar',
      type: 'Government',
      state: 'Gujarat',
      city: 'Himmatnagar',
      courses: ['B.E. in Information Technology', 'B.E. in Computer Engineering', 'B.E. in Mechanical Engineering'],
      fees: '₹75,000 - 90,000 (Total)',
      cutoff: 'JEE Main: 85-95 percentile',
      rating: 4.2,
      established: 1999,
      facilities: ['Library', 'Computer Labs', 'Workshops', 'Sports Complex', 'Hostels', 'Wi-Fi Campus'],
      placement: {
        percentage: '78%',
        averagePackage: '₹4.5 LPA',
        highestPackage: '₹12 LPA',
        companies: ['TCS', 'Infosys', 'Wipro', 'L&T', 'Mahindra']
      },
      scholarships: ['MYSY', 'State Merit Scholarship', 'Minority Scholarship'],
      website: 'https://gech.ac.in',
      description: 'A premier government engineering college known for quality technical education and strong industry connections.'
    },
    {
      id: 2,
      name: 'All India Institute of Medical Sciences, Delhi',
      type: 'Government',
      state: 'Delhi',
      city: 'New Delhi',
      courses: ['MBBS', 'BDS', 'B.Sc. Nursing', 'B.Sc. Medical Technology'],
      fees: '₹1,400 - 5,500 (Per year)',
      cutoff: 'NEET: 99.9+ percentile',
      rating: 4.9,
      established: 1956,
      facilities: ['Hospital', 'Research Centers', 'Library', 'Hostels', 'Sports Complex', 'Cafeterias'],
      placement: {
        percentage: '100%',
        averagePackage: '₹15 LPA',
        highestPackage: '₹50+ LPA',
        companies: ['Top Hospitals', 'Research Institutes', 'Government Health', 'Private Healthcare']
      },
      scholarships: ['NEET Merit Scholarship', 'Central Sector Scholarship', 'ST/SC/OBC Scholarships'],
      website: 'https://aiims.edu',
      description: 'India\'s premier medical institute with world-class facilities and research opportunities.'
    },
    {
      id: 3,
      name: 'Lady Shri Ram College for Women, Delhi',
      type: 'Government',
      state: 'Delhi',
      city: 'New Delhi',
      courses: ['B.A. Economics', 'B.Com (Hons)', 'B.A. Psychology', 'B.A. Political Science'],
      fees: '₹15,000 - 25,000 (Per year)',
      cutoff: 'DU Cut-off: 98%+',
      rating: 4.7,
      established: 1956,
      facilities: ['Library', 'Auditorium', 'Computer Labs', 'Sports Facilities', 'Cafeteria', 'Cultural Center'],
      placement: {
        percentage: '95%',
        averagePackage: '₹8 LPA',
        highestPackage: '₹25 LPA',
        companies: ['Deloitte', 'EY', 'KPMG', 'Goldman Sachs', 'McKinsey']
      },
      scholarships: ['Merit-based Scholarships', 'Need-based Financial Aid', 'Delhi Government Scholarships'],
      website: 'https://lsr.edu.in',
      description: 'Premier women\'s college known for academic excellence and strong alumni network.'
    },
    {
      id: 4,
      name: 'Indian Institute of Technology, Bombay',
      type: 'Government',
      state: 'Maharashtra',
      city: 'Mumbai',
      courses: ['B.Tech (Various Branches)', 'M.Tech', 'Ph.D'],
      fees: '₹2.5 - 3 LPA (Total)',
      cutoff: 'JEE Advanced: Top 2500 ranks',
      rating: 4.8,
      established: 1958,
      facilities: ['World-class Labs', 'Research Centers', 'Library', 'Hostels', 'Sports Complex', 'Innovation Centers'],
      placement: {
        percentage: '100%',
        averagePackage: '₹18 LPA',
        highestPackage: '₹1.2 CPA',
        companies: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'McKinsey']
      },
      scholarships: ['JEE Merit Scholarship', 'KVPY Fellowship', 'Institute Scholarships'],
      website: 'https://iitb.ac.in',
      description: 'One of India\'s premier engineering institutes with global recognition and excellent placement records.'
    },
    {
      id: 5,
      name: 'Jamia Millia Islamia, Delhi',
      type: 'Government',
      state: 'Delhi',
      city: 'New Delhi',
      courses: ['B.A.', 'B.Com', 'B.Tech', 'B.Arch', 'BBA', 'Mass Communication'],
      fees: '₹8,000 - 25,000 (Per year)',
      cutoff: 'Various entrance exams',
      rating: 4.3,
      established: 1920,
      facilities: ['Library', 'Computer Centers', 'Hostels', 'Sports Complex', 'Medical Center', 'Mosque'],
      placement: {
        percentage: '70%',
        averagePackage: '₹5.5 LPA',
        highestPackage: '₹15 LPA',
        companies: ['TCS', 'Wipro', 'HCL', 'Accenture', 'IBM']
      },
      scholarships: ['Minority Scholarships', 'Merit Scholarships', 'Maulana Azad Fellowship'],
      website: 'https://jmi.ac.in',
      description: 'Central university offering diverse courses with emphasis on quality education and research.'
    },
    {
      id: 6,
      name: 'Banaras Hindu University, Varanasi',
      type: 'Government',
      state: 'Uttar Pradesh',
      city: 'Varanasi',
      courses: ['B.A.', 'B.Sc.', 'B.Tech', 'MBBS', 'B.Com', 'BFA'],
      fees: '₹3,000 - 15,000 (Per year)',
      cutoff: 'BHU Entrance Test',
      rating: 4.4,
      established: 1916,
      facilities: ['Hospital', 'Museums', 'Libraries', 'Hostels', 'Sports Complex', 'Cultural Centers'],
      placement: {
        percentage: '75%',
        averagePackage: '₹6 LPA',
        highestPackage: '₹20 LPA',
        companies: ['Infosys', 'TCS', 'L&T', 'BHEL', 'Railways']
      },
      scholarships: ['UGC Scholarships', 'State Government Scholarships', 'University Merit Scholarships'],
      website: 'https://bhu.ac.in',
      description: 'One of India\'s largest residential universities with a rich heritage and diverse academic programs.'
    }
  ];

  const states = [
    'all', 'Delhi', 'Gujarat', 'Maharashtra', 'Uttar Pradesh', 'Karnataka', 'Tamil Nadu', 
    'West Bengal', 'Rajasthan', 'Punjab', 'Haryana', 'Kerala'
  ];

  const courses = [
    'all', 'B.Tech/B.E.', 'MBBS', 'B.A.', 'B.Com', 'B.Sc.', 'BBA', 'B.Arch', 'BDS', 'B.Ed'
  ];

  const types = ['all', 'Government', 'Private', 'Deemed'];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'all' || college.state === selectedState;
    const matchesCourse = selectedCourse === 'all' || 
                         college.courses.some(course => course.toLowerCase().includes(selectedCourse.toLowerCase().replace('/', '').replace('.', '')));
    const matchesType = selectedType === 'all' || college.type === selectedType;
    
    return matchesSearch && matchesState && matchesCourse && matchesType;
  });

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">College Information & Finder</h1>
          <p className="text-gray-600">Discover the best colleges for your dream career with detailed information and smart recommendations</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search colleges, cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            >
              <option value="all">All States</option>
              {states.filter(state => state !== 'all').map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            >
              <option value="all">All Courses</option>
              {courses.filter(course => course !== 'all').map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            >
              <option value="all">All Types</option>
              {types.filter(type => type !== 'all').map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredColleges.length}</span> colleges
          </p>
        </div>

        {/* College Cards */}
        <div className="space-y-6 mb-8">
          {filteredColleges.map(college => (
            <div
              key={college.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 ${
                selectedCollege?.id === college.id ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* College Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{college.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {college.city}, {college.state}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          college.type === 'Government' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {college.type}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {college.rating}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{college.description}</p>
                    </div>
                  </div>

                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-800">Fees</span>
                      </div>
                      <p className="text-sm text-purple-800 font-semibold">{college.fees}</p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-gray-800">Cutoff</span>
                      </div>
                      <p className="text-sm text-blue-800 font-semibold">{college.cutoff}</p>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-gray-800">Placement</span>
                      </div>
                      <p className="text-sm text-green-800 font-semibold">{college.placement.percentage}</p>
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Popular Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {college.courses.slice(0, 3).map((course, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {course}
                        </span>
                      ))}
                      {college.courses.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{college.courses.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedCollege(selectedCollege?.id === college.id ? null : college)}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      {selectedCollege?.id === college.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                    >
                      Official Website <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              {selectedCollege?.id === college.id && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* All Courses */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">All Courses Offered</h4>
                        <div className="space-y-2">
                          {college.courses.map((course, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <BookOpen className="w-4 h-4 text-blue-500" />
                              <span className="text-gray-700">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Facilities */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Campus Facilities</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {college.facilities.map((facility, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              <span className="text-gray-700 text-sm">{facility}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Scholarships */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Available Scholarships</h4>
                        <div className="space-y-2">
                          {college.scholarships.map((scholarship, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-green-500" />
                              <span className="text-gray-700 text-sm">{scholarship}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Placement Details */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Placement Statistics</h4>
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Placement Rate:</span>
                              <span className="font-semibold text-green-600">{college.placement.percentage}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Average Package:</span>
                              <span className="font-semibold text-blue-600">{college.placement.averagePackage}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Highest Package:</span>
                              <span className="font-semibold text-purple-600">{college.placement.highestPackage}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Top Recruiting Companies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Top Recruiting Companies</h4>
                        <div className="flex flex-wrap gap-2">
                          {college.placement.companies.map((company, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Information</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between p-2 bg-gray-50 rounded">
                            <span className="text-gray-600">Established:</span>
                            <span className="font-semibold">{college.established}</span>
                          </div>
                          <div className="flex justify-between p-2 bg-gray-50 rounded">
                            <span className="text-gray-600">Type:</span>
                            <span className="font-semibold">{college.type}</span>
                          </div>
                          <div className="flex justify-between p-2 bg-gray-50 rounded">
                            <span className="text-gray-600">Rating:</span>
                            <span className="font-semibold flex items-center">
                              {college.rating} <Star className="w-4 h-4 text-yellow-500 ml-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">No colleges found matching your criteria. Try adjusting your filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedState('all');
                setSelectedCourse('all');
                setSelectedType('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-6">
            Our AI counselor can help you find the perfect college based on your interests and goals!
          </p>
          <div className="space-x-4">
            <button
              onClick={() => window.location.href = '/aptitude'}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Take Aptitude Quiz
            </button>
            <button
              onClick={() => window.location.href = '/counselor'}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Talk to AI Counselor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;