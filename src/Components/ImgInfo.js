import React from 'react'
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';
import Button from '@mui/material/Button';

export default function ImgInfo() {
  return (
    <div className='btnDiv'>
        <Box sx={{ m: 2 }}>
        <Button 
            style={{margin: '0 auto', display: "flex"}}  
            sx={{borderColor: 'white', color: 'white'}} 
            variant="outlined"
            >MORE INFO
        </Button>
        </Box>
    </div>
    
  )
}

