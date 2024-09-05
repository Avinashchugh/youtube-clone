import React from 'react'
import { Stack } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'; // import the required icons
import CodeIcon from '@mui/icons-material/Code';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

const categories = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'JS Mastery', icon: <CodeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Movie', icon: <OndemandVideoIcon /> },
  { name: 'Gaming', icon: <SportsEsportsIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
  { name: 'Education', icon: <SchoolIcon /> },
  { name: 'Sport', icon: <FitnessCenterIcon /> },
  { name: 'Fashion', icon: <CheckroomIcon /> },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
  { name: 'Podcast', icon: <GraphicEqIcon /> },
  { name: 'Crypto', icon: <DeveloperModeIcon /> },
  { name: 'Comedy', icon: <TheaterComedyIcon /> },
  // other categories ...
];
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack direction={'row'} sx={{ overflowY: "auto", height: { sx: 'auto', md: '92vh' }, flexDirection: { md: 'column' } }}>
      {categories.map((category) => {
        return <button className='category-btn' onClick={()=>setSelectedCategory(category.name)} key={category.name} style={{ background: category.name === selectedCategory && '#FC1503', color: 'white' }}><span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: '15px' }}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
        </button>
      })}
    </Stack>
  )
}

export default Sidebar
