import { Header } from '../components/Header';
import { PathViewer } from '../components/PathViewer';
import { PathCards } from '../components/PathCards';
import { SkillsCard } from '../components/SkillsCard';
import { Chat } from '../components/Chat';

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-bg-base">
      <Header />

      <div className="max-w-[1600px] mx-auto p-4">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
          {/* Timeline Viewer - Takes 3 columns on desktop */}
          <div className="lg:col-span-3 h-[65vh]">
            <PathViewer />
          </div>

          {/* Path Cards - Takes 1 column on desktop */}
          <div className="lg:col-span-1 h-[65vh]">
            <PathCards />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Skills Card */}
          <div className="lg:col-span-4 h-[35vh]">
            <SkillsCard />
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-8 h-[35vh]">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
