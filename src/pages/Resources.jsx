import { useState } from 'react';
import { Download, BookOpen, Search, Filter, Star, Eye, FileText, Video, Link } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Complete Guide to Engineering Careers',
      description: 'Comprehensive guide covering all engineering branches, career prospects, and industry insights.',
      category: 'Engineering',
      type: 'ebook',
      format: 'PDF',
      size: '2.5 MB',
      pages: 150,
      downloads: 1250,
      rating: 4.8,
      author: 'Dr. Rajesh Kumar',
      thumbnail: '📚',
      tags: ['Engineering', 'Career Guide', 'JEE', 'Technology'],
      downloadUrl: '#',
      previewUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'NEET Biology Quick Revision Notes',
      description: 'Essential biology concepts and formulas for NEET preparation with practice questions.',
      category: 'Medical',
      type: 'notes',
      format: 'PDF',
      size: '1.8 MB',
      pages: 85,
      downloads: 980,
      rating: 4.9,
      author: 'Dr. Priya Sharma',
      thumbnail: '🧬',
      tags: ['Biology', 'NEET', 'Medical', 'Quick Revision'],
      downloadUrl: '#',
      previewUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Commerce Stream Career Options',
      description: 'Detailed exploration of career paths in commerce beyond CA, including new-age opportunities.',
      category: 'Commerce',
      type: 'video',
      format: 'MP4',
      size: '45 MB',
      duration: '25 min',
      downloads: 750,
      rating: 4.6,
      author: 'Prof. Anita Verma',
      thumbnail: '💼',
      tags: ['Commerce', 'CA', 'Business', 'Finance'],
      downloadUrl: '#',
      previewUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Arts & Humanities Career Roadmap',
      description: 'Creative career paths, job market insights, and success stories in arts and humanities.',
      category: 'Arts',
      type: 'ebook',
      format: 'PDF',
      size: '3.2 MB',
      pages: 120,
      downloads: 650,
      rating: 4.7,
      author: 'Ms. Kavita Singh',
      thumbnail: '🎨',
      tags: ['Arts', 'Humanities', 'Creative Careers', 'Media'],
      downloadUrl: '#',
      previewUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Scholarship Application Templates',
      description: 'Ready-to-use templates for scholarship applications, essays, and recommendation letters.',
      category: 'Scholarships',
      type: 'template',
      format: 'DOC',
      size: '0.5 MB',
      pages: 25,
      downloads: 2100,
      rating: 4.9,
      author: 'Scholarship Team',
      thumbnail: '📝',
      tags: ['Scholarships', 'Templates', 'Applications', 'Essays'],
      downloadUrl: '#',
      previewUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Interview Preparation Guide',
      description: 'Complete guide for college admissions and job interviews with sample questions and answers.',
      category: 'General',
      type: 'guide',
      format: 'PDF',
      size: '1.9 MB',
      pages: 95,
      downloads: 1400,
      rating: 4.8,
      author: 'Career Counseling Team',
      thumbnail: '🎤',
      tags: ['Interview', 'Admissions', 'Jobs', 'Preparation'],
      downloadUrl: '#',
      previewUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Government College Admission Guide 2024',
      description: 'Complete information about government colleges, admission processes, and cut-off trends.',
      category: 'Admissions',
      type: 'guide',
      format: 'PDF',
      size: '4.1 MB',
      pages: 200,
      downloads: 1800,
      rating: 4.9,
      author: 'Admissions Team',
      thumbnail: '🏛️',
      tags: ['Government Colleges', 'Admissions', 'Cut-offs', 'Process'],
      downloadUrl: '#',
      previewUrl: '#',
      featured: true
    },
    {
      id: 8,
      title: 'Study Abroad Opportunities',
      description: 'Information about international universities, scholarships, and application processes.',
      category: 'Study Abroad',
      type: 'ebook',
      format: 'PDF',
      size: '2.8 MB',
      pages: 110,
      downloads: 520,
      rating: 4.5,
      author: 'International Team',
      thumbnail: '✈️',
      tags: ['Study Abroad', 'International', 'Universities', 'Global'],
      downloadUrl: '#',
      previewUrl: '#',
      featured: false
    }
  ];

  const categories = [
    'all', 'Engineering', 'Medical', 'Commerce', 'Arts', 'Scholarships', 
    'General', 'Admissions', 'Study Abroad'
  ];

  const types = [
    { value: 'all', label: 'All Types', icon: FileText },
    { value: 'ebook', label: 'E-books', icon: BookOpen },
    { value: 'notes', label: 'Notes', icon: FileText },
    { value: 'video', label: 'Videos', icon: Video },
    { value: 'guide', label: 'Guides', icon: BookOpen },
    { value: 'template', label: 'Templates', icon: FileText }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'ebook': return BookOpen;
      case 'video': return Video;
      case 'notes': return FileText;
      case 'guide': return BookOpen;
      case 'template': return FileText;
      default: return FileText;
    }
  };

  const formatSize = (size) => {
    return size;
  };

  const handleDownload = (resource) => {
    // In a real app, this would trigger actual download
    alert(`Downloading: ${resource.title}`);
  };

  const handlePreview = (resource) => {
    // In a real app, this would open preview modal
    alert(`Preview: ${resource.title}`);
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Open Learning Resource Hub</h1>
          <p className="text-gray-600">Free educational resources to support your career journey</p>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            Featured Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map(resource => (
              <div key={resource.id} className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{resource.thumbnail}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
                    <p className="text-sm text-gray-600">{resource.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Download className="w-3 h-3 mr-1" />
                    {resource.downloads} downloads
                  </span>
                  <span className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    {resource.rating}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDownload(resource)}
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handlePreview(resource)}
                    className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources, topics, or keywords..."
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
              <option value="all">All Categories</option>
              {categories.filter(cat => cat !== 'all').map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {types.map(type => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedType === type.value
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">All Resources</h2>
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredResources.length}</span> resources
            </p>
          </div>

          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No resources found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredResources.map(resource => {
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <div key={resource.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{resource.thumbnail}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{resource.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">By {resource.author}</p>
                            <p className="text-gray-700 leading-relaxed">{resource.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-2">
                              {resource.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
                            </div>
                          </div>
                        </div>

                        {/* Resource Details */}
                        <div className="grid md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <TypeIcon className="w-4 h-4" />
                            <span>{resource.format}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <FileText className="w-4 h-4" />
                            <span>{resource.pages ? `${resource.pages} pages` : resource.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Download className="w-4 h-4" />
                            <span>{formatSize(resource.size)}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Eye className="w-4 h-4" />
                            <span>{resource.downloads} downloads</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleDownload(resource)}
                            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </button>
                          <button
                            onClick={() => handlePreview(resource)}
                            className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Preview</span>
                          </button>
                          <button className="px-4 py-2 text-purple-600 hover:text-purple-800 font-medium transition-colors">
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Contribute to Our Resource Library</h2>
          <p className="mb-6">Have valuable resources to share? Help other students by contributing to our open learning platform!</p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Submit Resource
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-200">
              Become Contributor
            </button>
          </div>
        </div>

        {/* Offline Access Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📱 Offline Access Available</h3>
          <p className="text-blue-700 text-sm">
            All downloadable resources can be accessed offline. Perfect for students with limited internet connectivity. 
            Download once and access anytime, anywhere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;