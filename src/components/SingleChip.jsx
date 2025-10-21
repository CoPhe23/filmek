import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';

export const SingleChip=({id,name, selectedGenres, setSelectedGenres})=> {
  const [isSelected, setIsSelected]= useState(false);

  const handleToggle = () => {
    setIsSelected(!isSelected);
    if(selectedGenres.indexOf(id)===-1){
      setSelectedGenres(prev=> [...prev, id]);
    }else{
      setSelectedGenres(prev=>prev.filter((item)=>item!==id));
    }
  };

  const icon = isSelected ? <MdOutlineRadioButtonChecked /> : <MdOutlineRadioButtonUnchecked />;

  return (
    <Box onClick={handleToggle} sx={{ cursor:'pointer' }}>
      <Chip
        label={name}
        icon={icon}
        size="small"
        // Not using Chip's clickable to avoid ripple/selected visual
        color="default"
        sx={{
          color:'whitesmoke',
          bgcolor:'rgba(56,189,248,0.12)',
          borderRadius:'999px',
          border:'1px solid rgba(148,163,184,0.18)',
          width:'100%',
          justifyContent:'flex-start',
          '& .MuiChip-label': { pl: 0.5 },
          '&:hover': { bgcolor:'rgba(56,189,248,0.18)' }
        }}
      />
    </Box>
  );
}
