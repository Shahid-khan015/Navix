import { useState } from 'react';
import MascotAvatar from '../components/MascotAvatar';

const AptitudeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Which subject do you enjoy the most?",
      options: [
        { value: 'science', label: 'Mathematics & Science', stream: 'science' },
        { value: 'bio', label: 'Biology & Social Science', stream: 'bio' },
        { value: 'arts', label: 'Arts, Literature, Music', stream: 'arts' },
        { value: 'commerce', label: 'Business Studies, Economics', stream: 'commerce' }
      ],
      explanation: {
        science: "Logic, experiments, tech & research careers.",
        bio: "Life, society, health & teaching fields.",
        arts: "Creativity, expression, media & arts jobs.",
        commerce: "Trade, finance, management & business roles."
      }
    },
    {
      id: 2,
      question: "What type of activities excite you the most?",
      options: [
        { value: 'problem-solving', label: 'Solving complex problems and puzzles', stream: 'science' },
        { value: 'helping', label: 'Helping people and making a difference', stream: 'bio' },
        { value: 'creating', label: 'Creating art, music, or writing', stream: 'arts' },
        { value: 'organizing', label: 'Organizing events and managing teams', stream: 'commerce' }
      ]
    },
    {
      id: 3,
      question: "Which work environment appeals to you?",
      options: [
        { value: 'lab', label: 'Laboratory or Research facility', stream: 'science' },
        { value: 'community', label: 'Hospitals, schools, or community centers', stream: 'bio' },
        { value: 'studio', label: 'Creative studios or flexible workspaces', stream: 'arts' },
        { value: 'office', label: 'Corporate offices or business settings', stream: 'commerce' }
      ]
    },
    {
      id: 4,
      question: "What motivates you the most?",
      options: [
        { value: 'innovation', label: 'Discovering new things and innovation', stream: 'science' },
        { value: 'impact', label: 'Making a positive impact on society', stream: 'bio' },
        { value: 'expression', label: 'Self-expression and creativity', stream: 'arts' },
        { value: 'success', label: 'Financial success and leadership', stream: 'commerce' }
      ]
    },
    {
      id: 5,
      question: "Which skill comes naturally to you?",
      options: [
        { value: 'analytical', label: 'Analytical and logical thinking', stream: 'science' },
        { value: 'empathy', label: 'Understanding and helping others', stream: 'bio' },
        { value: 'creative', label: 'Creative and artistic abilities', stream: 'arts' },
        { value: 'leadership', label: 'Leadership and communication', stream: 'commerce' }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const streamCounts = {};
    Object.values(answers).forEach(answer => {
      const stream = answer.stream;
      streamCounts[stream] = (streamCounts[stream] || 0) + 1;
    });

    const recommendedStream = Object.keys(streamCounts).reduce((a, b) => 
      streamCounts[a] > streamCounts[b] ? a : b
    );

    const streamDetails = {
      science: {
        name: 'Science & Technology',
        careers: ['Engineer', 'Doctor', 'Scientist', 'Data Analyst', 'Architect'],
        description: 'You have strong analytical and problem-solving skills, perfect for STEM careers.',
        color: 'from-blue-500 to-blue-600'
      },
      bio: {
        name: 'Medical & Life Sciences',
        careers: ['Doctor', 'Nurse', 'Psychologist', 'Teacher', 'Social Worker'],
        description: 'You show great empathy and desire to help others, ideal for healthcare and education.',
        color: 'from-green-500 to-green-600'
      },
      arts: {
        name: 'Arts & Humanities',
        careers: ['Designer', 'Writer', 'Artist', 'Journalist', 'Film Maker'],
        description: 'Your creativity and artistic vision make you perfect for creative industries.',
        color: 'from-pink-500 to-pink-600'
      },
      commerce: {
        name: 'Business & Commerce',
        careers: ['Manager', 'Entrepreneur', 'Accountant', 'Marketing Executive', 'Banker'],
        description: 'Your leadership skills and business acumen are perfect for corporate success.',
        color: 'from-purple-500 to-purple-600'
      }
    };

    setResults({
      recommended: recommendedStream,
      details: streamDetails[recommendedStream],
      scores: streamCounts
    });
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResults(null);
  };

  if (showResults) {
    return (
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Career Assessment Results</h1>
            <MascotAvatar size="medium" className="mx-auto mb-4" />
          </div>

          <div className={`bg-gradient-to-br ${results.details.color} rounded-2xl p-8 text-white mb-8 shadow-xl`}>
            <h2 className="text-2xl font-bold mb-4">Recommended Stream: {results.details.name}</h2>
            <p className="text-lg mb-6">{results.details.description}</p>
            
            <div className="bg-white bg-opacity-20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Top Career Options for You:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {results.details.careers.map((career, index) => (
                  <div key={index} className="bg-white bg-opacity-30 rounded-lg px-3 py-2 text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Your Interest Distribution</h3>
            <div className="space-y-4">
              {Object.entries(results.scores).map(([stream, score]) => {
                const percentage = (score / questions.length) * 100;
                const streamNames = {
                  science: 'Science & Technology',
                  bio: 'Medical & Life Sciences',
                  arts: 'Arts & Humanities',
                  commerce: 'Business & Commerce'
                };
                return (
                  <div key={stream} className="flex items-center space-x-4">
                    <div className="w-32 text-sm font-medium text-gray-700">
                      {streamNames[stream]}
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-purple-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm text-gray-600">{percentage}%</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center space-y-4">
            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mr-4"
            >
              Retake Quiz
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
    );
  }

  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Career Aptitude Assessment</h1>
          <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-blue-300 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {question.id}. {question.question}
          </h2>

          <div className="space-y-4 mb-8">
            {question.options.map((option) => (
              <label 
                key={option.value}
                className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  currentAnswer?.value === option.value
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.value}
                  checked={currentAnswer?.value === option.value}
                  onChange={() => handleAnswer(question.id, option)}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    currentAnswer?.value === option.value
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-300'
                  }`}>
                    {currentAnswer?.value === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="text-gray-700 font-medium">{option.label}</span>
                </div>
              </label>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                currentAnswer
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next →'}
            </button>
          </div>
        </div>

        {question.explanation && currentAnswer && (
          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
            <h3 className="font-semibold text-blue-800 mb-2">Explanation:</h3>
            <p className="text-blue-700">
              {question.explanation[currentAnswer.value] || 
               "This choice reflects your interest in this particular field."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AptitudeQuiz;