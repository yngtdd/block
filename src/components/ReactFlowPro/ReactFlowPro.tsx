// This example shows how to implement a simple undo and redo functionality for a React Flow graph.
import React, { CSSProperties, useCallback } from 'react';

import ReactFlow, {
  Background,
  MiniMap,
  Panel,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  NodeOrigin,
  Node,
  Edge,
  DefaultEdgeOptions,
  ProOptions,
} from 'reactflow';

import Sidebar from '../Sidebar';
import 'reactflow/dist/style.css';

const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true };
const defaultNodes: Node[] = [];
const defaultEdges: Edge[] = [];
const defaultEdgeOptions: DefaultEdgeOptions = { style: { strokeWidth: 3, stroke: '#ff0071' } };
const connectionLineStyle: CSSProperties = { strokeWidth: 2, stroke: '#ff99c7' };
const nodeOrigin: NodeOrigin = [0.0, 0.0];

export default function ReactFlowPro() {
  const [nodes, , onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const { project, addNodes } = useReactFlow();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      proOptions={proOptions}
      defaultEdgeOptions={defaultEdgeOptions}
      nodeOrigin={nodeOrigin}
      connectionLineStyle={connectionLineStyle}
      selectNodesOnDrag={false}
    >
      <Panel position="top-left">
        <Sidebar />
      </Panel>
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

