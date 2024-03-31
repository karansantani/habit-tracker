import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import Dashboard from './components/Dashboard';
import habitData from './data/habit-data.json';


function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '95%', margin: 'auto', marginTop: '16px'}}>
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
        <h1>Habit Tracker
          <Button color="success" size="small" variant="outlined" style={{ marginLeft: "25px", fontSize: "8px"}}>Edit your habits</Button>
        </h1>
        <Box style={{ }}>
          <Fab color="success" aria-label="log Today's habits">
            <AddIcon color="white"/>
          </Fab>
        </Box>
      </div>
      {/* <SetHabits /> */}
      <Dashboard habits={habitData}/>
    </div>
  );
}

export default App;