import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NewsCard() {
  return (
    <Card sx={{cursor: 'pointer', maxWidth: 400, ':hover': { backgroundColor: 'black', color: 'white', boxShadow: 3 } }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/377900/377963.6.jpg"
      />
      <CardContent>
        <Typography gutterBottom component="div" fontWeight={600}>
          Two DPL matches postponed after fire accident on Dhaka-Aricha highway
        </Typography>
        <Typography variant="body2">
          All four teams were stuck in traffic for hours while trying to get to the BKSP grounds in Savar
        </Typography>
      </CardContent>
    </Card>
  );
}