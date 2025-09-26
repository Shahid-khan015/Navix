import { useState, useEffect } from 'react';
import { Play, Trophy, Star, Clock, ArrowRight, RotateCcw } from 'lucide-react';
import MascotAvatar from '../components/MascotAvatar';

const GameZone = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameState, setGameState] = useState('menu'); // menu, playing, results
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answers, setAnswers] = useState({});

  const games = [
    {
      id: 1,
      title: 'Career Discovery Quiz',
      description: 'Test your knowledge about different careers and discover new opportunities!',
      icon: '🎯',
      difficulty: 'Easy',
      time: '5 min',
      points: '50-100',
      category: 'Knowledge'
    },
    {
      id: 2,
      title: 'Skill Matcher',
      description: 'Match skills with careers in this fun puzzle game!',
      icon: '🧩',
      difficulty: 'Medium',
      time: '10 min',
      points: '100-200',
      category: 'Puzzle'
    },
    {
      id: 3,
      title: 'Future Predictor',
      description: 'Make career choices and see where they lead in this simulation game!',
      icon: '🔮',
      difficulty: 'Hard',
      time: '15 min',
      points: '200-300',
      category: 'Simulation'
    },
    {
      id: 4,
      title: 'College Rush',
      description: 'Race against time to match colleges with their famous courses!',
      icon: '🏫',
      difficulty: 'Medium',
      time: '8 min',
      points: '75-150',
      category: 'Speed'
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Which career involves designing and building software applications?",
      options: ["Doctor", "Software Engineer", "Teacher", "Lawyer"],
      correct: 1,
      explanation: "Software Engineers design, develop, and maintain software applications and systems."
    },
    {
      id: 2,
      question: "What is the primary entrance exam for medical colleges in India?",
      options: ["JEE", "NEET", "CAT", "CLAT"],
      correct: 1,
      explanation: "NEET (National Eligibility cum Entrance Test) is the primary entrance exam for medical courses."
    },
    {
      id: 3,
      question: "Which field is known as the 'fourth estate' in democracy?",
      options: ["Politics", "Journalism", "Law", "Social Work"],
      correct: 1,
      explanation: "Journalism is often called the 'fourth estate' for its role in democracy alongside the three branches of government."
    },
    {
      id: 4,
      question: "What does AI stand for in technology?",
      options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Applied Information"],
      correct: 1,
      explanation: "AI stands for Artificial Intelligence, which involves creating machines that can think and learn like humans."
    },
    {
      id: 5,
      question: "Which career involves studying human behavior and mental processes?",
      options: ["Sociologist", "Psychologist", "Anthropologist", "Philosopher"],
      correct: 1,
      explanation: "Psychologists study human behavior, mental processes, and how people interact with their environment."
    }
  ];

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameState]);

  const startGame = (game) => {
    setSelectedGame(game);
    setGameState('playing');
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(30);
    setAnswers({});
  };

  const handleAnswer = (answerIndex) => {
    const question = quizQuestions[currentQuestion];
    const isCorrect = answerIndex === question.correct;
    const points = isCorrect ? 20 : 0;
    
    setAnswers({
      ...answers,
      [currentQuestion]: { selected: answerIndex, correct: isCorrect, points }
    });
    
    setScore(score + points);
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(30);
      } else {
        setGameState('results');
      }
    }, 1500);
  };

  const handleTimeUp = () => {
    setAnswers({
      ...answers,
      [currentQuestion]: { selected: -1, correct: false, points: 0 }
    });
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setGameState('results');
    }
  };

  const resetGame = () => {
    setGameState('menu');
    setSelectedGame(null);
    setScore(0);
    setCurrentQuestion(0);
    setTimeLeft(30);
    setAnswers({});
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return { level: 'Expert', color: 'text-purple-600', message: 'Outstanding! You know your careers well!' };
    if (score >= 60) return { level: 'Advanced', color: 'text-blue-600', message: 'Great job! You have good career knowledge.' };
    if (score >= 40) return { level: 'Intermediate', color: 'text-green-600', message: 'Good work! Keep learning about careers.' };
    return { level: 'Beginner', color: 'text-orange-600', message: 'Nice try! Explore more career options.' };
  };

  if (gameState === 'results') {
    const scoreLevel = getScoreLevel(score);
    const correctAnswers = Object.values(answers).filter(a => a.correct).length;
    
    return (
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <MascotAvatar size="large" animate={true} className="mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Game Complete!</h1>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-purple-600 mb-2">{score}</div>
              <div className="text-xl text-gray-600 mb-4">Total Points</div>
              <div className={`inline-block px-4 py-2 rounded-full font-semibold ${scoreLevel.color} bg-opacity-10`}>
                {scoreLevel.level} Level
              </div>
              <p className="text-gray-600 mt-4">{scoreLevel.message}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{correctAnswers}</div>
                <div className="text-gray-600">Correct Answers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{quizQuestions.length}</div>
                <div className="text-gray-600">Total Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {Math.round((correctAnswers / quizQuestions.length) * 100)}%
                </div>
                <div className="text-gray-600">Accuracy</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-800">Review Your Answers</h3>
              {quizQuestions.map((question, index) => {
                const answer = answers[index];
                return (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    answer?.correct ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                        answer?.correct ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {answer?.correct ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 mb-2">{question.question}</p>
                        <p className="text-sm text-gray-600 mb-2">
                          Your answer: {answer?.selected >= 0 ? question.options[answer.selected] : 'Time up!'}
                        </p>
                        <p className="text-sm text-green-700">
                          Correct answer: {question.options[question.correct]}
                        </p>
                        <p className="text-sm text-gray-600 italic mt-1">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetGame}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Play Again
              </button>
              <button
                onClick={() => window.location.href = '/career-info'}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    const question = quizQuestions[currentQuestion];
    const currentAnswer = answers[currentQuestion];

    return (
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Game Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={resetGame}
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">{selectedGame.title}</h1>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-800">{score} pts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className={`font-semibold ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-800'}`}>
                  {timeLeft}s
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
              {question.question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !currentAnswer && handleAnswer(index)}
                  disabled={currentAnswer}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    currentAnswer
                      ? currentAnswer.selected === index
                        ? currentAnswer.correct
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-red-500 bg-red-50 text-red-800'
                        : index === question.correct
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-gray-200 bg-gray-50 text-gray-500'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-800'
                  } ${currentAnswer ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-md transform hover:scale-105'}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold ${
                      currentAnswer
                        ? currentAnswer.selected === index
                          ? currentAnswer.correct
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-red-500 bg-red-500 text-white'
                          : index === question.correct
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-gray-300 text-gray-400'
                        : 'border-gray-300 text-gray-600'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {currentAnswer && (
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                <p className="text-blue-800">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Game Zone</h1>
          <p className="text-gray-600">Learn about careers through fun and interactive games!</p>
          <MascotAvatar size="medium" animate={true} className="mx-auto mt-6" />
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {games.map(game => (
            <div key={game.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{game.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{game.title}</h3>
                  <p className="text-gray-600 text-sm">{game.category}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{game.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Difficulty</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-800">{game.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Duration</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-800">{game.points}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Points</p>
                </div>
              </div>

              <button
                onClick={() => startGame(game)}
                disabled={game.id !== 1}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  game.id === 1
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Play className="w-5 h-5" />
                <span>{game.id === 1 ? 'Play Now' : 'Coming Soon'}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Leaderboard Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
            Top Scorers This Week
          </h2>
          
          <div className="space-y-4">
            {[
              { name: 'Rahul S.', score: 485, games: 12, avatar: '👨‍🎓' },
              { name: 'Priya M.', score: 450, games: 10, avatar: '👩‍🎓' },
              { name: 'Arjun K.', score: 420, games: 8, avatar: '👨‍💻' },
              { name: 'Sneha R.', score: 395, games: 9, avatar: '👩‍💼' },
              { name: 'Vikash P.', score: 370, games: 7, avatar: '👨‍🔬' }
            ].map((player, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  index === 0 ? 'bg-yellow-500' :
                  index === 1 ? 'bg-gray-400' :
                  index === 2 ? 'bg-orange-600' : 'bg-purple-500'
                }`}>
                  {index + 1}
                </div>
                <div className="text-2xl">{player.avatar}</div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{player.name}</div>
                  <div className="text-sm text-gray-600">{player.games} games played</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-purple-600">{player.score}</div>
                  <div className="text-sm text-gray-600">points</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameZone;