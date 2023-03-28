import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from '../Sidebar';

const card = (
  <React.Fragment>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Select a Node
      </Typography>
    </CardContent>
    <Sidebar />
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 250 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
