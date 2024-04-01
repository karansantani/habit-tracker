import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import Dashboard from './components/Dashboard';
import SetHabits from './components/SetHabits';
import Today from './components/Today';
import { setLocalStorageItem, getLocalStorageItem } from './services/habit.service';
import habitData from './data/habit-data.json';


function App() {

  // Fetching data from localStorage on load
  // const [ habitData, setHabitData ] = useState({ setHabits: {}, tracked: [] });
  // useEffect(() => {
  //   const fetchData = () => {
  //     const data = getLocalStorageItem('habitData');
  //     setHabitData(data);
  //   }
  //   fetchData();
  // }, []);

  // For showing and hiding the section which lets the user set habits to track
  const [showHabitForm, setShowHabitForm] = useState(false);
  const toggleHabitForm = () => {
    setShowHabitForm(!showHabitForm);
  };
  // For showing and hiding the section which lets the user add today's tracked habits
  const [ newHabitForm, setNewHabit ] = useState(false);
  const toggleNewHabitForm = () => {
    setNewHabit(!newHabitForm);
  }
  // For managing the complete habit object
  const [ habitObject, setHabitObject] = useState({
    setHabits: {},
    tracked: []
  });
  const trackToday = (today) => {
    let todaysDate = new Date();
    const todaysHabits = new Set();
    // If a few habits from today have already been tracked
    if (habitObject?.tracked?.length && habitObject.tracked[habitObject.tracked.length-1].date === todaysDate.toISOString().split('T')[0]) {
      todaysHabits.add(habitObject.tracked[habitObject.tracked.length-1].habits).add(today);
      setHabitObject({
        ...habitObject,
        tracked: [...habitObject.tracked, today]
      });
    } else {
      const _today = { date: todaysDate.toISOString().split('T')[0], habits: today };
      setHabitObject({
        ...habitObject,
        tracked: [...habitObject.tracked, _today]
      });
    }
    setLocalStorageItem(habitObject);
    toggleNewHabitForm();
  }
  const trackHabits = (habits) => {
    console.log(habits);
    setHabitObject({
      ...habitObject,
      setHabits: habits
    });
    setLocalStorageItem(habitObject);
    toggleHabitForm();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '95%', margin: 'auto', marginTop: '16px'}}>
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
        <h1 style={{ color:"#1A5E20" }}>
          Habit Tracker
          { !newHabitForm && <Button color="success" size="small" variant="outlined" style={{ marginLeft: "25px", fontSize: "8px"}} onClick={toggleHabitForm}>Edit your habits</Button> }
        </h1>
        { !showHabitForm && <Fab color="success" aria-label="log Today's habits">
          <AddIcon color="white" onClick={toggleNewHabitForm}/>
        </Fab> }
      </div>
      <div>
      { newHabitForm && <Today habits={habitData.setHabits} trackToday={trackToday}/> }
      </div>
      { showHabitForm && <SetHabits habits={habitObject} trackHabits={trackHabits}/> }
      { !showHabitForm && !newHabitForm && <Dashboard habits={habitData}/> }
    </div>
  );
}

export default App;