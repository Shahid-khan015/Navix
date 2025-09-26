import { useState } from 'react';
import { Search, Calendar, DollarSign, Users, BookOpen, Award, ExternalLink, Filter } from 'lucide-react';

const CompetitiveExam = () => {
  const [activeTab, setActiveTab] = useState('scholarships');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEligibility, setSelectedEligibility] = useState('all');

  const scholarships = [
    {
      id: 1,
      name: 'Mukhyamantri Yuva Swavalamban Yojana (MYSY)',
      type: 'State Government',
      category: 'Education',
      amount: '₹1,00,000 - ₹2,00,000',
      eligibility: 'Class 10/12 passed students from Gujarat',
      deadline: '31st March 2024',
      status: 'Active',
      description: 'Financial assistance for higher education to economically weaker students in Gujarat.',
      criteria: [
        'Family income less than ₹6,00,000 per annum',
        'Domicile of Gujarat',
        'Minimum 60% marks in qualifying exam'
      ],
      benefits: [
        'Tuition fee assistance',
        'Hostel accommodation support',
        'Book allowance',
        'Maintenance allowance'
      ],
      applicationLink: 'https://mysy.gujarat.gov.in'
    },
    {
      id: 2,
      name: 'National Scholarship Portal (NSP)',
      type: 'Central Government',
      category: 'Education',
      amount: '₹10,000 - ₹2,00,000',
      eligibility: 'Students from various categories',
      deadline: '31st December 2024',
      status: 'Active',
      description: 'One-stop solution for scholarship applications covering pre-matric to post-graduate levels.',
      criteria: [
        'Merit-based selection',
        'Family income criteria varies by scheme',
        'Category-specific requirements (SC/ST/OBC/Minority)'
      ],
      benefits: [
        'Educational allowance',
        'Maintenance allowance',
        'Book and stationery allowance',
        'Thesis typing/printing charges'
      ],
      applicationLink: 'https://scholarships.gov.in'
    },
    {
      id: 3,
      name: 'Maulana Azad National Fellowship',
      type: 'Central Government',
      category: 'Research',
      amount: '₹25,000 - ₹28,000 per month',
      eligibility: 'Minority community students for research',
      deadline: '31st December 2024',
      status: 'Active',
      description: 'Fellowship for students from minority communities pursuing M.Phil/Ph.D in universities/institutions.',
      criteria: [
        'Students from minority communities',
        'Pursuing M.Phil/Ph.D',
        'Valid CSIR-NET/UGC-NET/GATE qualification'
      ],
      benefits: [
        'Monthly fellowship',
        'Contingency allowance',
        'HRA (where applicable)',
        'Research grant'
      ],
      applicationLink: 'https://www.ugc.ac.in'
    },
    {
      id: 4,
      name: 'INSPIRE Scholarship',
      type: 'Central Government',
      category: 'Science',
      amount: '₹80,000 per year',
      eligibility: 'Top 1% students in Class 12 (Science)',
      deadline: '31st July 2024',
      status: 'Active',
      description: 'Scholarship to attract talented students to pursue higher education in natural and basic sciences.',
      criteria: [
        'Top 1% in Class 12 board examinations',
        'Pursuing B.Sc./B.S./Int. M.Sc. in natural sciences',
        'Age limit: 17-22 years'
      ],
      benefits: [
        'Annual scholarship of ₹80,000',
        'Mentorship support',
        'Research exposure',
        'Summer attachment program'
      ],
      applicationLink: 'https://inspire-dst.gov.in'
    }
  ];

  const exams = [
    {
      id: 1,
      name: 'JEE Main',
      fullName: 'Joint Entrance Examination Main',
      type: 'Engineering',
      conductedBy: 'NTA',
      frequency: 'Twice a year',
      eligibility: 'Class 12 passed with PCM',
      examDate: 'January & April 2024',
      applicationDeadline: 'December 2023 & March 2024',
      syllabus: ['Physics', 'Chemistry', 'Mathematics'],
      pattern: 'Computer Based Test (CBT)',
      duration: '3 hours',
      colleges: ['NITs', 'IIITs', 'Other Central/State Engineering Colleges'],
      preparationTime: '2 years',
      difficulty: 'Moderate to High',
      applicationFee: '₹650 - ₹3,000',
      description: 'National level engineering entrance exam for admission to undergraduate programs.',
      tips: [
        'Strong foundation in PCM',
        'Regular practice of numerical problems',
        'Time management skills',
        'Mock tests and previous year papers'
      ]
    },
    {
      id: 2,
      name: 'NEET',
      fullName: 'National Eligibility cum Entrance Test',
      type: 'Medical',
      conductedBy: 'NTA',
      frequency: 'Once a year',
      eligibility: 'Class 12 passed with PCB',
      examDate: 'May 2024',
      applicationDeadline: 'March 2024',
      syllabus: ['Physics', 'Chemistry', 'Biology'],
      pattern: 'Pen and Paper Based Test',
      duration: '3 hours',
      colleges: ['AIIMS', 'Government Medical Colleges', 'Private Medical Colleges'],
      preparationTime: '2 years',
      difficulty: 'High',
      applicationFee: '₹1,600 - ₹8,000',
      description: 'Single entrance exam for admission to undergraduate medical courses across India.',
      tips: [
        'Thorough understanding of NCERT',
        'Focus on Biology and Chemistry',
        'Regular revision and practice',
        'Stay updated with current medical developments'
      ]
    },
    {
      id: 3,
      name: 'CAT',
      fullName: 'Common Admission Test',
      type: 'Management',
      conductedBy: 'IIMs',
      frequency: 'Once a year',
      eligibility: 'Graduate in any discipline',
      examDate: 'November 2024',
      applicationDeadline: 'September 2024',
      syllabus: ['Quantitative Ability', 'Verbal Ability', 'Data Interpretation'],
      pattern: 'Computer Based Test (CBT)',
      duration: '2 hours',
      colleges: ['IIMs', 'Top B-Schools across India'],
      preparationTime: '1-2 years',
      difficulty: 'High',
      applicationFee: '₹2,300',
      description: 'Premier entrance exam for admission to MBA programs in IIMs and other top B-schools.',
      tips: [
        'Strong fundamentals in quant and English',
        'Regular reading habit',
        'Mock tests and time management',
        'Stay updated with current affairs'
      ]
    },
    {
      id: 4,
      name: 'CLAT',
      fullName: 'Common Law Admission Test',
      type: 'Law',
      conductedBy: 'NLU',
      frequency: 'Once a year',
      eligibility: 'Class 12 passed (any stream)',
      examDate: 'May 2024',
      applicationDeadline: 'March 2024',
      syllabus: ['Legal Reasoning', 'Logical Reasoning', 'English', 'General Knowledge', 'Mathematics'],
      pattern: 'Computer Based Test (CBT)',
      duration: '2 hours',
      colleges: ['22 National Law Universities'],
      preparationTime: '1-2 years',
      difficulty: 'Moderate to High',
      applicationFee: '₹4,000',
      description: 'National level law entrance exam for admission to 5-year integrated law programs.',
      tips: [
        'Strong command over English',
        'Stay updated with current affairs',
        'Practice legal reasoning regularly',
        'Read newspapers and legal articles'
      ]
    }
  ];

  const getFilteredData = () => {
    const data = activeTab === 'scholarships' ? scholarships : exams;
    return data.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                              (activeTab === 'scholarships' ? item.category : item.type).toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  };

  const categories = activeTab === 'scholarships' 
    ? ['all', 'Education', 'Research', 'Science', 'Arts']
    : ['all', 'Engineering', 'Medical', 'Management', 'Law', 'Science'];

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Scholarships & Competitive Exams</h1>
          <p className="text-gray-600">Discover funding opportunities and entrance exams to advance your education</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('scholarships')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'scholarships'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Award className="w-5 h-5 inline mr-2" />
              Scholarships
            </button>
            <button
              onClick={() => setActiveTab('exams')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'exams'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <BookOpen className="w-5 h-5 inline mr-2" />
              Competitive Exams
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? `All ${activeTab}` : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {getFilteredData().map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
              {activeTab === 'scholarships' ? (
                // Scholarship Card
                <div>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center">
                              <Award className="w-4 h-4 mr-1" />
                              {item.type}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {item.status}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              Deadline: {item.deadline}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-800">Amount</span>
                          </div>
                          <p className="text-sm text-green-800 font-semibold">{item.amount}</p>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-800">Category</span>
                          </div>
                          <p className="text-sm text-blue-800 font-semibold">{item.category}</p>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <BookOpen className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-gray-800">Eligibility</span>
                          </div>
                          <p className="text-sm text-purple-800 font-semibold">{item.eligibility}</p>
                        </div>
                      </div>

                      {/* Detailed Info */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Eligibility Criteria</h4>
                          <ul className="space-y-2">
                            {item.criteria.map((criterion, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-700 text-sm">{criterion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {item.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-700 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex space-x-4">
                        <a
                          href={item.applicationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                        >
                          Apply Now <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Exam Card
                <div>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-lg text-gray-600 mb-2">{item.fullName}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {item.type}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {item.conductedBy}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {item.frequency}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-800">Exam Date</span>
                          </div>
                          <p className="text-sm text-blue-800 font-semibold">{item.examDate}</p>
                        </div>
                        
                        <div className="bg-red-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-gray-800">Deadline</span>
                          </div>
                          <p className="text-sm text-red-800 font-semibold">{item.applicationDeadline}</p>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-800">Fee</span>
                          </div>
                          <p className="text-sm text-green-800 font-semibold">{item.applicationFee}</p>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-1">
                            <BookOpen className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-gray-800">Duration</span>
                          </div>
                          <p className="text-sm text-purple-800 font-semibold">{item.duration}</p>
                        </div>
                      </div>

                      {/* Detailed Info */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Exam Details</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Pattern:</span>
                                <span className="font-medium">{item.pattern}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Eligibility:</span>
                                <span className="font-medium">{item.eligibility}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Difficulty:</span>
                                <span className="font-medium">{item.difficulty}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Preparation Time:</span>
                                <span className="font-medium">{item.preparationTime}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Syllabus</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.syllabus.map((subject, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Colleges/Institutions</h4>
                            <ul className="space-y-2">
                              {item.colleges.map((college, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-700 text-sm">{college}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Preparation Tips</h4>
                            <ul className="space-y-2">
                              {item.tips.map((tip, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-gray-700 text-sm">{tip}</span>
                                </li>
                              ))}
                            </ul>
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

        {/* Empty State */}
        {getFilteredData().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">No {activeTab} found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Personalized Guidance?</h3>
          <p className="text-gray-600 mb-6">
            Our AI counselor can help you find the right scholarships and exams based on your profile!
          </p>
          <button
            onClick={() => window.location.href = '/counselor'}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Talk to AI Counselor
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveExam;