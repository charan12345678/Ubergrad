import React, { useState, useEffect } from 'react'
import Newyork from '../166683_hero.jpg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext,TabList, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';
import Mixedfeature from './Mixedfeature';
import { getApiResponseObject } from './utils';

import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './Background.css';
import Dropdown from './dropdown';
import Courses from './Courses';
import University from './University';


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  marginTop:'-80px',
  marginLeft:'250px',
  height:'50px',
  width:'230px',
  borderRadius:'20px',
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

export default function Background() {

  const [value, setValue] = useState('1');

  const  [countriesData, setCountriesData] = useState([]);

  const [courseData, setCourseData] = useState([]);

  const [specializationData, setSpecializationData] = useState([]);

  let tagNames = [{name:'COUNTRY',option:'Select Country'},{name:'COURSE',option:'Select Course'},{name:'SPECIALIZATION',
  option:'Select Specialization'}];

  let options = [['US','UK','CANADA','AUSTRALIA'],['ENGINEERING','MANAGEMENT','MEDICAL'],['DUMMY','DUMMY']];

  const [optionsData, setOptionsData] = useState([]);

  const [country, setCountry] = useState('');

  const [course, setCourse] = useState('');

  const [specialization, setSpecialization] = useState('');

  const [aptitude, setAptitude] = useState([]);

  const [elp , setElp] = useState([]);

  const [aptiData, setAPTIdata] = useState({});

  const [elpData, setElpdata] = useState({});

  const [testScores, setTestScores] = useState([]);

  const [percentage, setPercentage] = useState([]);

  const [textValue, setTextValue] = useState('');


  let aptiDataLower =     aptiData?.test?.toLowerCase(); 

  let elpDataLower =  elpData?.test?.toLowerCase();

  let gpamax = 100;

  let queryParam = `https://api.ubergrad.in/university/fetchuniversitylistbyscore/?country=${country}&program=${specialization}&aptitude_type=${aptiDataLower}&aptitude_score=${aptiData.score}&el_type=${elpDataLower}&elp_score=${elpData.score}&gpa_max=${gpamax}&gpa_score=${textValue}`;

  let newQueryparam = queryParam.replace(/\s+/g, '-');

  let URL ="https://api.ubergrad.in/options/fetchengineoptions/";


  const handleSearch = async () => {

    if( (aptiData.isValid===true) && (elpData.isValid===true)) {
      debugger
      let response = await getApiResponseObject(newQueryparam);

      if(response){
        alert('Please check the network tab in dev tools for the response');
      } else {
        alert(response.status);
      }
    } else {
      alert("Enter valid scores");
    }
      
  };

  const fetchOptionsData = async () => {

    let response = await getApiResponseObject(URL);

    if(response) {
       setOptionsData(response.data);
       

       let countryCount =[];
       let coursecount = [];

       let apti = [];
       let elpscore = [];
      
          for(let i=0;i<response.data.Countries.length;i++)
          {
            let newArr=[];
               for(let j=0;j<1;j++){
                newArr.push(response.data.Countries[i].Country_Name,response.data.Countries[i].id)
               }
            countryCount.push(newArr);
          }

          for(let i=0;i<response.data.Study_Area.length;i++)
          {
            let newArr=[];
               for(let j=0;j<1;j++){ 
                newArr.push(response.data.Study_Area[i].Course_Master_Name,response.data.Study_Area[i].id);
               }
            coursecount.push(newArr);
          }

          for(let i=0;i<response.data.TestScores.length;i++){
            if(response.data.TestScores[i].Test_Type=='Aptitude') {
              
              apti.push(response.data.TestScores[i]);
            } else {
                elpscore.push(response.data.TestScores[i]);
            }
                
          }

          // apti.push('Not Applicable');


        setAptitude(apti);
        setElp(elpscore);
         
        setCountriesData(countryCount);
        setCourseData(coursecount);
        setTestScores(response.data.TestScores);
        
      
    } else {
      console.log(response.status);
    }
  };


  const specializationChanges = () => {

    if(optionsData){

      let specializedData = [];

      if(course==1) {
        for(let i=0;i<optionsData.Specialization.length;i++)
      {
        if(optionsData.Specialization[i].Reference_Catalog_ID == 1)
        {
          let newArr=[];
               for(let j=0;j<1;j++){ 
                newArr.push(optionsData.Specialization[i].Course_Master_Name,optionsData.Specialization[i].id);
               }
          specializedData.push(newArr);
        }
      
      }
      } else if(course==2) {
        for(let i=0;i<optionsData.Specialization.length;i++) {
          if(optionsData.Specialization[i].Reference_Catalog_ID == 2) {
            let newArr=[];
               for(let j=0;j<1;j++){ 
                newArr.push(optionsData.Specialization[i].Course_Master_Name,optionsData.Specialization[i].id);
               }
          specializedData.push(newArr);
          }  
        }
        
      } else if(course==4) {
        
        for(let i=0;i<optionsData.Specialization.length;i++) {
          if(optionsData.Specialization[i].Reference_Catalog_ID == 4) {
            let newArr=[];
               for(let j=0;j<1;j++){ 
                newArr.push(optionsData.Specialization[i].Course_Master_Name,optionsData.Specialization[i].id);
               }
          specializedData.push(newArr);
          } 
        }  
      }
      
    setSpecializationData(specializedData);
    }
      
  };

  useEffect( () => {
    fetchOptionsData();
  }, []);

  useEffect( () => {
    specializationChanges();
  }, [optionsData,course]);


  const handleAPTIData = (totalval) => {
     setAPTIdata(totalval);
  };

  const handleELPData = (totalval) => {
    setElpdata(totalval);
 };


  const handleCountry = (event) => {
    
    setCountry(event.target.value);
  };

  const handleCourse = (event) => {
    setCourse(event.target.value);
  };

  const handleSpecialization = (event) => {
    setSpecialization(event.target.value);
  };

  const handletextChange = (event) => {
    
    setTextValue(event.target.value);
  }

  let width= '300px';

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className='background_image'>
    
    <Typography style={{display:'flex',flexDirection:'row',paddingTop:'30px',
    justifyContent:'center',color:'white',
    fontWeight:500,fontSize:'1.8vw'}} >
    Get Customised and Personalised Help to &nbsp;
    <span style={{color:'#ff7f50'}}> APPLY & ENROLL</span>  &nbsp;  at Top Universities Abroad
    </Typography>

   <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems :'center',marginTop:'50px'}}> 
      <div className='secondCard'>
        <Typography h5 style={{textAlign:'center',marginTop:'12px',fontWeight:'600',fontSize:'18px',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
        ].join(',')
      }}> Search By</Typography>
      </div>
    </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems :'center'}}>  
   <div className='newCard'>
    <TabContext value={value} sx={{marginTop:'50px'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider',marginLeft:'20px',borderBottom:'2px solid black'}}> 
            <TabList onChange={handleChange} sx= {{
              '& button.Mui-selected': {
              color: '#ffa500',
              
            },
            }} TabIndicatorProps={{sx: {backgroundColor:'#ffa500'}}}>
              <Tab label="Exam Scores" value="1" style={{width:'200px',height:'80px',borderRight:'2px solid #c0c0c0'}}/>
              <Tab label="Courses" value="2" style={{width:'200px',borderRight:'2px solid #c0c0c0'}}/>
              <Tab label="University" value="3" style={{width:'200px'}}/>
            </TabList>
          </Box>
          <TabPanel value="1">
          <div className='thirdCard'>
           
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
    
          <Dropdown name ={tagNames[0]} option={countriesData} selectedValue={country} handleValue={handleCountry}> </Dropdown>
          <Dropdown name ={tagNames[1]} option={courseData} selectedValue={course} handleValue={handleCourse}> </Dropdown>
          <Dropdown name ={tagNames[2]} option={specializationData} selectedValue={specialization} handleValue={handleSpecialization}> </Dropdown>
          </div>
           
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <Mixedfeature options={aptitude} handleData={handleAPTIData} type="APTITUDE TEST" ></Mixedfeature>
        <Mixedfeature options={elp} handleData={handleELPData} type="ENGLISH TEST" ></Mixedfeature>

        <div style={{paddingTop:'44.5px',display:'flex',flexDirection:'row',marginLeft:'15px'}}>
        
        <TextField 
        label="Standard" 
        variant="standard" 
        type="number"
        style={{width:'145px'}} 
        value={textValue}
        onChange={handletextChange}></TextField>
        <p> Out of</p>
        <FormControl sx={{ m: 1 ,width:'145px',marginTop:'15px'}}>
            <NativeSelect
            value={1}
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
        <option value={1}>100%</option>
          
          
    </NativeSelect>
    
      </FormControl>

      </div>
        </div>

          </div>
          </TabPanel>
          <TabPanel value="2"> <div className='courseCard'>
          <University></University>
          </div>
          </TabPanel>
          <TabPanel value="3">
          <div className='courseCard'>
          <University></University>
          </div>
          </TabPanel>
        </TabContext>

        <BootstrapButton variant="contained" disableRipple onClick={handleSearch}>
            SEARCH
          </BootstrapButton>
        </div>
        </div>
        
    <div style={{height:'400px'}}> </div>
    
    </div>
  )
}
