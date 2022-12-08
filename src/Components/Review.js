import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import "./Review.css";

export default function Review() {
  const [value, setValue] = useState(0);


  /* Setting the value to local storage. */
  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value));
  }, [value]);


  /* Getting the value from local storage and setting it to the value state. */
  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('value'));
    /* Checking if the value is true. If it is, it sets the value to the value state. */
    if (value) {
      setValue(value);
    }
  }, []);

  // console.log(value)


  return (
    <Box
    sx={{ m: 1 }}
    >
      <Typography component="legend" style={{margin: '0 auto', justifyContent: "center", display: "flex", fontFamily: "Comfortaa"}}> YOUR REVIEW</Typography>
      <Rating
        value={value}
        sx={{
            '& .MuiRating-iconFilled': {
              color: '#302b50',
            },
            '& .MuiRating-iconHover': {
              color: '#0f0c30',
            },
          }}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue)
        }}
      />
    </Box>
  );

 
}
