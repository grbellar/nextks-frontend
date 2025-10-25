import { useStore } from '../store/useStore';
import { pathsMetadata } from '../data/mockData';
import clsx from 'clsx';

export const PathCards = () => {
  const { selectedPath, setSelectedPath } = useStore();

  return (
    <div className="bg-bg-base p-4 rounded-2xl h-full overflow-auto">
      <h2 className="text-lg font-semibold text-text-dark mb-4">Career Paths</h2>
      <div className="flex flex-col gap-3">
        {pathsMetadata.map((path) => (
          <div
            key={path.id}
            onClick={() => setSelectedPath(path.id)}
            className={clsx(
              'bg-white rounded-xl p-5 cursor-pointer transition-all duration-200',
              'hover:shadow-lg hover:scale-[1.02]',
              selectedPath === path.id
                ? 'border-2 border-primary-navy shadow-lg ring-2 ring-primary-navy ring-opacity-20'
                : 'border border-gray-200'
            )}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-bold text-text-dark pr-2">{path.name}</h3>
              {path.recommended && (
                <span className="text-xs bg-success-green text-white px-3 py-1.5 rounded-lg font-medium whitespace-nowrap">
                  Optimal
                </span>
              )}
            </div>

            <p className="text-sm text-text-medium mb-4 leading-relaxed">{path.description}</p>

            <div className="border-t border-gray-200 mb-4"></div>

            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-text-medium mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs">Duration</span>
                </div>
                <span className="text-sm font-semibold text-text-dark">{path.duration}</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-text-medium mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs">Cost</span>
                </div>
                <span className="text-sm font-semibold text-text-dark">{path.cost}</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-text-medium mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-xs">Level</span>
                </div>
                <span className="text-sm font-semibold text-text-dark">{path.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
