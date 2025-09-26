import { useState } from 'react';
import { Calendar, Clock, Bell, BookOpen, Award, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

const Timeline = () => {
  const [selectedPath, setSelectedPath] = useState('engineering');

  const roadmapData = {
    engineering: {
      title: 'BE in I.T',
      college: 'Gov. Engineering College, Modasa',
      description: 'according to you answer have concluded that you like the Technology but less interest in Maths',
      totalFee: '75000 - 90000',
      scholarships: ['MYSY', 'etc'],
      jobSalary: '400K - 600K',
      jobDescription: 'After Completing your BE, you can get the Job in many Big MNC like Infosys, TSC based on your skill expected salary for fresher can be around 400K - 600K',
      path: [
        { id: 'it', label: 'I.T', position: { x: 15, y: 85 }, icon: '🚀' },
        { id: 'be', label: 'BE in I.T', position: { x: 25, y: 50 }, description: 'according to you answer have concluded that you like the Technology but less interest in Maths' },
        { id: 'college', label: 'Gov. Engineering College, Modasa', position: { x: 50, y: 25 }, description: 'Given college is neareset college, you can se more college here → More' },
        { id: 'fee', label: 'Fee', position: { x: 85, y: 45 }, description: 'Total estimated Fee to Complete you diploma can be around 75000 - 90000\nYou laso get the Scholorship like MYSY, etc' },
        { id: 'job', label: 'Job', position: { x: 85, y: 75 }, description: 'After Completing your BE, you can get the Job in many Big MNC like Infosys, TSC based on your skill expected salary for fresher can be around 400K - 600K' }
      ]
    }
  };

  const currentRoadmap = roadmapData[selectedPath];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden">
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
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">{currentRoadmap.college}</h1>
            <p className="text-white opacity-90">
              Given college is neareset<br />
              college, you can se more<br />
              college here → More
            </p>
          </div>

          {/* Roadmap Visualization */}
          <div className="relative w-full h-96 mb-12">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#A78BFA', stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              
              {/* Path connections */}
              <path
                d="M 15% 85% Q 25% 70% 25% 50% Q 30% 35% 50% 25% Q 65% 35% 85% 45% Q 85% 60% 85% 75%"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="8,4"
                className="animate-pulse"
              />
            </svg>

            {/* Roadmap nodes */}
            {currentRoadmap.path.map((node, index) => (
              <div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${node.position.x}%`, 
                  top: `${node.position.y}%`,
                  zIndex: 10
                }}
              >
                <div className="relative">
                  {/* Node circle */}
                  <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    {node.icon ? (
                      <span className="text-2xl">{node.icon}</span>
                    ) : (
                      <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                    )}
                  </div>
                  
                  {/* Node label */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-white bg-opacity-90 rounded-lg px-3 py-2 shadow-lg min-w-max">
                      <h3 className="font-bold text-gray-800 text-sm">{node.label}</h3>
                    </div>
                  </div>

                  {/* Description popup */}
                  {node.description && (
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-64 z-20">
                      <div className="bg-purple-800 text-white rounded-lg p-4 shadow-xl">
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {node.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Course Info */}
            <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{currentRoadmap.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {currentRoadmap.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">4 Year Degree Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Government College</span>
                </div>
              </div>
            </div>

            {/* Fee Information */}
            <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Fee</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Total estimated Fee to Complete you diploma can be around</p>
                  <p className="text-2xl font-bold text-green-600">₹{currentRoadmap.totalFee}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">You also get the Scholarship like</p>
                  <div className="flex flex-wrap gap-2">
                    {currentRoadmap.scholarships.map((scholarship, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {scholarship}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Job Prospects */}
            <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Job</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-purple-600">₹{currentRoadmap.jobSalary}</p>
                  <p className="text-sm text-gray-600">Expected salary for fresher</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {currentRoadmap.jobDescription}
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">High placement rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="space-x-4">
              <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Explore More Colleges
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Apply for Scholarships
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;