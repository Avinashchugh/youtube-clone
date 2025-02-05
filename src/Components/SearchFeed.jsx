import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import Videos from "./Videos"
import FetchFromApi from "../utils/FetchFromApi"
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchTerm}&type=video`)
      .then(data => setVideos(data.items))
      .catch(err => console.log(err))
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
