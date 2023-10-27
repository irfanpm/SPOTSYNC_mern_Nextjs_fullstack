// YourComponent.js
'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled ,alpha} from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Googlelocation from './location';
import Logo from '../public/spotsynclogo.png'
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.light, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  // marginRight: theme.spacing(2),
  marginLeft: "auto",
  width: '100%',
  border:"2px solid",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));




function Navbar1() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"white" , color:'#040333' }} >
       <Container  >

        <Toolbar  >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image src={Logo} alt="spot" width={70} height={50}/>
          </Typography>
          <Search sx={{ marginLeft: 'auto' }}  >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        
          </Search>
          <Googlelocation />


      
          
          <Box sx={{ flexGrow: 1 }} />



          <Button style={{color:"#040333"}}><MenuIcon/></Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar1;
