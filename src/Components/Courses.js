import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext,TabList, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';
import Mixedfeature from './Mixedfeature';

import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './Background.css';
import Dropdown from './dropdown';

export default function Courses() {

  <div>
  <Typography style={{marginLeft:'250px',paddingTop:'30px',color:'grey',fontWeight:'400',fontSize:'14px'}}> UNIVERSITY </Typography>
  <FormControl sx={{ m: 1 ,marginLeft:'250px',width:'750px',height:'50px',marginTop:'5px'}}>
    <NativeSelect
    value={40}
    style={{fontWeight:600,fontSize:'18px',
      fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
    ].join(','),}}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
  <option value={1}>All About GMAT</option>
    <option value={10}>All About GRE</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option>
    <option value={40}>Forty</option>
  </NativeSelect>
  
    </FormControl>
  </div>
 
}
