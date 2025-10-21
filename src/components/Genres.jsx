import React from 'react'
import { useQuery } from 'react-query'
import { getGenres  } from '../utils'
import { Box } from '@mui/material'
import { SingleChip } from './SingleChip'

export const Genres = ({type, selectedGenres, setSelectedGenres}) => {
  const {data, isLoading, isError} = useQuery({queryKey:['genres', type],queryFn: getGenres})
  const list = (data && data.genres) ? [...data.genres].sort((a,b)=>a.name.localeCompare(b.name)) : []

  return (
    <Box
      sx={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 1.25,
        px: 2,
        py: 1.5,
        maxWidth: 1200,
        mx: 'auto'
      }}
    >
      {list.map(obj => (
        <SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
      ))}
    </Box>
  )
}
