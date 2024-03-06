import { IconButton, Paper } from '@mui/material';
import React, { useState } from 'react'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useDispatch } from 'react-redux';

function SearchBar() {
    const dispatch=useDispatch()
    const [query,setQuery]=useState("");

    const searchFunction=()=>{
      let timer
      return function(e){
        e.preventDefault()
        clearTimeout(timer)
      timer=setTimeout(()=>{dispatch((e.target.value))},500)
      }
    }
    let mainSearch=searchFunction()
  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"50%",color:"black", marginLeft:"25%",
     boxShadow:'0.5rem 0.5rem 0.8rem black',
     }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1,fontWeight:"bold"}}
      placeholder="Search Here For Jobs"
      inputProps={{ 'aria-label': 'search google maps' }}
      onKeyUp={(e)=>{setQuery(e.target.value);
        mainSearch(e)}}
      
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
   
   
  </Paper>
  )
}

export default SearchBar