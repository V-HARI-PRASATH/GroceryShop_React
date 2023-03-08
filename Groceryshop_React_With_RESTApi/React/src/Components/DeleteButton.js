import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';import { Link } from 'react-router-dom';



export default function DeleteButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <DeleteOutlineIcon />
      </Fab>
    </Box>
  );
}