import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const NavBarTwo = (props) => {

  const handleChange = (event) => {
        props.setHitsPerPage(event.target.value)
  };
  const handleChange2 = (event) => {
    props.setFilter(event.target.value) 
};

const handleChange3 = (event) => {
  props.setSearch(event.target.value) 
};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='appbartwo' position="static">
      

        <Toolbar className="toolbar">




          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           
          </IconButton>



          <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Results per Page</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.hitsPerPage}
          onChange={handleChange}
          autoWidth
          label="Results"
        >
          
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="25">25</MenuItem>
          <MenuItem value="50">50</MenuItem>
          <MenuItem value="100">100</MenuItem>

        </Select>
      </FormControl>
    </div>



        <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Filter By ...</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.filter}
          onChange={handleChange2}
          autoWidth
          label="FIlterBy"
        >
          
       
          <MenuItem value="&numericFilters=points>300">More than 300 points</MenuItem>
          <MenuItem value="&numericFilters=num_comments>50">More than 50 comments</MenuItem>

        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort By ...</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.search}
          onChange={handleChange3}
          autoWidth
          label="SortBy"
        >
          
          <MenuItem value="search_by_date">Newest</MenuItem>

        </Select>
      </FormControl>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBarTwo;