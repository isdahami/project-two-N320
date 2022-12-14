import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ImgInfo(props) {

  
  
  return (
    <div>
        <Box sx={{ m: 1 }}>
        <Button 
            /* calling the function showInfo from the parent component and passing the movieIdx as an
            argument. */
            onClick={() => { props.showInfo(props.movieIdx)}}
            style={{margin: '0 auto', display: "flex", fontFamily: "Comfortaa"}}  
            sx={{borderColor: 'white', color: 'white', width: 200}} 
            variant="outlined"
            >MORE INFO
        </Button>
        </Box>
    </div>
  )
  
}

