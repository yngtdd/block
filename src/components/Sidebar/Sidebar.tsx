import { DragEvent } from 'react';
import WeibullNode from '../WeibullNode';

import styles from './styles.module.css';

const nodeTypes = {
  weibullNode: WeibullNode
};

const onDragStart = (event: DragEvent, nodeType: string) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className="react-flow__node-input" onDragStart={(event: DragEvent) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div
        className="react-flow__node-default"
        onDragStart={(event: DragEvent) => onDragStart(event, 'weibullNode')}
        draggable
      >
        Weibull Node
      </div>
      <div
        className="react-flow__node-output"
        onDragStart={(event: DragEvent) => onDragStart(event, 'output')}
        draggable
      >
        Output Node
      </div>
    </aside>
  );
};
