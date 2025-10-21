import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import { MyCard } from '../components/MyCard'

export const TVSeries = () => {
  const [page, setPage] = React.useState(1)
    const [selectedGenres, setSelectedGenres] = useState([])
    const { data, isLoading, isError, error } = useQuery({ queryKey: ['tvdata', 'tv', page,selectedGenres], queryFn: getData })
    data && console.log(data);
  return (
      <PageLayout title='TV Series' type="tv" page={page} setPage={setPage} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}>
      <Grid sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"20px"}}>
        {isLoading && <CircularProgress sx={{fontSize:"20rem", color:"#172554"}}/>}
                {data && data.results.map(obj =>
                    <MyCard key={obj.id} original_title={obj.name} title={obj.name} release_date={obj.first_air_date} {...obj} type='tv'/>
                )}
      </Grid>
    </PageLayout>
  )
}