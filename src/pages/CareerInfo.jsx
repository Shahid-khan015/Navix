import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const CareerInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCareer, setSelectedCareer] = useState(null);

  const careers = [
    {
      id: 1,
      title: 'Doctor',
      icon: '👨‍⚕️👩‍⚕️👨‍⚕️',
      description: 'A doctor (physician) is a healthcare professional trained to diagnose illnesses, provide treatments, perform surgeries, and guide patients in maintaining good health.',
      education: 'MBBS (5.5 years) + MD/MS (3 years)',
      salary: '₹8-50 LPA',
      demand: 'Very High',
      skills: ['Medical Knowledge', 'Problem Solving', 'Communication', 'Empathy', 'Attention to Detail'],
      specializations: [
        'General Physician',
        'Cardiologist (Heart Specialist)',
        'Pediatrician (Child Specialist)',
        'Neurologist (Brain Specialist)',
        'Dermatologist (Skin Specialist)',
        'Psychiatrist (Mental Health)',
        'Oncologist (Cancer Specialist)',
        'Gynecologist & Obstetrician',
        'Orthopedic Surgeon',
        'ENT (Ear, Nose & Throat)',
        'Ophthalmologist (Eye Specialist)',
        'Anesthesiologist'
      ],
      workplaces: ['Hospitals (Government & Private)', 'Private Clinics', 'Research & Development', 'Academics/Teaching', 'Public Health Organizations', 'Armed Forces Medical Services'],
      pros: ['High respect and prestige in society', 'Wide career opportunities India & abroad', 'Financially rewarding', 'Opportunity to save lives and make a difference'],
      roadmap: [
        { stage: 'Class 12', desc: 'Complete PCB with good marks' },
        { stage: 'NEET', desc: 'Clear NEET exam for MBBS admission' },
        { stage: 'MBBS', desc: '5.5 years medical degree' },
        { stage: 'Internship', desc: '1 year mandatory internship' },
        { stage: 'Specialization', desc: 'MD/MS in chosen specialty (3 years)' },
        { stage: 'Career', desc: 'Practice as specialist doctor' }
      ]
    },
    {
      id: 2,
      title: 'Engineer',
      icon: '👷‍♂️⚙️🔧',
      description: 'A doctor (physician) is a healthcare professional trained to diagnose illnesses, provide treatments, perform surgeries, and guide patients in maintaining good health.',
      education: 'B.Tech/BE (4 years)',
      salary: '₹3-25+ LPA',
      demand: 'Extremely High',
      skills: ['Technical Skills', 'Problem Solving', 'Mathematics', 'Innovation', 'Project Management'],
      specializations: [
        'Computer Science Engineering',
        'Mechanical Engineering',
        'Electrical Engineering',
        'Civil Engineering',
        'Electronics Engineering',
        'Chemical Engineering',
        'Aerospace Engineering',
        'Biomedical Engineering'
      ],
      workplaces: ['Tech Companies', 'Manufacturing Industries', 'Construction Companies', 'Government Agencies', 'Research Organizations', 'Consulting Firms'],
      pros: ['High salary potential', 'Innovation opportunities', 'Global job market', 'Diverse specializations'],
      roadmap: [
        { stage: 'Class 12', desc: 'Complete PCM with good marks' },
        { stage: 'JEE', desc: 'Clear JEE Main/Advanced' },
        { stage: 'B.Tech', desc: '4 years engineering degree' },
        { stage: 'Internships', desc: 'Gain practical experience' },
        { stage: 'Skills', desc: 'Develop technical expertise' },
        { stage: 'Career', desc: 'Start as engineer' }
      ]
    }
  ];

  const filteredCareers = careers.filter(career => 
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Career Information Hub</h1>
          <p className="text-gray-700">Explore detailed information about various career paths and make informed decisions</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="bg-white rounded-full px-4 py-3 shadow-lg flex items-center">
              <div className="mr-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Hinted search text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-gray-600"
              />
              <Search className="w-5 h-5 text-gray-400 ml-2" />
            </div>
          </div>
          <button className="bg-white rounded-full p-3 shadow-lg">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Career Cards */}
        <div className="space-y-6">
          {filteredCareers.map(career => (
            <div
              key={career.id}
              className="bg-purple-200 bg-opacity-80 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-6 flex-1">
                  <div className="text-6xl">
                    {career.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{career.title}</h3>
                    <p className="text-gray-700 leading-relaxed max-w-3xl">
                      {career.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCareer(selectedCareer?.id === career.id ? null : career)}
                  className="ml-4 p-2 hover:bg-purple-300 rounded-full transition-colors"
                >
                  <ChevronDown className={`w-6 h-6 text-gray-600 transition-transform ${
                    selectedCareer?.id === career.id ? 'rotate-180' : ''
                  }`} />
                </button>
              </div>

              {/* Expanded Details */}
              {selectedCareer?.id === career.id && (
                <div className="mt-8 pt-8 border-t border-purple-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Key Information */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white bg-opacity-60 rounded-lg">
                            <span className="text-gray-600">Education Required</span>
                            <span className="font-semibold text-gray-800">{career.education}</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white bg-opacity-60 rounded-lg">
                            <span className="text-gray-600">Salary Range</span>
                            <span className="font-semibold text-green-600">{career.salary}</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white bg-opacity-60 rounded-lg">
                            <span className="text-gray-600">Market Demand</span>
                            <span className="font-semibold text-blue-600">{career.demand}</span>
                          </div>
                        </div>
                      </div>

                      {/* Skills Required */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Essential Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-purple-300 bg-opacity-60 text-purple-800 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Specializations */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Specializations Available</h4>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {career.specializations.map((spec, index) => (
                            <div key={index} className="flex items-start space-x-2 p-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700 text-sm">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Work Places */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Where You Can Work</h4>
                        <div className="space-y-2">
                          {career.workplaces.map((place, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700 text-sm">{place}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Career Roadmap */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-6">Career Roadmap</h4>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-400"></div>
                      <div className="space-y-6">
                        {career.roadmap.map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-800">{step.stage}</h5>
                              <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pros */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Choose This Career?</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {career.pros.map((pro, index) => (
                        <div key={index} className="flex items-start space-x-2 p-3 bg-green-100 bg-opacity-60 rounded-lg">
                          <span className="text-green-500 font-bold">✓</span>
                          <span className="text-gray-700 text-sm">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Still confused about which career to choose? Take our aptitude quiz or talk to our AI counselor!
          </p>
          <div className="space-x-4">
            <button
              onClick={() => window.location.href = '/aptitude'}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Take Aptitude Quiz
            </button>
            <button
              onClick={() => window.location.href = '/counselor'}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Talk to AI Counselor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerInfo;