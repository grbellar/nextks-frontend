import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 mb-6">
      <div className="max-w-[1600px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center p-2">
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
            <span className="text-xl font-semibold text-gray-900">NextStepKS</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              My Paths
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Resources
            </a>

            {/* User Profile Icon */}
            <button className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
              <User className="w-5 h-5 text-white" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
