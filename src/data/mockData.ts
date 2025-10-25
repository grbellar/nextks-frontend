// Hardcoded data for MVP
import { calculateNodePosition } from '../config/pathLayout';

export interface PathNode {
  id: string;
  label: string;
  type: 'start' | 'learning' | 'certification' | 'goal' | 'project';
  status: 'completed' | 'current' | 'future';
  position: { x: number; y: number };
  duration?: string;
  cost?: string;
  skills?: string[];
  description?: string;
  provider?: string;
  resourceType?: string;
  link?: string;
  pathwayType?: 'academic' | 'vocational' | 'accelerated'; // New field for pathway categorization
}

export interface PathMetadata {
  id: number;
  name: string;
  type: 'academic' | 'vocational' | 'accelerated';
  recommended: boolean;
  duration: string;
  cost: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
}

export interface Skill {
  name: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

// Shared start node - Current career
export const startNode: PathNode = {
  id: 'start',
  label: 'Retail Associate',
  type: 'start',
  status: 'completed',
  position: calculateNodePosition(1, 0), // Center position
};

// Shared goal node - Target career
export const goalNode: PathNode = {
  id: 'goal',
  label: 'Web Developer',
  type: 'goal',
  status: 'future',
  position: calculateNodePosition(1, 6), // Center position at end
};

// Pathway A: Academic (Community College/University)
export const academicPathNodes: PathNode[] = [
  {
    id: 'academic-1',
    label: 'Community College Intro',
    type: 'learning',
    status: 'future',
    position: calculateNodePosition(0, 1),
    duration: '16 weeks',
    cost: '$1,200',
    skills: ['Computer Science Fundamentals', 'Programming Basics'],
    description: 'Introduction to Computer Science at local community college',
    provider: 'Local Community College',
    resourceType: 'Course',
    pathwayType: 'academic',
  },
  {
    id: 'academic-2',
    label: 'Associate Degree',
    type: 'certification',
    status: 'future',
    position: calculateNodePosition(0, 2),
    duration: '2 years',
    cost: '$8,000',
    skills: ['Programming', 'Web Development', 'Databases', 'Software Engineering'],
    description: 'Associate Degree in Computer Science or Web Development',
    provider: 'Community College',
    resourceType: 'Degree',
    pathwayType: 'academic',
  },
  {
    id: 'academic-3',
    label: 'University Transfer',
    type: 'learning',
    status: 'future',
    position: calculateNodePosition(0, 3),
    duration: '16 weeks',
    cost: '$4,500',
    skills: ['Advanced Programming', 'Software Architecture', 'Agile Development'],
    description: 'Transfer credits to 4-year university program',
    provider: 'State University',
    resourceType: 'Course',
    pathwayType: 'academic',
  },
  {
    id: 'academic-4',
    label: 'Internship Program',
    type: 'project',
    status: 'future',
    position: calculateNodePosition(0, 4),
    duration: '12 weeks',
    cost: '$0',
    skills: ['Real-world Experience', 'Team Collaboration', 'Industry Tools'],
    description: 'Paid internship through university placement program',
    provider: 'University Career Center',
    resourceType: 'Internship',
    pathwayType: 'academic',
  },
  {
    id: 'academic-5',
    label: 'Capstone Project',
    type: 'project',
    status: 'future',
    position: calculateNodePosition(0, 5),
    duration: '12 weeks',
    cost: '$0',
    skills: ['Full-Stack Development', 'Project Management', 'Portfolio Building'],
    description: 'Complete senior capstone web development project',
    provider: 'State University',
    resourceType: 'Project',
    pathwayType: 'academic',
  },
];

// Pathway B: Vocational (CTE/Apprenticeship)
export const vocationalPathNodes: PathNode[] = [
  {
    id: 'vocational-1',
    label: 'CTE Program Enrollment',
    type: 'learning',
    status: 'future',
    position: calculateNodePosition(1, 1),
    duration: '8 weeks',
    cost: '$500',
    skills: ['HTML/CSS', 'JavaScript Basics', 'Responsive Design'],
    description: 'Career Technical Education web development bootcamp',
    provider: 'Local CTE Center',
    resourceType: 'Bootcamp',
    pathwayType: 'vocational',
  },
  {
    id: 'vocational-2',
    label: 'Industry Certification',
    type: 'certification',
    status: 'future',
    position: calculateNodePosition(1, 2),
    duration: '6 weeks',
    cost: '$300',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React Basics'],
    description: 'Earn industry-recognized web development certification',
    provider: 'CompTIA/W3C',
    resourceType: 'Certification',
    pathwayType: 'vocational',
  },
  {
    id: 'vocational-3',
    label: 'Apprenticeship Program',
    type: 'learning',
    status: 'future',
    position: calculateNodePosition(1, 3),
    duration: '12 months',
    cost: '$0',
    skills: ['React', 'Node.js', 'Databases', 'API Development'],
    description: 'Paid apprenticeship with local tech company',
    provider: 'Local Tech Company',
    resourceType: 'Apprenticeship',
    pathwayType: 'vocational',
  },
  {
    id: 'vocational-4',
    label: 'Mentorship Program',
    type: 'learning',
    status: 'future',
    position: calculateNodePosition(1, 4),
    duration: '6 months',
    cost: '$0',
    skills: ['Advanced React', 'Testing', 'CI/CD', 'Code Review'],
    description: 'One-on-one mentorship with senior developer',
    provider: 'Apprenticeship Program',
    resourceType: 'Mentorship',
    pathwayType: 'vocational',
  },
  {
    id: 'vocational-5',
    label: 'Professional Portfolio',
    type: 'project',
    status: 'future',
    position: calculateNodePosition(1, 5),
    duration: '8 weeks',
    cost: '$0',
    skills: ['Full-Stack Projects', 'GitHub Portfolio', 'Technical Writing'],
    description: 'Build professional portfolio of real-world projects',
    provider: 'Self-Directed',
    resourceType: 'Project',
    pathwayType: 'vocational',
  },
];

// Pathway C: Accelerated (Workforce Development/OJT)
export const acceleratedPathNodes: PathNode[] = [
  {
    id: 'accelerated-1',
    label: 'Workforce Dev Bootcamp',
    type: 'learning',
    status: 'future',
    position: calculateNodePosition(2, 1),
    duration: '12 weeks',
    cost: '$0',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Git'],
    description: 'Intensive coding bootcamp funded by workforce development',
    provider: 'State Workforce Agency',
    resourceType: 'Bootcamp',
    pathwayType: 'accelerated',
  },
  {
    id: 'accelerated-2',
    label: 'Job Placement Support',
    type: 'learning',
    status: 'future',
    position: calculateNodePosition(2, 2),
    duration: '4 weeks',
    cost: '$0',
    skills: ['Resume Building', 'Interview Skills', 'Job Search Strategies'],
    description: 'Career coaching and job placement assistance',
    provider: 'Workforce Development Center',
    resourceType: 'Career Services',
    pathwayType: 'accelerated',
  },
  {
    id: 'accelerated-3',
    label: 'On-the-Job Training',
    type: 'project',
    status: 'future',
    position: calculateNodePosition(2, 3),
    duration: '6 months',
    cost: '$0',
    skills: ['Production Code', 'Team Collaboration', 'Agile Methods'],
    description: 'Entry-level position with structured OJT program',
    provider: 'Partner Employer',
    resourceType: 'OJT',
    pathwayType: 'accelerated',
  },
  {
    id: 'accelerated-4',
    label: 'Skill Certifications',
    type: 'certification',
    status: 'future',
    position: calculateNodePosition(2, 4),
    duration: '8 weeks',
    cost: '$0',
    skills: ['React Certification', 'Cloud Basics', 'DevOps Fundamentals'],
    description: 'Earn certifications while working through employer training',
    provider: 'Employer-Sponsored',
    resourceType: 'Certification',
    pathwayType: 'accelerated',
  },
  {
    id: 'accelerated-5',
    label: 'Performance Review',
    type: 'certification',
    status: 'future',
    position: calculateNodePosition(2, 5),
    duration: '4 weeks',
    cost: '$0',
    skills: ['Professional Development', 'Performance Metrics', 'Career Planning'],
    description: 'Complete OJT program and transition to full developer role',
    provider: 'Current Employer',
    resourceType: 'Milestone',
    pathwayType: 'accelerated',
  },
];

// Combined all nodes for visualization
export const allNodes: PathNode[] = [
  startNode,
  ...academicPathNodes,
  ...vocationalPathNodes,
  ...acceleratedPathNodes,
  goalNode,
];

// Path metadata
export const pathsMetadata: PathMetadata[] = [
  {
    id: 1,
    name: 'Pathway A: Academic',
    type: 'academic',
    recommended: false,
    duration: '3-4 years',
    cost: '$13,700+',
    difficulty: 'Hard',
    description: 'Traditional education path through community college and university',
  },
  {
    id: 2,
    name: 'Pathway B: Vocational',
    type: 'vocational',
    recommended: true,
    duration: '18-24 months',
    cost: '$800',
    difficulty: 'Medium',
    description: 'Hands-on training through CTE programs and apprenticeships',
  },
  {
    id: 3,
    name: 'Pathway C: Accelerated',
    type: 'accelerated',
    recommended: false,
    duration: '10-12 months',
    cost: '$0',
    difficulty: 'Medium',
    description: 'Fast-track through workforce development programs and on-the-job training',
  },
];

// Skills to develop (based on Path 1)
export const skills: Skill[] = [
  { name: 'HTML5', status: 'completed' },
  { name: 'CSS3', status: 'completed' },
  { name: 'JavaScript', status: 'completed' },
  { name: 'React', status: 'in-progress' },
  { name: 'TypeScript', status: 'in-progress' },
  { name: 'Node.js', status: 'upcoming' },
  { name: 'REST APIs', status: 'upcoming' },
  { name: 'Git/GitHub', status: 'upcoming' },
];

// Initial chat messages
export const initialMessages: ChatMessage[] = [
  {
    id: 1,
    sender: 'ai',
    text: "Welcome! I'm your Career Advisor. I've created three pathways to help you transition from Retail Associate to Web Developer. Each pathway uses different resources - Academic (college/university), Vocational (CTE/apprenticeships), or Accelerated (workforce development/OJT).",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: 2,
    sender: 'ai',
    text: 'All three pathways lead to the same career goal, but use different learning approaches and resources. Feel free to explore each one and ask questions!',
    timestamp: new Date(Date.now() - 3500000),
  },
];
