import React from 'react';
import HabitTimeline from './HabitTimeline';
import HabitsHeatmap from './HabitsHeatmap';

function Dashboard(props) {
  return (
    <div styles={{ display: 'flex', flexDirection: "row" }}>
      <HabitsHeatmap habits={props.habits}/>
      <HabitTimeline habits={props.habits}/>
    </div>
  );
}

export default Dashboard;