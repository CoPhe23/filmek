import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Box, Button, CircularProgress, Grid, Tab, Tabs, TextField } from '@mui/material'
import { useRef } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getSearch } from '../utils';
import { MyCard } from '../components/MyCard';

export const Searchpage = () => {

  const [txt, setTxt] = useState('')
  const [value, setValue] = useState(0)
  const [page, setPage] = useState(1)
  const {data, isError, isLoading,error}=useQuery({queryKey:["results", value==0?'movie':'tv', txt,page],queryFn:getSearch, enabled:!!txt})
  const inputref = useRef()
  console.log(txt);
  console.log(value);
  
  const handleChange = (event, newValue) =>{
    setValue(newValue)
  }
  console.log(data);
  
  
  return (
    <PageLayout title='Search page' page={page} setPage={setPage}>
      
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
          <TextField
          className='label-keres'
          id="standard-textarea" label="Keresés"
           multiline variant="standard"
          inputRef={inputref}
        />
        <Button className='kereses' onClick={()=>setTxt(inputref.current.value)}><IoIosSearch size={"2rem"}/></Button>
        
        </Box>
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <Tabs className='asd'value={value} onChange={handleChange} >
          <Tab label="Movies"  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}/>
          <Tab label="Tv Series"  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}/>
        </Tabs>
        </Box>
          <Grid sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"20px"}}>
                  {isLoading && <CircularProgress sx={{fontSize:"20rem", color:"#172554"}}/>}
            {data && data.results.map(obj =>
                                <MyCard key={obj.id} original_title={obj.name} release_date={obj.first_air_date} {...obj} type={value==0?'movie':'tv'}/>
                            )}
          </Grid>
        </PageLayout>
  )
}