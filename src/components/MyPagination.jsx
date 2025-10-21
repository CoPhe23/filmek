import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const MyPagination=({page, setPage})=> {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack className='oldal' spacing={0} sx={{paddingBottom:"60px"}}>
      <Pagination count={20} page={page} onChange={handleChange} />
    </Stack>
  );
}
