import React from 'react'
import { Box, Typography, CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'
import { Link } from 'react-router-dom'
const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ 
    boxShadow: 'none', 
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: {xs: '365px', md: '320px'},
    height: '326px',
    margin: 'auto',
    
     }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: "center", color: '#fff' }}>
        </CardContent>
        <CardMedia sx={{ borderRadius: "50pc", height: "180px", width: "180px", marginBottom: "2pc" , border: '1px solid #e3e3e3'}} image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title}/>
      </Link>
      <Typography variant={"h6"}>
        {channelDetail?.snippet?.title}
        <CheckCircle sx={{ fontSize: 12, color: 'gray', marginLeft: "5px" }} />
      </Typography>
      {channelDetail?.statistics?.subscriberCount && (
        <Typography variant={"subtitle1"} color="gray">
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
        </Typography>
      )}
    </Box>
  )
}

export default ChannelCard
