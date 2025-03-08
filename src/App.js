import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import Dashboard from './components/Dashboard';
import SetHabits from './components/SetHabits';
import Today from './components/Today';
import { setLocalStorageItem, getLocalStorageItem } from './services/habit.service';

function App() {
  // For showing and hiding the section which lets the user set habits to track
  const [showHabitForm, setShowHabitForm] = useState(false);
  const [newHabitForm, setNewHabit] = useState(false);
  
  // For managing the complete habit object
  const [habitObject, setHabitObject] = useState({
    setHabits: {
      habit_1: "Drink 8 glasses of water",
      habit_2: "Exercise for 45 minutes",
      habit_3: "Meditate in a quiet surrounding",
      habit_4: "Do not eat anything post 7PM"
    },
    tracked: []
  });

  // Load habits from local storage on initial render
  useEffect(() => {
    const storedHabits = getLocalStorageItem('storedHabits');
    if (storedHabits) {
      setHabitObject(JSON.parse(storedHabits));
    }
  }, []); // Empty dependency array means this runs once on mount

  // Save to local storage whenever habitObject changes
  useEffect(() => {
    setLocalStorageItem('storedHabits', JSON.stringify(habitObject));
  }, [habitObject]);

  const toggleHabitForm = () => {
    setShowHabitForm(!showHabitForm);
  };

  const toggleNewHabitForm = () => {
    setNewHabit(!newHabitForm);
  };

  const trackToday = (selectedHabits) => {
    const todaysDate = new Date().toISOString().split('T')[0];
    
    setHabitObject(prevState => {
      const tracked = [...prevState.tracked];
      const lastEntry = tracked[tracked.length - 1];
      
      // If we already have an entry for today, update it
      if (lastEntry && lastEntry.date === todaysDate) {
        tracked[tracked.length - 1] = {
          date: todaysDate,
          habits: [...new Set([...lastEntry.habits, ...selectedHabits])]
        };
      } else {
        // Add new entry for today
        tracked.push({
          date: todaysDate,
          habits: selectedHabits
        });
      }

      return {
        ...prevState,
        tracked
      };
    });

    toggleNewHabitForm();
  };

  const trackHabits = (habits) => {
    setHabitObject(prevState => ({
      ...prevState,
      setHabits: habits
    }));
    toggleHabitForm();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '95%', margin: 'auto', marginTop: '16px'}}>
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
        <h1 style={{ color:"#1A5E20" }}>
          Habit Tracker
          { !newHabitForm && 
            <Button 
              color="success" 
              size="small" 
              variant="outlined" 
              style={{ marginLeft: "25px", fontSize: "8px"}} 
              onClick={toggleHabitForm}
            >
              Set your habits
            </Button> 
          }
        </h1>
        { !showHabitForm &&
          <Fab color="success" aria-label="log Today's habits" onClick={toggleNewHabitForm}>
            <AddIcon />
          </Fab> 
        }
      </div>
      
      { newHabitForm &&
        <Today habits={habitObject.setHabits} trackToday={trackToday}/>
      }
      
      { showHabitForm &&
        <SetHabits habits={habitObject} trackHabits={trackHabits}/> 
      }
      
      { !showHabitForm && !newHabitForm &&
        <Dashboard habits={habitObject}/> 
      }
    </div>
  );
}

export default App;