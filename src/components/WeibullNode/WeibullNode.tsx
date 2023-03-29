import React, { memo, FC, useCallback } from 'react';
import { Handle, Position, NodeProps, Connection, Edge, useOnViewportChange, Viewport } from 'reactflow';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
//import './weibull-node.css';
//import './tailwind-config.js';

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
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">

      <Typography variant="subtitle1" gutterBottom>
        Weibull Component
      </Typography>

      <div>
        <Stack
          component="form"
          sx={{
            width: '25ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="weibull-shape"
            label="Shape"
            defaultValue="200"
            size="small"
          />
          <TextField
            id="weibull-scale"
            label="Scale"
            defaultValue="0.5"
            size="small"
          />

          <Handle type="target" position={Position.Top} className="w-16 !bg-teal-400" />
          <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-400" />

        </Stack>
      </div>

    </div>
  );
};

export default memo(WeibullNode);
