import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CareerSelectionPage() {
  const navigate = useNavigate();
  const [currentCareer, setCurrentCareer] = useState('');
  const [targetCareer, setTargetCareer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage (or could use state management)
    localStorage.setItem('currentCareer', currentCareer);
    localStorage.setItem('targetCareer', targetCareer);
    // Navigate to loading page
    navigate('/onboarding/loading');
  };

  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">N</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">NextStepKS</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Let's Plan Your Path
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Tell us about your career journey
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="currentCareer" className="block text-sm font-medium text-gray-700 mb-1">
                What is your current career?
              </label>
              <input
                type="text"
                id="currentCareer"
                value={currentCareer}
                onChange={(e) => setCurrentCareer(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="e.g., Retail Associate"
                required
              />
            </div>

            <div>
              <label htmlFor="targetCareer" className="block text-sm font-medium text-gray-700 mb-1">
                What career do you want to get into?
              </label>
              <input
                type="text"
                id="targetCareer"
                value={targetCareer}
                onChange={(e) => setTargetCareer(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="e.g., Software Developer"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
