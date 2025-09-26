import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Users, TrendingUp, DollarSign, MapPin } from 'lucide-react';

const CareerInfo = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const careers = [
    {
      id: 1,
      title: 'Doctor',
      category: 'medical',
      icon: '👩‍⚕️',
      description: 'A doctor (physician) is a healthcare professional trained to diagnose illnesses, provide treatments, perform surgeries, and guide patients in maintaining good health.',
      education: 'MBBS (5.5 years) + MD/MS (3 years)',
      salary: '₹8-50 LPA',
      demand: 'Very High',
      skills: ['Medical Knowledge', 'Problem Solving', 'Communication', 'Empathy', 'Attention to Detail'],
      specializations: [
        'General Physician',
        'Cardiologist (Heart Specialist)',
        'Pediatrician (Child Specialist)',
        'Cardiologist (Heart Specialist)',
        'Neurologist (Brain Specialist)',
        'Dermatologist (Skin Specialist)',
        'Psychiatrist (Mental Health)',
        'Oncologist (Cancer Specialist)',
        'Gynecologist & Obstetrician',
        'Orthopedic Neurologist, Radiologist, etc.',
        'ENT (Ear, Nose & Throat)',
        'Ophthalmologist (Eye Specialist)',
        'Anesthesiologist',
        'Hospitals (Government & Private)',
        'Private Clinics',
        'Research & Development',
        'Academics/Teaching',
        'Public Health Organizations',
        'Armed Forces Medical Services'
      ],
      workplaces: ['Hospitals', 'Clinics', 'Research Centers', 'Medical Colleges'],
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
      title: 'Software Engineer',
      category: 'technology',
      icon: '💻',
      description: 'A software engineer designs, develops, and maintains software applications and systems using various programming languages and technologies.',
      education: 'B.Tech/BE in CSE/IT (4 years) or BCA/MCA',
      salary: '₹3-25+ LPA',
      demand: 'Extremely High',
      skills: ['Programming', 'Problem Solving', 'Logical Thinking', 'Teamwork', 'Continuous Learning'],
      specializations: [
        'Web Developer (Frontend/Backend)',
        'Mobile App Developer',
        'Data Scientist',
        'AI/ML Engineer',
        'DevOps Engineer',
        'Cybersecurity Specialist',
        'Game Developer',
        'Cloud Engineer',
        'Software Architect'
      ],
      workplaces: ['Tech Companies', 'Startups', 'Consulting Firms', 'Government IT', 'Freelancing'],
      pros: ['High salary potential', 'Remote work opportunities', 'Global job market', 'Continuous innovation'],
      roadmap: [
        { stage: 'Class 12', desc: 'PCM with good marks' },
        { stage: 'Entrance', desc: 'Clear JEE or other engineering exams' },
        { stage: 'B.Tech', desc: '4 years engineering degree' },
        { stage: 'Internships', desc: 'Gain practical experience' },
        { stage: 'Skills', desc: 'Learn relevant technologies' },
        { stage: 'Job', desc: 'Start as software developer' }
      ]
    },
    {
      id: 3,
      title: 'Teacher',
      category: 'education',
      icon: '👨‍🏫',
      description: 'Teachers educate and inspire students, helping them develop knowledge, skills, and character for their future success.',
      education: 'B.Ed (2 years) after graduation + TET/CTET',
      salary: '₹2.5-8 LPA',
      demand: 'High',
      skills: ['Communication', 'Patience', 'Subject Expertise', 'Classroom Management', 'Creativity'],
      specializations: [
        'Primary Teacher (Classes 1-5)',
        'Secondary Teacher (Classes 6-10)',
        'Senior Secondary Teacher (Classes 11-12)',
        'Special Education Teacher',
        'Online/Digital Teacher',
        'Subject Specialist',
        'Principal/Administrator'
      ],
      workplaces: ['Government Schools', 'Private Schools', 'Coaching Institutes', 'Online Platforms'],
      pros: ['Job security', 'Respected profession', 'School holidays', 'Impact on future generations'],
      roadmap: [
        { stage: 'Class 12', desc: 'Any stream with good marks' },
        { stage: 'Graduation', desc: 'Bachelor\'s in subject of choice' },
        { stage: 'B.Ed', desc: '2 years Bachelor of Education' },
        { stage: 'TET/CTET', desc: 'Clear teacher eligibility tests' },
        { stage: 'Teaching', desc: 'Start teaching in schools' },
        { stage: 'Growth', desc: 'Advance to senior positions' }
      ]
    },
    {
      id: 4,
      title: 'Business Manager',
      category: 'business',
      icon: '💼',
      description: 'Business managers plan, coordinate, and oversee business operations to ensure organizational goals are achieved efficiently.',
      education: 'BBA/B.Com + MBA (preferred)',
      salary: '₹4-20+ LPA',
      demand: 'High',
      skills: ['Leadership', 'Strategic Thinking', 'Communication', 'Decision Making', 'Team Management'],
      specializations: [
        'Operations Manager',
        'Sales Manager',
        'Marketing Manager',
        'HR Manager',
        'Project Manager',
        'Finance Manager',
        'Product Manager',
        'Business Analyst'
      ],
      workplaces: ['Corporations', 'Startups', 'Consulting Firms', 'Government Agencies', 'NGOs'],
      pros: ['Leadership opportunities', 'High earning potential', 'Diverse career paths', 'Strategic impact'],
      roadmap: [
        { stage: 'Class 12', desc: 'Commerce/Arts/Science' },
        { stage: 'Graduation', desc: 'BBA/B.Com/Any bachelor\'s' },
        { stage: 'Experience', desc: 'Gain work experience' },
        { stage: 'MBA', desc: 'Master\'s in Business Administration' },
        { stage: 'Management', desc: 'Start as junior manager' },
        { stage: 'Senior Role', desc: 'Advance to senior management' }
      ]
    },
    {
      id: 5,
      title: 'Graphic Designer',
      category: 'creative',
      icon: '🎨',
      description: 'Graphic designers create visual content to communicate messages through typography, imagery, color, and form across various media.',
      education: 'BFA/BDes/Diploma in Graphic Design',
      salary: '₹2-12 LPA',
      demand: 'High',
      skills: ['Creativity', 'Software Proficiency', 'Visual Thinking', 'Attention to Detail', 'Client Communication'],
      specializations: [
        'Brand Identity Designer',
        'Web Designer',
        'UI/UX Designer',
        'Print Designer',
        'Package Designer',
        'Motion Graphics Designer',
        'Digital Marketing Designer'
      ],
      workplaces: ['Design Agencies', 'Advertising Companies', 'In-house Teams', 'Freelancing', 'Startups'],
      pros: ['Creative freedom', 'Diverse projects', 'Remote work options', 'Self-employment opportunities'],
      roadmap: [
        { stage: 'Class 12', desc: 'Any stream, preferably with Arts' },
        { stage: 'Portfolio', desc: 'Build strong design portfolio' },
        { stage: 'Education', desc: 'BFA/BDes/Design course' },
        { stage: 'Skills', desc: 'Master design software' },
        { stage: 'Internship', desc: 'Gain practical experience' },
        { stage: 'Career', desc: 'Work as graphic designer' }
      ]
    },
    {
      id: 6,
      title: 'Civil Engineer',
      category: 'engineering',
      icon: '🏗️',
      description: 'Civil engineers design, build, and maintain infrastructure projects like buildings, roads, bridges, and water systems.',
      education: 'B.Tech/BE in Civil Engineering (4 years)',
      salary: '₹3-15 LPA',
      demand: 'Moderate to High',
      skills: ['Technical Design', 'Project Management', 'Problem Solving', 'Attention to Detail', 'Teamwork'],
      specializations: [
        'Structural Engineer',
        'Transportation Engineer',
        'Water Resources Engineer',
        'Geotechnical Engineer',
        'Construction Manager',
        'Urban Planner',
        'Environmental Engineer'
      ],
      workplaces: ['Construction Companies', 'Government Agencies', 'Consulting Firms', 'Real Estate', 'Infrastructure Projects'],
      pros: ['Nation building contribution', 'Stable career', 'Government job opportunities', 'Diverse specializations'],
      roadmap: [
        { stage: 'Class 12', desc: 'PCM with good marks' },
        { stage: 'Entrance', desc: 'Clear JEE or state engineering exams' },
        { stage: 'B.Tech', desc: '4 years Civil Engineering degree' },
        { stage: 'Internship', desc: 'Gain practical site experience' },
        { stage: 'License', desc: 'Get professional engineering license' },
        { stage: 'Career', desc: 'Work in construction/consulting' }
      ]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Careers' },
    { value: 'medical', label: 'Medical & Healthcare' },
    { value: 'technology', label: 'Technology & IT' },
    { value: 'education', label: 'Education & Training' },
    { value: 'business', label: 'Business & Management' },
    { value: 'creative', label: 'Creative & Design' },
    { value: 'engineering', label: 'Engineering' }
  ];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'Extremely High': return 'text-green-600';
      case 'Very High': return 'text-green-500';
      case 'High': return 'text-yellow-600';
      default: return 'text-orange-600';
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Career Information Hub</h1>
          <p className="text-gray-600">Explore detailed information about various career paths and make informed decisions</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Career Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCareers.map(career => (
            <div
              key={career.id}
              className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-200 hover:shadow-xl transform hover:scale-105 ${
                selectedCareer?.id === career.id ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setSelectedCareer(selectedCareer?.id === career.id ? null : career)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">{career.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{career.title}</h3>
                  <p className="text-sm text-gray-500 capitalize">{career.category}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{career.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Salary Range
                  </span>
                  <span className="text-sm font-semibold text-green-600">{career.salary}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Demand
                  </span>
                  <span className={`text-sm font-semibold ${getDemandColor(career.demand)}`}>
                    {career.demand}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-purple-600 font-medium">
                  {selectedCareer?.id === career.id ? 'Hide Details' : 'View Details'}
                </span>
                {selectedCareer?.id === career.id ? 
                  <ChevronUp className="w-5 h-5 text-purple-600" /> : 
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                }
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Career Information */}
        {selectedCareer && (
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">{selectedCareer.icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{selectedCareer.title}</h2>
                <p className="text-gray-600 capitalize">{selectedCareer.category} Career</p>
              </div>
            </div>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{selectedCareer.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Key Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Education Required</span>
                      <span className="font-semibold text-gray-800">{selectedCareer.education}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Salary Range</span>
                      <span className="font-semibold text-green-600">{selectedCareer.salary}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Market Demand</span>
                      <span className={`font-semibold ${getDemandColor(selectedCareer.demand)}`}>
                        {selectedCareer.demand}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Required */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Work Places */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Where You Can Work</h3>
                  <div className="space-y-2">
                    {selectedCareer.workplaces.map((place, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600">{place}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Specializations Available</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedCareer.specializations.map((spec, index) => (
                    <div key={index} className="flex items-start space-x-2 p-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Roadmap */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Career Roadmap</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-300"></div>
                <div className="space-y-6">
                  {selectedCareer.roadmap.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{step.stage}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pros */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Choose This Career?</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedCareer.pros.map((pro, index) => (
                  <div key={index} className="flex items-start space-x-2 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700 text-sm">{pro}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Still confused about which career to choose? Take our aptitude quiz or talk to our AI counselor!
          </p>
          <div className="space-x-4">
            <button
              onClick={() => window.location.href = '/aptitude'}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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