import React from 'react'
import { img_500 } from '../utils'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { MyModal } from './MyModal'

export const MyCard = ({poster_path,original_title,release_date,vote_average,id, type}) => {
  const [open,setOpen] = React.useState(false)  

  return (
    <div >
      <Card onClick={()=>setOpen(true)} className='holographic-card kartya' sx={{ height:630, width: 345, position:'relative', objectFit:'cover', aspectRatio:'1.1', gap:'30px', cursor:'pointer'}}>
        <CardMedia
          sx={{ height: 500 }}
          image={img_500+poster_path}
          title={original_title}
        />
        <div className='rating'>
          {Math.round(vote_average*10)/10}
        </div>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {original_title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {release_date}
          </Typography>
        </CardContent>
      </Card>
      {open && <MyModal id={id} type={type} open={open} setOpen={setOpen}/>}
    </div>
  );
}
