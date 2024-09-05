import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import VideoDetail from './Components/VideoDetail'
import ChannelDetail from './Components/ChannelDetail'
import SearchFeed from './Components/SearchFeed'

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </Router>
  )
}

export default App
