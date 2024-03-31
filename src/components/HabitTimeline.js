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
    <Timeline position="alternate">
      { props.habits.tracked.map((habit, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h4>{ habit.date }</h4>
              <Checkbox disabled checked={habit.habits[0]}/>
              <Checkbox disabled checked={habit.habits[1]}/>
              <Checkbox disabled checked={habit.habits[2]}/>
              <Checkbox disabled checked={habit.habits[3]}/>
            </TimelineContent>
          </TimelineItem>
        );
      }) }
    </Timeline>
  )
}

export default HabitTimeline;