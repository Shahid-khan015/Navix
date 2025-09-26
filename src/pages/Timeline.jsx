import { useState } from 'react';
import { Calendar, Clock, Bell, BookOpen, Award, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

const Timeline = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [filter, setFilter] = useState('all');

  const timelineEvents = [
    // January 2024
    {
      id: 1,
      title: 'JEE Main Session 1 Registration',
      description: 'Registration for JEE Main Session 1 begins',
      date: '2024-01-15',
      endDate: '2024-02-15',
      type: 'exam',
      category: 'Engineering',
      importance: 'high',
      status: 'upcoming',
      location: 'Online',
      website: 'https://jeemain.nta.nic.in'
    },
    {
      id: 2,
      title: 'NSP Scholarship Applications Open',
      description: 'National Scholarship Portal opens for fresh applications',
      date: '2024-01-10',
      endDate: '2024-03-31',
      type: 'scholarship',
      category: 'Financial Aid',
      importance: 'high',
      status: 'active',
      location: 'Online',
      website: 'https://scholarships.gov.in'
    },
    
    // February 2024
    {
      id: 3,
      title: 'Gujarat Board (GSEB) Exam Forms',
      description: 'GSEB Class 12 examination form submission deadline',
      date: '2024-02-28',
      type: 'exam',
      category: 'Board Exams',
      importance: 'high',
      status: 'upcoming',
      location: 'Gujarat',
      website: 'https://gseb.org'
    },
    
    // March 2024
    {
      id: 4,
      title: 'NEET Registration Opens',
      description: 'NEET 2024 registration begins for medical aspirants',
      date: '2024-03-01',
      endDate: '2024-03-31',
      type: 'exam',
      category: 'Medical',
      importance: 'high',
      status: 'upcoming',
      location: 'Online',
      website: 'https://neet.nta.nic.in'
    },
    {
      id: 5,
      title: 'Board Exam Season Begins',
      description: 'CBSE and State Board exams commence across India',
      date: '2024-03-15',
      endDate: '2024-04-30',
      type: 'exam',
      category: 'Board Exams',
      importance: 'high',
      status: 'upcoming',
      location: 'Pan India',
      website: 'https://cbse.gov.in'
    },
    
    // April 2024
    {
      id: 6,
      title: 'JEE Main Session 1 Exam',
      description: 'JEE Main Session 1 examination dates',
      date: '2024-04-06',
      endDate: '2024-04-20',
      type: 'exam',
      category: 'Engineering',
      importance: 'high',
      status: 'upcoming',
      location: 'Various Centers',
      website: 'https://jeemain.nta.nic.in'
    },
    {
      id: 7,
      title: 'CLAT Registration Deadline',
      description: 'Last date for CLAT (Common Law Admission Test) registration',
      date: '2024-04-30',
      type: 'exam',
      category: 'Law',
      importance: 'medium',
      status: 'upcoming',
      location: 'Online',
      website: 'https://consortiumofnlus.ac.in'
    },
    
    // May 2024
    {
      id: 8,
      title: 'NEET Examination',
      description: 'National Eligibility cum Entrance Test for medical courses',
      date: '2024-05-05',
      type: 'exam',
      category: 'Medical',
      importance: 'high',
      status: 'upcoming',
      location: 'Various Centers',
      website: 'https://neet.nta.nic.in'
    },
    {
      id: 9,
      title: 'CLAT Examination',
      description: 'Common Law Admission Test for law courses',
      date: '2024-05-12',
      type: 'exam',
      category: 'Law',
      importance: 'medium',
      status: 'upcoming',
      location: 'Various Centers',
      website: 'https://consortiumofnlus.ac.in'
    },
    
    // June 2024
    {
      id: 10,
      title: 'JEE Advanced Registration',
      description: 'Registration for JEE Advanced (for IIT admission)',
      date: '2024-06-01',
      endDate: '2024-06-15',
      type: 'exam',
      category: 'Engineering',
      importance: 'high',
      status: 'upcoming',
      location: 'Online',
      website: 'https://jeeadv.ac.in'
    },
    {
      id: 11,
      title: 'NEET Result Declaration',
      description: 'NEET 2024 results announced',
      date: '2024-06-20',
      type: 'result',
      category: 'Medical',
      importance: 'high',
      status: 'upcoming',
      location: 'Online',
      website: 'https://neet.nta.nic.in'
    },
    
    // July 2024
    {
      id: 12,
      title: 'JEE Advanced Exam',
      description: 'JEE Advanced examination for IIT admission',
      date: '2024-07-07',
      type: 'exam',
      category: 'Engineering',
      importance: 'high',
      status: 'upcoming',
      location: 'Various Centers',
      website: 'https://jeeadv.ac.in'
    },
    {
      id: 13,
      title: 'NEET Counselling Round 1',
      description: 'First round of NEET counselling begins',
      date: '2024-07-15',
      endDate: '2024-07-30',
      type: 'counselling',
      category: 'Medical',
      importance: 'high',
      status: 'upcoming',
      location: 'Online',
      website: 'https://mcc.nic.in'
    }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categories = [
    'all', 'Engineering', 'Medical', 'Board Exams', 'Law', 'Commerce', 'Financial Aid'
  ];

  const eventTypes = [
    { value: 'all', label: 'All Events', icon: Calendar },
    { value: 'exam', label: 'Exams', icon: BookOpen },
    { value: 'scholarship', label: 'Scholarships', icon: Award },
    { value: 'result', label: 'Results', icon: CheckCircle },
    { value: 'counselling', label: 'Counselling', icon: MapPin }
  ];

  const getFilteredEvents = () => {
    return timelineEvents.filter(event => {
      const eventDate = new Date(event.date);
      const matchesMonth = eventDate.getMonth() === selectedMonth;
      const matchesYear = eventDate.getFullYear() === selectedYear;
      const matchesFilter = filter === 'all' || event.type === filter;
      
      return matchesMonth && matchesYear && matchesFilter;
    });
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'exam': return BookOpen;
      case 'scholarship': return Award;
      case 'result': return CheckCircle;
      case 'counselling': return MapPin;
      default: return Calendar;
    }
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'high': return 'border-red-400 bg-red-50 text-red-800';
      case 'medium': return 'border-yellow-400 bg-yellow-50 text-yellow-800';
      case 'low': return 'border-blue-400 bg-blue-50 text-blue-800';
      default: return 'border-gray-400 bg-gray-50 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getDaysUntil = (dateString) => {
    const today = new Date();
    const eventDate = new Date(dateString);
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Past event';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days left`;
  };

  const upcomingEvents = timelineEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Academic Timeline Tracker</h1>
          <p className="text-gray-600">Never miss important dates for exams, scholarships, and admissions</p>
        </div>

        {/* Quick Alerts */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Upcoming Important Events</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.slice(0, 3).map(event => (
              <div key={event.id} className="bg-white bg-opacity-20 rounded-xl p-4">
                <h3 className="font-semibold mb-1">{event.title}</h3>
                <p className="text-sm mb-2">{formatDate(event.date)}</p>
                <p className="text-xs">{getDaysUntil(event.date)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          >
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          >
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
          </select>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          >
            {eventTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        {/* Event Type Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {eventTypes.map(type => {
            const IconComponent = type.icon;
            return (
              <button
                key={type.value}
                onClick={() => setFilter(type.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === type.value
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {months[selectedMonth]} {selectedYear}
          </h2>

          {getFilteredEvents().length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No events found</h3>
              <p className="text-gray-400">Try selecting a different month or filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {getFilteredEvents()
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map(event => {
                  const IconComponent = getEventIcon(event.type);
                  return (
                    <div
                      key={event.id}
                      className={`border-l-4 ${getImportanceColor(event.importance)} rounded-r-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-white p-3 rounded-full shadow-md">
                          <IconComponent className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800 mb-1">{event.title}</h3>
                              <p className="text-gray-600 mb-2">{event.description}</p>
                            </div>
                            <div className="text-right">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                                {event.status}
                              </span>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {formatDate(event.date)}
                                {event.endDate && ` - ${formatDate(event.endDate)}`}
                              </span>
                            </div>
                            
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{getDaysUntil(event.date)}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <BookOpen className="w-4 h-4" />
                              <span>{event.category}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>

                          <div className="flex space-x-3">
                            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                              <Bell className="w-4 h-4 inline mr-2" />
                              Set Reminder
                            </button>
                            {event.website && (
                              <a
                                href={event.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                Official Website
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        {/* Notification Settings */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Notification Preferences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Reminders For:</h3>
              <div className="space-y-3">
                {['Exam Registration', 'Application Deadlines', 'Exam Dates', 'Result Announcements', 'Counselling Dates'].map((item, index) => (
                  <label key={index} className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" defaultChecked />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Timing:</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" defaultChecked />
                  <span className="text-gray-700">1 week before</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" defaultChecked />
                  <span className="text-gray-700">3 days before</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" defaultChecked />
                  <span className="text-gray-700">1 day before</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Save Preferences
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Organized, Stay Ahead!</h3>
          <p className="text-gray-600 mb-6">
            Enable notifications and never miss important academic deadlines again.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Enable Push Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;