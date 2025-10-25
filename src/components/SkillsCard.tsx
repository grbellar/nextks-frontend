import { useStore } from '../store/useStore';

export const SkillsCard = () => {
  const { skills } = useStore();

  const completedCount = skills.filter((s) => s.status === 'completed').length;
  const progressPercentage = Math.round((completedCount / skills.length) * 100);

  const getProgressWidth = (status: string) => {
    switch (status) {
      case 'completed':
        return '100%';
      case 'in-progress':
        return '50%';
      case 'upcoming':
        return '0%';
      default:
        return '0%';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success-green';
      case 'in-progress':
        return 'bg-accent-gold';
      case 'upcoming':
        return 'bg-gray-200';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="bg-white border border-bg-card rounded-xl p-5 h-full">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-semibold text-text-dark">Skills to Develop</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-text-dark">{progressPercentage}%</span>
          <span className="text-sm text-text-medium">
            ({completedCount}/{skills.length})
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                {skill.status === 'completed' && (
                  <svg className="w-4 h-4 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {skill.status === 'in-progress' && (
                  <svg className="w-4 h-4 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {skill.status === 'upcoming' && (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className="text-sm font-medium text-text-dark">{skill.name}</span>
              </div>
              <span className="text-xs text-text-medium capitalize">{skill.status.replace('-', ' ')}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${getProgressColor(skill.status)}`}
                style={{ width: getProgressWidth(skill.status) }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
