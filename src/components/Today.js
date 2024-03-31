import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Today() {
  return (
    <div>
      <h1>Track today's progress</h1>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label=""/>
        <FormControlLabel control={<Checkbox />} label=""/>
        <FormControlLabel control={<Checkbox />} label=""/>
        <FormControlLabel control={<Checkbox />} label=""/>
      </FormGroup>
    </div>
  );
}

export default Today;