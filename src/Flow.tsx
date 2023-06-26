import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  ReactFlowProvider,
} from 'reactflow';

import 'reactflow/dist/base.css';
import CustomNode from './CustomNode.js';
const nodeTypes = {
  custom: CustomNode,
};

const initNodes = [
  {
    id: '1',
    type: 'custom',
    data: {
      name: 'Jane Dㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇoe',
      job: 'CEO',
      emoji: '😎',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },
    position: { x: 200, y: 0 },
  },
  {
    id: '3',
    type: 'custom',
    data: { name: 'Kristi Price', job: 'Developer', emoji: '🤩' },
    position: { x: 400, y: 0 },
  },
];

const initEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback(
    (params: any) => setEdges(eds => addEdge(params, eds)),
    [],
  );

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        panOnDrag={false}
        preventScrolling={false}
        panOnScroll={false}
        // className="bg-teal-50 cursor-auto"
      >
        {/* <MiniMap /> */}
        {/* <Controls /> */}
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default Flow;
