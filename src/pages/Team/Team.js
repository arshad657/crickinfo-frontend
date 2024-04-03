import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import NewsCard from '../../Components/Common/NewsCard/NewsCard'
import PlayersCard from '../../Components/PlayersCard/PlayersCard'

function Team() {
  return (
    <Grid container sx={{textAlign: 'left', display: 'flex'}}>
      <Grid item xs={12} md={8} lg={9.5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Box>
          <Typography variant='h6' fontWeight={600}>Afghanistan Cricket Team</Typography>
          <Box sx={{mt: 5, display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center'}}>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={4} lg={2.5} sx={{mx: 'auto', mt:{xs: 5, md: 0}}}>
        <PlayersCard />
      </Grid>
    </Grid>
  )
}

export default Team