import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to dashboard after 4 seconds
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center">
        {/* Pulsing Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Outer pulse rings */}
            <div className="absolute inset-0 animate-ping opacity-20">
              <div className="w-24 h-24 bg-blue-900 rounded-2xl"></div>
            </div>
            <div className="absolute inset-0 animate-pulse opacity-30">
              <div className="w-24 h-24 bg-blue-900 rounded-2xl"></div>
            </div>
            {/* Main logo */}
            <div className="relative w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg p-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-full h-full text-blue-900"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Graph line going up */}
                <polyline points="3,18 7,14 11,16 15,10 19,6" />
                {/* Arrow head */}
                <polyline points="15,6 19,6 19,10" />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-pulse">
          Crafting Your Journey
        </h1>

        {/* Dots animation */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-3 h-3 bg-blue-900 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-blue-900 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-blue-900 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Subtext */}
        <p className="text-gray-600 text-lg">
          Personalizing your career path...
        </p>
      </div>
    </div>
  );
}
