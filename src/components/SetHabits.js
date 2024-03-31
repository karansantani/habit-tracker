import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { setLocalStorageItem, getLocalStorageItem } from '../services/habit.service';

function SetHabits() {

  const [habitData, setHabitData] = useState({
    habit_1: '',
    habit_2: '',
    habit_3: '',
    habit_4: ''
  });

  // Loading the form data from localStorage on component mount
  useEffect(() => {
    const savedHabits = getLocalStorageItem('habitData');
    if (savedHabits) {
      setHabitData(savedHabits);
    }
  }, []);

  // Function to handle input changes and saving the habits to localStorage
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHabitData(prevData => ({
      ...prevData,
      [name]: value
    }))
    console.log(habitData);
  }

  const handleSave = (e) => {
    e.preventDefault();
    setLocalStorageItem(habitData);
  }

  return (
    <div>
      <form onSubmit={handleSave}>
        <TextField 
          label="Daily Habit 1"
          name="habit_1"
          value={habitData.habit_1}
          onChange={handleInputChange}
          style={{marginBottom: '25px'}}
        />
        <TextField 
          label="Daily Habit 2"
          name="habit_2"
          value={habitData.habit_2}
          onChange={handleInputChange}
          style={{marginBottom: '25px'}}
        />
        <TextField 
          label="Daily Habit 3"
          name="habit_3"
          value={habitData.habit_3}
          onChange={handleInputChange}
          style={{marginBottom: '25px'}}
        />
        <TextField 
          label="Daily Habit 4"
          name="habit_4"
          value={habitData.habit_4}
          onChange={handleInputChange}
          style={{marginBottom: '25px'}}
        />
        <Button type="submit" variant="contained">S A V E</Button>
      </form>
    </div>
  );
}

export default SetHabits;