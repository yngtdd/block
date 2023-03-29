import React, { memo, FC, CSSProperties, useCallback } from 'react';
import { Handle, Position, NodeProps, Connection, Edge, useOnViewportChange, Viewport } from 'reactflow';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const targetHandleStyle: CSSProperties = { background: '#edebeb' };
const sourceHandleStyleA: CSSProperties = { ...targetHandleStyle, top: 10 };

const onConnect = (params: Connection | Edge) => console.log('handle onConnect', params);

const WeibullNode: FC<NodeProps> = ({ data, isConnectable }) => {
  const onStart = useCallback((viewport: Viewport) => console.log('onStart', viewport), []);
  const onChange = useCallback((viewport: Viewport) => console.log('onChange', viewport), []);
  const onEnd = useCallback((viewport: Viewport) => console.log('onEnd', viewport), []);

  useOnViewportChange({
    onStart,
    onChange,
    onEnd,
  });

  return (
    <div>
      <Handle type="target" position={Position.Top} style={targetHandleStyle} onConnect={onConnect} />
      <Typography variant="subtitle1" gutterBottom>
        Weibull Component
      </Typography>
      <Stack
        component="form"
        sx={{
          width: '25ch',
        }}
        spacing={1}
        noValidate
        autoComplete="off"
      >
      <TextField
        id="weibull-shape"
        label="Weibull Shape"
        defaultValue="200"
        size="small"
      />
      <TextField
        id="weibull-scale"
        label="Weibull Scale"
        defaultValue="0.5"
        size="small"
      />
      </Stack>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={sourceHandleStyleA}
        isConnectable={isConnectable}
        onMouseDown={(e) => {
          console.log('You trigger mousedown event', e);
        }}
      />
    </div>
  );
};

export default memo(WeibullNode);
