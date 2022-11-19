import React, { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField'
import './Background.css';

export default function Mixedfeature({options,type,handleData}) {

   

  //let example = `Eg. ${maxscore}`;

  const [highscore, setHighscore] = useState('Enter test score');

  const [lowScore, setLowScore] = useState('');

  const [testname, setTestname] = useState('');

  const [textValue, setTextValue] = useState('');

  const [isSelect, setIsSelect] = useState(true);

  const [totalState, setTotalState] = useState({
    test:'',
    score:'',
    isValid: '',
  });


  // const selectText = () => {
  //   if(textValue=='select'){
  //     setIsSelect(true);
  //   }
  // };

  const handleTestname = (event) => {
    
    setTestname(event.target.value);
    if(event.target.value==='select'){
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }

  const handletextChange = (event) => {
    
    setTextValue(event.target.value);

    let a = Number(event.target.value) < Number(highscore);

    let b = Number(event.target.value) > Number(lowScore);

    if( a && b ) {
      
      setTotalState({
        test: testname,
        score: event.target.value,
        isValid: true
      });
    } else {
      
      setTotalState({
        test: testname,
        score: event.target.value,
        isValid: false
      });
    }

    
  }

  const changeScores = () => {
    for(let i=0;i<options.length;i++){
      if(testname==options[i].Test_Name) {
        setHighscore(options[i].Test_Max_Score);
        setLowScore(options[i].Test_Min_Score);
        break;
      }
    }
  }

  useEffect( () => {
    changeScores();
  }, [testname] );

  useEffect ( () => {
    handleData(totalState);
  }, [totalState]);

  return (

    <div>
    <Typography style={{marginLeft:'14px',paddingTop:'30px',color:'grey',fontWeight:'400',fontSize:'14px'}}> {type} </Typography>

    <div style={{display:'flex',flexDirection:'row'}}>
    
    <FormControl sx= {{ m: 1 ,marginLeft:'14px',width:'175px'}}>
      <NativeSelect
      onChange={handleTestname}
      value={testname}
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
    <option value='select'>Select Exam</option>
    {
      options.map( (opt,index) => (
        <option value={opt.Test_Name}>{opt.Test_Name} (Estimated)</option>
       ) )
    }
    
    </NativeSelect>
    
      </FormControl>
    <TextField 
      label={highscore}
      type="number" 
      variant="standard" 
      disabled={isSelect}
      style={{marginTop:'-5px',marginLeft:'-8px'}}
      value={textValue}
      onChange={handletextChange}
    >
        
    </TextField>
    </div>

    <div>

    {
      ( (Number(textValue) < Number(lowScore) || Number(textValue) > Number(highscore)  ) && textValue!='') ?  (<Typography style={{fontSize:'10px',width:'70%',marginLeft:'14px',color:'red',fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
      ].join(',')}}> Please enter GRE score between {lowScore} and {highscore} and in multiples of 1 only</Typography> ) : null
    }
    
    </div>
    
    </div>
  )
}
