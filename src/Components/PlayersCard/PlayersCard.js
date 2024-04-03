import { Avatar, Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const players = [
    {   
        id: 1,
        name: 'Afif Hossain', 
        image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/306000/306068.1.jpg',
        age: 25
    },
    {
        id: 2,
        name: 'Afif Hossain', 
        image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/306000/306068.1.jpg',
        age: 25
    },
    {
        id: 3,
        name: 'Afif Hossain', 
        image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/306000/306068.1.jpg',
        age: 25
    },
    {
        id: 4,
        name: 'Afif Hossain', 
        image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/306000/306068.1.jpg',
        age: 25
    },
    {
        id: 5,
        name: 'Afif Hossain', 
        image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/306000/306068.1.jpg',
        age: 25
    },
    {
        id: 6,
        name: 'Afif Hossain', 
        image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/306000/306068.1.jpg',
        age: 25
    },
    {
        id: 7,
        name: 'Afif Hossain', 
        image: 'https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/306000/306068.1.jpg',
        age: 25
    },
]


function PlayersCard() {
    const navigate = useNavigate();
    const [showFullCard, setShowFullCard] = useState(false)
    
    
    const toggleShowFullCard = () => {
        setShowFullCard(!showFullCard);
    }

  return (
    <Box sx={{backgroundColor: 'white', maxWidth: '350px', mx: 'auto',  border: '1px solid #EBEBEB', borderRadius: '10px'}}>
        <Typography fontWeight={600} py={1.5} px={3} variant='h6'>Players</Typography>
        <Divider />
         {showFullCard ? players.map(player => {
            return (
                <Box sx={{px: 3,display: 'flex', alignItems: 'center', mt: 2,pb:2, borderBottom: '1px solid #EBEBEB', cursor: 'pointer'}} onClick={() => navigate(`player/${player.id}`)}>
                    <Avatar 
                        alt="Remy Sharp" 
                        src={player.image}
                        sx={{width: 60, height: 60}}
                    />
                    <Box ml={2}>
                        <Typography fontSize='18px' fontWeight={600}>{player.name}</Typography>
                        <Typography>Age: {player.age}</Typography>
                    </Box>
                </Box>
            )
         })
        :
        players.slice(0,5).map(player => {
            return (
                <Box sx={{px: 3,display: 'flex', alignItems: 'center', mt: 2,pb:2, borderBottom: '1px solid #EBEBEB', cursor: 'pointer'}} onClick={() => navigate(`player/${player.id}`)}>
                    <Avatar 
                        alt="Remy Sharp" 
                        src={player.image}
                        sx={{width: 60, height: 60}}
                    />
                    <Box ml={2}>
                        <Typography fontSize='18px' fontWeight={600}>{player.name}</Typography>
                        <Typography>Age: {player.age}</Typography>
                    </Box>
                </Box>
            )
         })
        }
        <Typography sx={{textAlign: 'center', color: '#03A9F4', fontWeight: 600, py: 1.5, cursor: 'pointer'}} onClick={()=> toggleShowFullCard()}>{showFullCard ? 'View short list' : 'View full list'}</Typography>
    </Box>
    )
}

export default PlayersCard