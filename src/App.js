import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import SetHabits from './components/SetHabits'
import habitData from './data/habit-data.json';


function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '85%', margin: 'auto', marginTop: '40px'}}>
      <SetHabits />
      <Dashboard habits={habitData}/>
    </div>
  );
}

export default App;