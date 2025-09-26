import { useState, useEffect, useRef } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';

const AICounselor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Which degree is best suited for a career in the computer or technology field?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const recognition = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sample AI responses based on common career counseling topics
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('computer') || message.includes('technology') || message.includes('degree')) {
      return "For a career in the computer or technology field, the best degree depends on your interests and the specific area you want to specialize in. Here's a breakdown of common options:\n\n1. Computer Science (CS)\n2. Information Technology (IT)\n3. Computer Engineering\n\nTip: If you're unsure, Computer Science is the most flexible starting point, and you can specialize later via certifications or graduate studies.";
    }
    
    // Default responses for other queries
    const defaultResponses = [
      "That's an interesting point! Can you tell me more about what specifically interests you about this area?",
      "I understand your concern. Career decisions are important! What aspects of this are making you feel uncertain?",
      "Great question! Let me help you think through this. What are your main goals for your career?",
      "I'd love to help you explore this further. What subjects or activities make you feel most engaged and excited?",
      "That's a valid consideration. Have you thought about what kind of work environment you'd thrive in?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: getAIResponse(inputText),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      if (!isListening) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition.current = new SpeechRecognition();
        recognition.current.continuous = false;
        recognition.current.interimResults = false;
        recognition.current.lang = 'en-IN';

        recognition.current.onstart = () => {
          setIsListening(true);
        };

        recognition.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
        };

        recognition.current.onend = () => {
          setIsListening(false);
        };

        recognition.current.start();
      } else {
        recognition.current?.stop();
        setIsListening(false);
      }
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">AI Career Counselor</h1>
        </div>

        {/* Chat Container */}
        <div className="flex items-start space-x-6">
          {/* Chat Messages */}
          <div className="flex-1 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-lg px-6 py-4 rounded-3xl shadow-lg ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white ml-12'
                    : 'bg-purple-200 bg-opacity-80 text-gray-800 mr-12'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-purple-200 bg-opacity-80 text-gray-800 px-6 py-4 rounded-3xl shadow-lg mr-12">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Character */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 relative">
              {/* Character body */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                {/* Legs */}
                <div className="w-16 h-32 bg-gray-800 rounded-t-full mx-auto mb-2"></div>
                
                {/* Body */}
                <div className="w-24 h-40 bg-gradient-to-b from-blue-400 to-blue-500 rounded-t-3xl mx-auto relative">
                  {/* Collar */}
                  <div className="absolute top-2 left-0 right-0 h-4 bg-white rounded-t-3xl"></div>
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

        {/* Input Area */}
        <div className="mt-8">
          <div className="bg-purple-200 bg-opacity-80 rounded-full p-2 shadow-lg">
            <div className="flex space-x-3 items-center">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none outline-none px-4 py-2 resize-none text-gray-800 placeholder-gray-600"
                rows="1"
              />
              <button
                onClick={toggleVoiceRecognition}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isListening 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className={`p-2 rounded-full transition-all duration-200 ${
                  inputText.trim()
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => setInputText("I'm confused about my career path")}
            className="p-4 bg-purple-200 bg-opacity-80 text-gray-800 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Career Confusion
          </button>
          <button
            onClick={() => setInputText("Tell me about engineering careers")}
            className="p-4 bg-purple-200 bg-opacity-80 text-gray-800 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Engineering Info
          </button>
          <button
            onClick={() => setInputText("How do I choose the right college?")}
            className="p-4 bg-purple-200 bg-opacity-80 text-gray-800 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            College Selection
          </button>
          <button
            onClick={() => setInputText("Tell me about scholarships")}
            className="p-4 bg-purple-200 bg-opacity-80 text-gray-800 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Scholarships
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICounselor;