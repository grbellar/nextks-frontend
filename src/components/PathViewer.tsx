import { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  type Node,
  type Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Target, BookOpen, Award, Briefcase, Star } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { PathNode } from '../data/mockData';
import { PATH_LAYOUT, getEdgeStyle } from '../config/pathLayout';
import { ResourceModal } from './ResourceModal';

// Icon map
const iconMap = {
  Target,
  BookOpen,
  Award,
  Briefcase,
  Star,
};

// Custom node component
const CustomNode = ({ data }: any) => {
  const { type, label, isHighlighted } = data;

  const getNodeStyle = () => {
    const colorConfig = PATH_LAYOUT.colors[type as keyof typeof PATH_LAYOUT.colors];
    return {
      background: colorConfig.background,
      color: colorConfig.text,
      border: `2px solid ${colorConfig.border}`,
    };
  };

  const getIcon = () => {
    const colorConfig = PATH_LAYOUT.colors[type as keyof typeof PATH_LAYOUT.colors];
    const IconComponent = iconMap[colorConfig.icon as keyof typeof iconMap];
    return <IconComponent size={24} />;
  };

  const style = getNodeStyle();

  return (
    <div
      className="flex flex-col items-center gap-2 transition-opacity duration-300"
      style={{ opacity: isHighlighted ? 1 : 0.2 }}
    >
      {/* Label above the node */}
      <div className="text-xs font-semibold text-text-dark text-center whitespace-nowrap px-2">
        {label}
      </div>

      {/* Clickable icon node */}
      <div className="relative">
        <Handle type="target" position={Position.Left} className="!bg-transparent !border-0" />
        <div
          className="shadow-md cursor-pointer hover:scale-110 transition-transform duration-200
            flex items-center justify-center"
          style={{
            width: `${PATH_LAYOUT.node.width}px`,
            height: `${PATH_LAYOUT.node.height}px`,
            borderRadius: `${PATH_LAYOUT.node.borderRadius}px`,
            ...style,
          }}
        >
          {getIcon()}
        </div>
        <Handle type="source" position={Position.Right} className="!bg-transparent !border-0" />
      </div>
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

export const PathViewer = () => {
  const { currentNodes, selectedPath } = useStore();
  const [selectedResource, setSelectedResource] = useState<PathNode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Map selectedPath (1,2,3) to pathwayType
  const selectedPathwayType = selectedPath === 1 ? 'academic' : selectedPath === 2 ? 'vocational' : 'accelerated';

  // Convert PathNode to ReactFlow Node format
  const initialNodes: Node[] = currentNodes.map((node: PathNode) => {
    // Check if this node belongs to the selected pathway or is start/goal
    const isHighlighted =
      node.type === 'start' ||
      node.type === 'goal' ||
      node.pathwayType === selectedPathwayType;

    return {
      id: node.id,
      type: 'custom',
      position: node.position,
      draggable: false,
      data: {
        label: node.label,
        status: node.status,
        type: node.type,
        fullNode: node,
        isHighlighted,
      },
    };
  });

  // Create edges for branching structure
  const initialEdges: Edge[] = [];

  // Group nodes by pathway type
  const academicNodes = currentNodes.filter(n => n.pathwayType === 'academic');
  const vocationalNodes = currentNodes.filter(n => n.pathwayType === 'vocational');
  const acceleratedNodes = currentNodes.filter(n => n.pathwayType === 'accelerated');
  const startNode = currentNodes.find(n => n.type === 'start');
  const goalNode = currentNodes.find(n => n.type === 'goal');

  // Helper to create edges for a pathway
  const createPathwayEdges = (nodes: PathNode[], pathwayId: number) => {
    const isRecommended = pathwayId === 2; // Vocational is recommended
    const pathwayType = pathwayId === 1 ? 'academic' : pathwayId === 2 ? 'vocational' : 'accelerated';
    const isHighlighted = pathwayType === selectedPathwayType;

    // Connect start to first node of pathway
    if (startNode && nodes.length > 0) {
      const edgeStyle = getEdgeStyle(isRecommended);
      initialEdges.push({
        id: `start-to-${nodes[0].id}`,
        source: startNode.id,
        target: nodes[0].id,
        type: PATH_LAYOUT.edge.type as any,
        animated: edgeStyle.animated && isHighlighted,
        style: {
          stroke: isHighlighted ? '#10B981' : edgeStyle.stroke,
          strokeWidth: isHighlighted ? 3 : edgeStyle.strokeWidth,
          strokeDasharray: edgeStyle.strokeDasharray,
          opacity: isHighlighted ? 1 : 0.2,
          transition: 'all 300ms',
        },
      });
    }

    // Connect nodes within pathway
    for (let i = 0; i < nodes.length - 1; i++) {
      const edgeStyle = getEdgeStyle(isRecommended);
      initialEdges.push({
        id: `${nodes[i].id}-to-${nodes[i + 1].id}`,
        source: nodes[i].id,
        target: nodes[i + 1].id,
        type: PATH_LAYOUT.edge.type as any,
        animated: edgeStyle.animated && isHighlighted,
        style: {
          stroke: isHighlighted ? '#10B981' : edgeStyle.stroke,
          strokeWidth: isHighlighted ? 3 : edgeStyle.strokeWidth,
          strokeDasharray: edgeStyle.strokeDasharray,
          opacity: isHighlighted ? 1 : 0.2,
          transition: 'all 300ms',
        },
      });
    }

    // Connect last node of pathway to goal
    if (goalNode && nodes.length > 0) {
      const edgeStyle = getEdgeStyle(isRecommended);
      initialEdges.push({
        id: `${nodes[nodes.length - 1].id}-to-goal`,
        source: nodes[nodes.length - 1].id,
        target: goalNode.id,
        type: PATH_LAYOUT.edge.type as any,
        animated: edgeStyle.animated && isHighlighted,
        style: {
          stroke: isHighlighted ? '#10B981' : edgeStyle.stroke,
          strokeWidth: isHighlighted ? 3 : edgeStyle.strokeWidth,
          strokeDasharray: edgeStyle.strokeDasharray,
          opacity: isHighlighted ? 1 : 0.2,
          transition: 'all 300ms',
        },
      });
    }
  };

  // Create edges for each pathway
  createPathwayEdges(academicNodes, 1);
  createPathwayEdges(vocationalNodes, 2);
  createPathwayEdges(acceleratedNodes, 3);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes and edges when selected path changes
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [selectedPath, setNodes, setEdges]);

  const onNodeClick = useCallback(
    (_: any, node: Node) => {
      const resource = node.data.fullNode;
      if (resource.type !== 'start') {
        setSelectedResource(resource);
        setIsModalOpen(true);
      }
    },
    []
  );

  return (
    <>
      <div className="w-full h-full bg-white rounded-2xl shadow-sm relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
          fitView
          minZoom={0.5}
          maxZoom={1.5}
          defaultViewport={{ x: 50, y: 150, zoom: 0.8 }}
        >
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#E9EAEB" />
          <Controls className="bg-white border border-bg-card rounded-lg" />
        </ReactFlow>
      </div>

      <ResourceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resource={selectedResource}
      />
    </>
  );
};
