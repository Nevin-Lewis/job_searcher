import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';

function StageChoice() {
  const [selected, setSelected] = useState('');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  return (
    <FormControl style={{ marginTop: 100, marginLeft: 100 }}>
      <InputLabel>Job Stage</InputLabel>
      <Select value={selected} onChange={selectionChangeHandler}>
        <MenuItem value={1}>Wishlist</MenuItem>
        <MenuItem value={2}>Applied</MenuItem>
        <MenuItem value={3}>Phone Interview</MenuItem>
        <MenuItem value={4}>Next Interview</MenuItem>
        <MenuItem value={5}>Job Offer</MenuItem>
      </Select>
      <FormHelperText>Select Job Stage!</FormHelperText>
    </FormControl>
  );
}

export default StageChoice;