import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { detailsData, img_none } from '../utils';
import { FaYoutube } from "react-icons/fa";
import { useQuery } from 'react-query';


export const ShowTrailer=({type, id})=> {
     const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
const {data, isLoading, isError, error} = useQuery({queryKey:['details',urlVideos],queryFn:detailsData})
  return (
    <Button className='gomb'
      variant="contained"
      href={data &&data?.results && data.results.length > 0 ? `https://www.youtube.com/watch?v=${data?.results[0].key}` : img_none}
      target='_blank'
      startIcon={<FaYoutube />}
    >
      <b>
      Watch the trailer!
      </b>
    </Button>
  );
}
