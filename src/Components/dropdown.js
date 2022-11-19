import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';
import './Background.css';

export default function Dropdown({name,option,selectedValue,handleValue}) {

  return (
    <div>
     <Typography style={{marginLeft:'20px',paddingTop:'30px',color:'grey',fontWeight:'400',fontSize:'14px'}}> {name.name} </Typography>
    <FormControl sx={{ m: 1 ,marginLeft:'20px',width:'350px',height:'50px',marginTop:'5px'}}>
      <NativeSelect
      onChange={handleValue}
      value={selectedValue}
      select
      label="Select"
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

    <option value=''>{name.option}</option>
    {
      option.map( (opt,index) => (
        <option value={opt[1]}>{opt[0]}</option>
       ) )
    }
    {/* <option value={1}>All About GMAT</option>
      <option value={10}>All About GRE</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
  <option value={40}>{option}</option> */}
    </NativeSelect>
    
      </FormControl>

    </div>
  )
}
