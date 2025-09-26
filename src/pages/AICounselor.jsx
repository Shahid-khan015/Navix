import { useState, useEffect, useRef } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import MascotAvatar from '../components/MascotAvatar';

const AICounselor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hi! I'm Ms. Suzuka, your AI Career Counselor! 🌟 I'm here to help you discover your perfect career path. What's on your mind today?",
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
    
    if (message.includes('confused') || message.includes('don\'t know') || message.includes('unsure')) {
      return "It's completely normal to feel confused about your career path! Let's break this down together. Have you taken our aptitude quiz yet? It can help identify your strengths and interests. What subjects do you enjoy most in school?";
    }
    
    if (message.includes('engineer') || message.includes('technology') || message.includes('coding')) {
      return "Engineering is a fantastic field with many opportunities! There are various branches like Computer Science, Mechanical, Electrical, Civil, and more. Each has different career paths. What kind of problems do you enjoy solving? Are you more interested in building software, designing machines, or creating infrastructure?";
    }
    
    if (message.includes('doctor') || message.includes('medical') || message.includes('mbbs')) {
      return "Medicine is a noble career path! To become a doctor in India, you'll need to clear NEET and get into a good medical college. The journey is challenging but rewarding. Are you passionate about helping people and comfortable with studying biological sciences? What draws you to medicine?";
    }
    
    if (message.includes('business') || message.includes('entrepreneur') || message.includes('commerce')) {
      return "Business and entrepreneurship offer exciting opportunities! You could pursue BBA, B.Com, or even start your own venture. The key skills include leadership, communication, and strategic thinking. Are you interested in managing teams, starting your own business, or working in corporate environments?";
    }
    
    if (message.includes('arts') || message.includes('creative') || message.includes('design')) {
      return "Creative fields are thriving in today's digital world! You could explore graphic design, digital marketing, content creation, film making, or traditional arts. Many creative careers now combine technology with artistic skills. What type of creative work excites you most?";
    }
    
    if (message.includes('college') || message.includes('admission') || message.includes('entrance')) {
      return "College selection is crucial for your career! Consider factors like course curriculum, placement records, faculty quality, and location. For government colleges, you'll need to clear entrance exams like JEE, NEET, or others based on your field. What stream are you interested in pursuing?";
    }
    
    if (message.includes('scholarship') || message.includes('financial help') || message.includes('money')) {
      return "There are many scholarships available for deserving students! Government scholarships like NSP, merit-based scholarships, and minority scholarships can help. I recommend checking our scholarship finder tool. What's your academic background and family income range?";
    }
    
    if (message.includes('parents') || message.includes('family pressure') || message.includes('expectations')) {
      return "Family expectations can be challenging to navigate. It's important to have open conversations with your parents about your interests and goals. Try to help them understand your perspective while also listening to their concerns. Remember, the best career is one that aligns with both your passion and practical considerations. Would you like tips on how to discuss this with your family?";
    }
    
    // Default responses
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
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
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
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">AI Career Counselor</h1>
          <MascotAvatar size="medium" animate={true} className="mx-auto" />
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-purple-500 text-white'
                    : 'bg-gradient-to-br from-blue-400 to-blue-500 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-purple-200' : 'text-blue-200'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex space-x-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about careers, colleges, or your future plans..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows="1"
              />
              <button
                onClick={toggleVoiceRecognition}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  isListening 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  inputText.trim()
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
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
            className="p-4 bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Career Confusion
          </button>
          <button
            onClick={() => setInputText("Tell me about engineering careers")}
            className="p-4 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Engineering Info
          </button>
          <button
            onClick={() => setInputText("How do I choose the right college?")}
            className="p-4 bg-gradient-to-br from-green-400 to-green-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            College Selection
          </button>
          <button
            onClick={() => setInputText("Tell me about scholarships")}
            className="p-4 bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Scholarships
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICounselor;