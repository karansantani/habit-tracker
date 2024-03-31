import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
// import { setLocalStorageItem, getLocalStorageItem } from './services/habit.service';

function SetHabits() {

  // const [ data, setData ] = useState('');

  // useEffect(() => {
  //   const savedHabits = getLocalStorageItem('habitData');
  //   if (savedHabits) {
  //     setData(savedHabits);
  //   }
  // }, []);

  const [habit_1, setHabit_1] = useState('');
  const [habit_2, setHabit_2] = useState('');
  const [habit_3, setHabit_3] = useState('');
  const [habit_4, setHabit_4] = useState('');

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  }

  const handleSave = () => {}

  return (
    <div>
      <h1>Habit Tracker</h1>
      <TextField 
        label="Daily Habit 1"
        value={habit_1}
        onChange={(e) => handleInputChange(e, setHabit_1)}
        style={{marginBottom: '25px'}}
      />
      <TextField 
        label="Daily Habit 2"
        value={habit_2}
        onChange={(e) => handleInputChange(e, setHabit_2)}
        style={{marginBottom: '25px'}}
      />
      <TextField 
        label="Daily Habit 3"
        value={habit_3}
        onChange={(e) => handleInputChange(e, setHabit_3)}
        style={{marginBottom: '25px'}}
      />
      <TextField 
        label="Daily Habit 4"
        value={habit_4}
        onChange={(e) => handleInputChange(e, setHabit_4)}
        style={{marginBottom: '25px'}}
      />
      <Button variant="contained" onClick={handleSave}>S A V E</Button>
    </div>
  );
}

export default SetHabits;