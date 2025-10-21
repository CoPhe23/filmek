import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { CircularProgress, Grid } from '@mui/material'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import { MyCard } from '../components/MyCard'
import { useState } from 'react'

export const Movies = () => {
  const [page, setPage] = React.useState(1)
  const [selectedGenres, setSelectedGenres] = useState([])
  const { data, isLoading, isError, error } = useQuery({ queryKey: ['moviesdata', 'movie', page,selectedGenres], queryFn: getData })
  data && console.log(data);

  return (
    <PageLayout title='Movies'  page={page} setPage={setPage} type="movie" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}>
      <Grid container spacing={2} justifyContent='center'>
        {isLoading && <CircularProgress sx={{fontSize:"20rem", color:"#172554"}}/>}
        {data && data.results.map(obj =>
            <MyCard key={obj.id} {...obj} type='movie'/>
        )}
      </Grid>
    </PageLayout>
  )
}