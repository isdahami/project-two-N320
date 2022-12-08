import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function AddWatch(props) {

  
  
  return (
    <div>
        <Box sx={{ m: 1 }}>
        <Button 
            /* calling the function showInfo from the parent component and passing the movieIdx as an
            argument. */
            onClick={() => { props.addTitle(props.movieIdx)}} 
            style={{margin: '0 auto', display: "flex", fontFamily: "Comfortaa"}}  
            sx={{borderColor: '#fff', color: '#fff', width: 200}} 
            variant="outlined"
            >ADD TO WATCHLIST
        </Button>
        </Box>
    </div>
  )
  
}

