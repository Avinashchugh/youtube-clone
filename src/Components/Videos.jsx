import React from 'react';
import { Stack, Box } from "@mui/material";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';


const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction={'row'} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos.map((video) => (
        <Box key={video.id.videoId}>
          <VideoCard video={video} />
          <ChannelCard video={video} />
        </Box>
      ))}
    </Stack>
  );
}

export default Videos
