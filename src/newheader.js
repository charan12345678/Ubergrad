import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Ubergrad from './Ubergrad_transparent-logo.png';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import newheader from './newheader.css';


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '6px 12px',
  height:'35px',
  borderRadius:'24px',
  lineHeight: 1.2,
  backgroundColor: '#ff7f50',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#ffa500',
    borderColor: '#0062cc',
    boxShadow: '2px 2px 2px #888888',
  },
  
});

const AntTabs = styled(Tabs)({
  
  '& .MuiTabs-indicator': {
    backgroundColor: '#f5c71a',
    borderBottom: '1px solid #f5c71a',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  marginRight: theme.spacing(0),
  color: 'black',
  fontSize:'16px',
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
  ].join(','),
  '&:hover': {
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'black',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({

  width:'100px',
  'label + &': {
    marginTop: theme.spacing(0.2),
  },
  '& .MuiInputBase-input': {
    border: 'none',
    position: 'relative',
    fontSize: '1vw',
    padding: '10px 0px 10px 22px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
    ].join(','),
    '&:focus': {
      backgroundColor:'none',
    },
  },
}));


function Newheader () {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const pages = ['Products', 'Pricing', 'Blog'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [value, setValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState('');
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const doSomething = () => {
     console.log('You can do it');
  };

  return (
    <div>
    <AppBar position="static" style={{backgroundColor:'#ffe135',height:'60px'}} >
      <Container maxWidth="xl">
      
        <Toolbar disableGutters >
          
          
          <Box sx={{ display: { xs: 'flex', md: 'none' ,color:'black' } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <img src={Ubergrad}  style={{height:'45px',width:'180px',marginLeft:'20px'}}>
          
          </img>

          <div className="dropdownContainer">
      <FormControl sx={{ m: 1 }}>
        
      <NativeSelect
      value={40}
      style={{fontWeight:600,width: '125px'}}
      inputProps={{
        name: 'age',
        id: 'uncontrolled-native',
      }}
      input={<BootstrapInput />}
    >
      <option value={1}> Study in the USA</option>
      <option value={10}>Study in the UK</option>
      <option value={20}>Study in Australia</option>
      <option value={30}>Study in Canada</option>
      <option value={40}>Countries</option>
    </NativeSelect>
    
      </FormControl>

      <FormControl sx={{ m: 1 ,marginLeft:'-20px'}}>
        
      <NativeSelect
      value={40}
      style={{fontWeight:600, width: '140px'}}
      inputProps={{
        name: 'age',
        id: 'uncontrolled-native',
      }}
      input={<BootstrapInput />}
    >
    <option value={1}>All About GMAT</option>
      <option value={10}>All About GRE</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
      <option value={40}>Universities</option>
    </NativeSelect>
    
      </FormControl>

      <FormControl sx={{ m: 1 , marginLeft:'-20px'}}>
        
      <NativeSelect
      value={40}
      style={{fontWeight:600,width:'115px'}}
      inputProps={{
        name: 'age',
        id: 'uncontrolled-native',
      }}
      input={<BootstrapInput />}
    >
    <option value={1}>All About GMAT</option>
      <option value={10}>All About GRE</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
      <option value={40}>Courses</option>
    </NativeSelect>
    
      </FormControl>

      <FormControl sx={{ m: 1 ,marginLeft:'-20px'}}>
        
      <NativeSelect
      value={40}
      style={{fontWeight:600}}
      inputProps={{
        name: 'age',
        id: 'uncontrolled-native',
      }}
      input={<BootstrapInput />}
    >
    <option value={1}>All About GMAT</option>
      <option value={10}>All About GRE</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
      <option value={40}>Exams</option>
    </NativeSelect>
    
      </FormControl>
      </div>

        <div className='tabsContainer'> 
      <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Event"/> 
          <AntTab label="Store" />
          </AntTabs>
    
          </Box>
          </div>

          <div className="loginButton">

          <div> 
          <BootstrapButton variant="contained" disableRipple>
            TALK TO UBERGRAD COUNSELLOR
          </BootstrapButton>
          </div>
          
          <div> 
          <Typography style={{fontWeight:600,color:'black',marginLeft:'20px',marginTop:'5px',fontSize:'16px', fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
          ].join(',')}}> Login  /  Sign Up </Typography>
          </div>
          </div>

          
        </Toolbar>
        
      </Container>
    </AppBar>
    
    </div>
    
  )
}

export default Newheader;