import React from 'react';
import HabitTimeline from './HabitTimeline';
import HabitsHeatmap from './HabitsHeatmap';
import { Grid } from '@mui/material';

function Dashboard(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} style={{ maxHeight: '85vh', overflowY: "auto"}}>
        <HabitTimeline habits={props.habits}/>
      </Grid>
      <Grid item xs={8} style={{ position: 'sticky', top: 0, maxHeight: '85vh', oveflow: 'hidden'}}>
        <HabitsHeatmap habits={props.habits}/>
      </Grid>
    </Grid>
  );
}

export default Dashboard;