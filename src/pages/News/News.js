import { Box, Typography } from '@mui/material'
import React from 'react'
import NewsCard from '../../Components/Common/NewsCard/NewsCard'

function News() {
  return (
    <div style={{textAlign: 'left'}}>
        <Box sx={{backgroundColor: 'white', mt: 3, pt:3, border: '1px solid #EBEBEB',pl: 2, borderRadius: '10px'}}>
            <Typography variant='h6' fontWeight={600}>Cricket News</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, my: 3}}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </Box>
        </Box>
    </div>
  )
}

export default News