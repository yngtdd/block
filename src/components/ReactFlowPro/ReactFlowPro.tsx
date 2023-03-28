import { useState, DragEvent } from 'react';
import { trace, info, error, attachConsole } from "tauri-plugin-log-api";

import ReactFlow, {
  addEdge,
  ReactFlowProvider,
  Background,
  MiniMap,
  Panel,
  useNodesState,
  useEdgesState,
  Controls,
  Connection,
  NodeOrigin,
  Node,
  Edge,
  ProOptions,
  ReactFlowInstance,
} from 'reactflow';

import Sidebar from '../Sidebar';
import 'reactflow/dist/style.css';

const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true };

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 500, y: 40 },
  },
  {
    id: '2',
    type: 'default',
    data: { label: 'default node' },
    position: { x: 600, y: 100 },
  },
];

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeOrigin: NodeOrigin = [0.5, 0.5];

export default function ReactFlowPro() {
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds));
  const onInit = (rfi: ReactFlowInstance) => setReactFlowInstance(rfi);

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

   if (reactFlowInstance) {
      trace("In react flow instance")
      const type = event.dataTransfer.getData('application/reactflow');
      const position = reactFlowInstance.project({
        x: event.clientX,
        y: event.clientY - 10,
      });
      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nodes) => nodes.concat(newNode));
      info("Added new node");
   }
  };

  return (
    <div style={{ height: '90vh' }}>
    <ReactFlowProvider>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      onConnect={onConnect}
      onInit={onInit}
      onDrop={onDrop}
      onDragOver={onDragOver}
      nodeOrigin={nodeOrigin}
      proOptions={proOptions}
    >
     <Panel position="top-left">
       <Sidebar />
     </Panel>
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
    </ReactFlowProvider>
    </div>
  );
}

