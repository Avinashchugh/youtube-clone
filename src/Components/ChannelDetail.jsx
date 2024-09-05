import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import FetchFromApi from '../utils/FetchFromApi'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState({})
  const [videos, setVideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    FetchFromApi(`channels?part="snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    })
    FetchFromApi(`search?channelId=${id}&part=snippet&order=data`).then((data) => {
      setVideos(data?.items);
    })
  }, [id])
  return (
    <Box minHight={"95vh"}>
      <Box>
        <div style={{
          background: 'linear - gradient(90deg, rgba(2, 0, 36, 1) 0 %, rgba(210, 0, 170, 1) 0 %, rgba(0, 212, 255, 1) 100 %)', zIndex: 10, height: '300px'
        }}>
          <ChannelCard channelDetail={channelDetail} />
        </div>
      </Box>
    </Box>
  )
}

export default ChannelDetail
