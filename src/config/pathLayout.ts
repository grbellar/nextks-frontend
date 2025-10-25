// Centralized configuration for path visualization layout

export const PATH_LAYOUT = {
  // Node dimensions - smaller, icon-focused nodes
  node: {
    width: 50,  // Smaller circular nodes
    height: 50,
    padding: 8,
    borderRadius: 25, // Fully circular
    fontSize: 24,     // Larger icons
    iconSize: 24,
  },

  // Spacing between nodes
  spacing: {
    horizontal: 180, // Space between nodes horizontally
    vertical: 150,   // Space between different paths vertically
    startX: 80,      // Starting X position
    startY: 100,     // Starting Y position for first path
  },

  // Edge (line) configuration
  edge: {
    type: 'smoothstep', // 'straight', 'smoothstep', 'step', 'bezier'
    optimal: {
      strokeWidth: 2,
      stroke: '#D1D5DB', // Light gray
      animated: false,
      style: 'solid',
      dashArray: '0',
    },
    alternative: {
      strokeWidth: 2,
      stroke: '#E5E7EB', // Lighter gray
      animated: false,
      style: 'solid',
      dashArray: '0',
    },
  },

  // Node colors by type
  colors: {
    start: {
      background: '#FFA500', // Orange
      text: '#FFFFFF',
      border: '#FFA500',
      icon: 'Target',
    },
    learning: {
      background: '#3B82F6', // Blue
      text: '#FFFFFF',
      border: '#3B82F6',
      icon: 'BookOpen',
    },
    certification: {
      background: '#10B981', // Green
      text: '#FFFFFF',
      border: '#10B981',
      icon: 'Award',
    },
    project: {
      background: '#8B5CF6', // Purple
      text: '#FFFFFF',
      border: '#8B5CF6',
      icon: 'Briefcase',
    },
    goal: {
      background: '#F59E0B', // Amber/Gold
      text: '#FFFFFF',
      border: '#F59E0B',
      icon: 'Star',
    },
  },
};

// Helper function to calculate node position
export const calculateNodePosition = (
  pathIndex: number,
  nodeIndex: number
): { x: number; y: number } => {
  return {
    x: PATH_LAYOUT.spacing.startX + nodeIndex * PATH_LAYOUT.spacing.horizontal,
    y: PATH_LAYOUT.spacing.startY + pathIndex * PATH_LAYOUT.spacing.vertical,
  };
};

// Helper function to get edge style
export const getEdgeStyle = (isOptimalPath: boolean, isAnimated = false) => {
  const config = isOptimalPath ? PATH_LAYOUT.edge.optimal : PATH_LAYOUT.edge.alternative;

  return {
    stroke: config.stroke,
    strokeWidth: config.strokeWidth,
    strokeDasharray: config.style === 'dashed' ? config.dashArray : '0',
    animated: isAnimated && config.animated,
  };
};
