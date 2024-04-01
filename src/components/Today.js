import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

function Today(props) {

  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const trackToday = () => {
    props.trackToday(checked);
  }

  return (
    <>
      <List dense sx={{ width: '100%', maxWidth: 720, bgcolor: 'transparent' }}>
        {Object.keys(props.habits).map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  color="success"
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={`Did you "${props.habits[value]}" today?`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Button
        color="success" variant="outlined"
        onClick={trackToday}
        style={{ float: 'right', marginTop: '20px' }}
      >
        Track
        </Button>
    </>
  );
}

export default Today;