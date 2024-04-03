import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import StatsTable from './StatsTable'

function PlayerDetails() {
    let { id } = useParams()
  return (
    <Grid container sx={{minHeight: '100vh'}}>
        <Grid item xs={12} md={2}>
        <Avatar
            alt="Remy Sharp" 
            src='https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/306000/306068.1.jpg'
            sx={{width: 150, height: 150}}
        />
        </Grid>
        <Grid item xs={12} md={10}>
            <Box sx={{backgroundColor: 'white', border: '1px solid #EBEBEB',py: 3,  px: 5, borderRadius: '10px'}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left'}}>
                        <Typography color='gray'>FULL NAME</Typography>
                        <Typography fontWeight={600}>Afif Hossain</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left'}}>
                        <Typography color='gray'>BORN</Typography>
                        <Typography fontWeight={600}>September 22, 1999, Khulna</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left'}}>
                        <Typography color='gray'>AGE</Typography>
                        <Typography fontWeight={600}>24y</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left'}}>
                        <Typography color='gray'>NICKNAME</Typography>
                        <Typography fontWeight={600}>Dhrubo</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left'}}>
                        <Typography color='gray'>BATTING STYLE</Typography>
                        <Typography fontWeight={600}>Left Hand Bat</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left'}}>
                        <Typography color='gray'>BOWLING STYLE</Typography>
                        <Typography fontWeight={600}>Right Arm Offbreak</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left'}}>
                        <Typography color='gray'>PLAYING ROLE</Typography>
                        <Typography fontWeight={600}>All Rounder</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left'}}>
                        <Typography color='gray'>TEAM</Typography>
                        <Typography fontWeight={600}>Bangladesh</Typography>
                    </Grid>
                    
                </Grid>
            </Box>
            <Box sx={{mt: 2, backgroundColor: 'white', border: '1px solid #EBEBEB',py: 3,  px: 5, borderRadius: '10px'}}>
                <Typography fontWeight={600} textAlign='left' mb={2} color='gray'>Career Stats</Typography>
                <StatsTable />
            </Box>
        </Grid>


    </Grid>
  )
}

export default PlayerDetails