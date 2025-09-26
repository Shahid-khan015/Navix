import { useState } from 'react';
import { Send, Users, MessageCircle, Search, Filter, MapPin, BookOpen, Star } from 'lucide-react';

const PeerConnect = () => {
  const [activeTab, setActiveTab] = useState('forum');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newMessage, setNewMessage] = useState('');
  const [selectedPeer, setSelectedPeer] = useState(null);

  const forumPosts = [
    {
      id: 1,
      title: 'Life at IIT Bombay - Computer Science',
      author: 'Arjun Sharma',
      college: 'IIT Bombay',
      course: 'B.Tech CSE',
      year: '3rd Year',
      category: 'college-life',
      timestamp: '2 hours ago',
      replies: 15,
      likes: 23,
      preview: 'Hey everyone! Thought I\'d share my experience at IIT Bombay for those considering CS here...',
      avatar: '👨‍💻'
    },
    {
      id: 2,
      title: 'NEET Preparation Tips - From Someone Who Made It',
      author: 'Priya Patel',
      college: 'AIIMS Delhi',
      course: 'MBBS',
      year: '2nd Year',
      category: 'preparation',
      timestamp: '5 hours ago',
      replies: 28,
      likes: 45,
      preview: 'After cracking NEET and getting into AIIMS, here are my top tips for preparation...',
      avatar: '👩‍⚕️'
    },
    {
      id: 3,
      title: 'Commerce Stream - Career Options Beyond CA',
      author: 'Rahul Gupta',
      college: 'LSR College',
      course: 'B.Com Hons',
      year: '3rd Year',
      category: 'career-advice',
      timestamp: '1 day ago',
      replies: 12,
      likes: 18,
      preview: 'Many think CA is the only option after commerce. Let me share other amazing careers...',
      avatar: '👨‍💼'
    },
    {
      id: 4,
      title: 'Hostel Life and Campus Facilities at JMI',
      author: 'Fatima Khan',
      college: 'Jamia Millia Islamia',
      course: 'B.A. English',
      year: '2nd Year',
      category: 'college-life',
      timestamp: '2 days ago',
      replies: 8,
      likes: 12,
      preview: 'Sharing my experience about hostel life, mess food, and campus facilities at JMI...',
      avatar: '👩‍🎓'
    }
  ];

  const peers = [
    {
      id: 1,
      name: 'Arjun Sharma',
      college: 'IIT Bombay',
      course: 'B.Tech Computer Science',
      year: '3rd Year',
      location: 'Mumbai, Maharashtra',
      bio: 'Passionate about AI and Machine Learning. Happy to help with engineering queries!',
      interests: ['Programming', 'AI/ML', 'Competitive Coding'],
      avatar: '👨‍💻',
      rating: 4.8,
      helpedStudents: 45,
      online: true
    },
    {
      id: 2,
      name: 'Priya Patel',
      college: 'AIIMS Delhi',
      course: 'MBBS',
      year: '2nd Year',
      location: 'New Delhi',
      bio: 'Medical student who loves helping aspiring doctors navigate their journey.',
      interests: ['Medicine', 'NEET Prep', 'Healthcare'],
      avatar: '👩‍⚕️',
      rating: 4.9,
      helpedStudents: 32,
      online: false
    },
    {
      id: 3,
      name: 'Rahul Gupta',
      college: 'Lady Shri Ram College',
      course: 'B.Com Honours',
      year: '3rd Year',
      location: 'New Delhi',
      bio: 'Commerce student exploring various career paths. Can help with business studies queries.',
      interests: ['Finance', 'Business', 'Entrepreneurship'],
      avatar: '👨‍💼',
      rating: 4.7,
      helpedStudents: 28,
      online: true
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      college: 'National Institute of Design',
      course: 'B.Des Product Design',
      year: '4th Year',
      location: 'Ahmedabad, Gujarat',
      bio: 'Design student passionate about creative problem solving and innovation.',
      interests: ['Design', 'Art', 'Innovation'],
      avatar: '👩‍🎨',
      rating: 4.6,
      helpedStudents: 22,
      online: true
    }
  ];

  const chatMessages = [
    {
      id: 1,
      sender: 'peer',
      name: 'Arjun Sharma',
      message: 'Hi! I saw your question about computer science at IIT. Happy to help!',
      timestamp: '10:30 AM',
      avatar: '👨‍💻'
    },
    {
      id: 2,
      sender: 'user',
      message: 'Thank you so much! I wanted to know about the coding culture and placement opportunities.',
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      sender: 'peer',
      name: 'Arjun Sharma',
      message: 'The coding culture here is amazing! We have active competitive programming clubs, hackathons every month, and seniors are always ready to help. For placements, companies like Google, Microsoft, Amazon regularly visit campus.',
      timestamp: '10:35 AM',
      avatar: '👨‍💻'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Topics' },
    { value: 'college-life', label: 'College Life' },
    { value: 'career-advice', label: 'Career Advice' },
    { value: 'preparation', label: 'Exam Preparation' },
    { value: 'placements', label: 'Placements' },
    { value: 'courses', label: 'Course Selection' }
  ];

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredPeers = peers.filter(peer => {
    const matchesSearch = peer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         peer.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         peer.course.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'college-life': 'bg-blue-100 text-blue-800',
      'career-advice': 'bg-green-100 text-green-800',
      'preparation': 'bg-purple-100 text-purple-800',
      'placements': 'bg-orange-100 text-orange-800',
      'courses': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Campus Clarity - Peer Connect</h1>
          <p className="text-gray-600">Connect with current students, ask questions, and get real insights about college life</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('forum')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'forum'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Discussion Forum
            </button>
            <button
              onClick={() => setActiveTab('peers')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'peers'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              Find Peers
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === 'chat'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Send className="w-5 h-5 inline mr-2" />
              Chat
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'forum' && (
          <div>
            {/* Search and Filter */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
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
                    <option key={category.value} value={category.value}>{category.label}</option>
                  ))}
                </select>
              </div>
              
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start New Discussion
              </button>
            </div>

            {/* Forum Posts */}
            <div className="space-y-6">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{post.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">{post.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{post.college}</span>
                            <span>•</span>
                            <span>{post.course} - {post.year}</span>
                            <span>•</span>
                            <span>{post.timestamp}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{post.preview}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{post.likes} likes</span>
                        </div>
                        <button className="text-purple-600 hover:text-purple-800 font-medium">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'peers' && (
          <div>
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search peers by name, college, course..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Peer Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPeers.map(peer => (
                <div key={peer.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="text-4xl">{peer.avatar}</div>
                      {peer.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{peer.name}</h3>
                          <p className="text-sm text-gray-600">{peer.course} - {peer.year}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-semibold text-gray-700">{peer.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <BookOpen className="w-4 h-4" />
                          <span>{peer.college}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{peer.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>Helped {peer.helpedStudents} students</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-4">{peer.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {peer.interests.map((interest, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                            {interest}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <button
                          onClick={() => setSelectedPeer(peer)}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          Start Chat
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {selectedPeer ? (
              <div>
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{selectedPeer.avatar}</div>
                    <div>
                      <h3 className="font-semibold">{selectedPeer.name}</h3>
                      <p className="text-sm opacity-90">{selectedPeer.college} • {selectedPeer.course}</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-6 space-y-4">
                  {chatMessages.map(message => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <button
                      onClick={sendMessage}
                      className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a peer to start chatting</h3>
                <p className="text-gray-500">Go to "Find Peers" tab to connect with students from different colleges</p>
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Connect?</h3>
          <p className="text-gray-600 mb-6">
            Join thousands of students helping each other make informed career decisions!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeerConnect;