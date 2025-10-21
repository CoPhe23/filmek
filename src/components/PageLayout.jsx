import { Box, Container, Typography, Collapse, Button } from '@mui/material'
import React from 'react'
import { MyPagination } from './MyPagination'
import { Genres } from './Genres'
import { FiFilter } from 'react-icons/fi'

export const PageLayout = ({ title, children, page, setPage, type, selectedGenres, setSelectedGenres}) => {
    const [openFilters, setOpenFilters] = React.useState(false)

    return (
        <Container maxWidth={false} sx={{
            background: 'linear-gradient(180deg, #0b1220 0%, #0b1220 40%, #101a33 100%)',
            color: 'whitesmoke', minHeight: '100vh'
        }}>
            <Typography
              variant='h3'
              sx={{ textTransform: 'uppercase', fontWeight: 800, letterSpacing: 2, textAlign: 'center', color:'#eaeff7', mt: 1, mb: 1 }}
            >
                {title}
            </Typography>

            {/* Toggleable Genres (hidden on Search page) */}
            { title !== 'Search page' && (
              <Box sx={{ display:'flex', justifyContent:'center', mb: 1 }}>
                <Button
                  variant="outlined"
                  onClick={()=>setOpenFilters(v=>!v)}
                  startIcon={<FiFilter />}
                  sx={{
                    color:'#eaeff7', borderColor:'rgba(148,163,184,0.3)',
                    '&:hover':{ borderColor:'rgba(148,163,184,0.6)', background:'rgba(15,23,42,0.4)' },
                    borderRadius:'999px', textTransform:'none', px:2, py:0.5
                  }}
                >
                  {openFilters ? 'Hide genres' : 'Show genres'}
                </Button>
              </Box>
            )}

            <Collapse in={title !== 'Search page' && openFilters} timeout="auto" unmountOnExit>
              <Genres type={type} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
            </Collapse>

            <Box>
                {children}
            </Box>
            <Box display="flex" justifyContent="center">
              <MyPagination page={page} setPage={setPage}/>
            </Box>
        </Container>
    )
}
