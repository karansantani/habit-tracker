import React from 'react';
import Checkbox from '@mui/material/Checkbox'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function HabitTimeline(props) {
  return (
    <div>
    <Timeline position="alternate">
      { props.habits?.tracked?.map((habit, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="success"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h4 style={{ color:"#1A5E20" }}>{ habit.date }</h4>
              <Checkbox style={{ color:"#1A5E20" }} disabled checked={habit.habits.includes('habit_1')}/>
              <Checkbox style={{ color:"#1A5E20" }} disabled checked={habit.habits.includes('habit_2')}/>
              <Checkbox style={{ color:"#1A5E20" }} disabled checked={habit.habits.includes('habit_3')}/>
              <Checkbox style={{ color:"#1A5E20" }} disabled checked={habit.habits.includes('habit_4')}/>
            </TimelineContent>
          </TimelineItem>
        );
      }) }
    </Timeline>
    </div>
  )
}

export default HabitTimeline;