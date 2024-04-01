import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function HabitsHeatmap(props) {

  const today = new Date();
  // const randomValues = getRange(365).map(index => {
  //   return {
  //     date: shiftDate(today, -index),
  //     count: getRandomInt(1,4)
  //   };
  // });
  const values = props.habits.tracked.map((item, index) => {
    return {
      date: shiftDate(today, -index),
      count: item.habits.filter(item => item).length
    }
  })

  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
        showWeekdayLabels={true}
        // tooltipDataAttrs={value => {
        //   return {
        //     'data-tip': `${value.date.toISOString().slice(0, 10)} : You completed ${value.habits.filter(Boolean).length} tasks today!}`
        //   };
        // }}
      />
    </div>
  )
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default HabitsHeatmap;