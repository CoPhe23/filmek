import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { BiCameraMovie } from 'react-icons/bi';
import { FiTv } from 'react-icons/fi';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router';
export const MyButtonNav=()=> {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate()
const handleChange=(event, newValue)=>{
  setValue(newValue)
  console.log(newValue);
  if(newValue==0) navigate('/')
  if(newValue==1) navigate('/tvseries')
  if(newValue==2) navigate('/search')
  
}
  return (
    <Box sx={{ width:'100%', position:'fixed',bottom:'0' }}>
      <BottomNavigation sx={{backgroundColor:'#0a0f1a'}} showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction label='Movies' icon={<BiCameraMovie />} sx={{ color:'whitesmoke', flex:1, width:'100%'}}/>
        <BottomNavigationAction label='TVSeries' icon={<FiTv />} sx={{ color:'whitesmoke', flex:1}}/>
        <BottomNavigationAction label='Search' icon={<MdSearch />} sx={{ color:'whitesmoke', flex:1}}/>
      </BottomNavigation>
    </Box>
  );
}
