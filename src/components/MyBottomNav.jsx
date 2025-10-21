import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { BiSolidMoviePlay } from "react-icons/bi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { useNavigate } from 'react-router';



export const MyBottomNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()


  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(newValue);
    if (newValue == 0) navigate('/')
    if (newValue == 1) navigate('/tvseries')
    if (newValue == 2) navigate('/search')


  }

  return (
    <Box sx={{ width:'100%', position: 'fixed', bottom : 0}}>
      <BottomNavigation showLabels value={value} onChange={handleChange}
        sx={{bgcolor : '#191A19', color : 'white'}}
      >
        <BottomNavigationAction sx={{color : 'white'}} label="Movies" icon={<BiSolidMoviePlay />} />
        <BottomNavigationAction sx={{color : 'white'}} label="TVSeries" icon={<MdLiveTv />} />
        <BottomNavigationAction sx={{color : 'white'}} label="Search" icon={<MdOutlineScreenSearchDesktop />} />
      </BottomNavigation>
    </Box>
  );
}