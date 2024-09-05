import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Loader from './Loader'
import Videos from './Videos'
import FetchFromApi from '../utils/FetchFromApi'
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(true);
  const [videos, setVideos] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    FetchFromApi(`videos?part=snippet%2Cstatistics&id=${id}`).then((data) => {
      setVideoDetail(data?.items[0]);
    });
    FetchFromApi(`search?relatedToVideoId=${id}&part=snippet&maxResults=10`).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);
  if (!videoDetail?.snippet) return <Loader />;
  const { title, channelId, channelTitle } = videoDetail.snippet;
  return (
    <Box>
      <Box>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
          height="500px"
        />
      </Box>
      <Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5">{title}</Typography>
          <CheckCircleIcon color="primary" />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
        </Stack>
      </Box>
      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default VideoDetail
