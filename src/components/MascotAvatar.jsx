import { useState, useEffect } from 'react';

const MascotAvatar = ({ size = 'large', animate = false, className = '' }) => {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 1000);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [animate]);

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Mascot Character - Ms. Suzuka */}
      <div className="relative w-full h-full">
        {/* Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full border-2 border-orange-400">
          {/* Hair */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-14 h-10 bg-gradient-to-b from-amber-800 to-amber-600 rounded-full"></div>
          
          {/* Eyes */}
          <div className="absolute top-3 left-2 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-3 right-2 w-2 h-2 bg-black rounded-full"></div>
          
          {/* Smile */}
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"></div>
        </div>

        {/* Body */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-lg">
          {/* Logo on shirt */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-white rounded text-xs flex items-center justify-center font-bold text-red-500">
            N
          </div>
        </div>

        {/* Arms */}
        <div className={`absolute top-12 left-2 w-3 h-6 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full transform origin-top ${
          isWaving ? 'rotate-45 transition-transform duration-500' : 'rotate-12'
        }`}></div>
        <div className="absolute top-12 right-2 w-3 h-6 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full transform rotate-12"></div>

        {/* Legs */}
        <div className="absolute bottom-0 left-3 w-3 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
        <div className="absolute bottom-0 right-3 w-3 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>
      </div>

      {/* Speech bubble for interaction */}
      {animate && (
        <div className="absolute -top-8 -right-4 bg-white rounded-lg px-3 py-1 text-xs font-medium shadow-lg border-2 border-purple-300 opacity-90">
          Hi! I'm Ms. Suzuka! 👋
          <div className="absolute bottom-0 left-4 transform translate-y-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
};

export default MascotAvatar;