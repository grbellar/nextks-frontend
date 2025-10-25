import { create } from 'zustand';
import type {
  PathNode,
  Skill,
  ChatMessage,
} from '../data/mockData';
import {
  allNodes,
  skills as initialSkills,
  initialMessages,
} from '../data/mockData';

interface AppState {
  selectedPath: number;
  currentNodes: PathNode[];
  visiblePathways: Set<number>; // Track which pathways are visible
  skills: Skill[];
  messages: ChatMessage[];
  setSelectedPath: (pathId: number) => void;
  togglePathwayVisibility: (pathId: number) => void;
  sendMessage: (text: string) => void;
}

export const useStore = create<AppState>((set, get) => ({
  selectedPath: 2, // Vocational is recommended
  currentNodes: allNodes, // Show all nodes by default
  visiblePathways: new Set([1, 2, 3]), // All pathways visible by default
  skills: initialSkills,
  messages: initialMessages,

  setSelectedPath: (pathId: number) => {
    set({ selectedPath: pathId });
  },

  togglePathwayVisibility: (pathId: number) => {
    const { visiblePathways } = get();
    const newVisible = new Set(visiblePathways);

    if (newVisible.has(pathId)) {
      newVisible.delete(pathId);
    } else {
      newVisible.add(pathId);
    }

    set({ visiblePathways: newVisible });
  },

  sendMessage: (text: string) => {
    const { messages } = get();
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    // Simulate AI response
    const aiMessage: ChatMessage = {
      id: messages.length + 2,
      sender: 'ai',
      text: 'Thanks for your question! In this MVP, I\'m showing you hardcoded responses. The full version will have intelligent AI responses to help guide your career journey.',
      timestamp: new Date(Date.now() + 1000),
    };

    set({ messages: [...messages, userMessage, aiMessage] });
  },
}));
