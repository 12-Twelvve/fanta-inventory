import React, {useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePickr from '../DatePicker';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import moment from "moment"

function Kot() {
    const [branch, setbranch] = useState("durbarmarg");
    const [date, setdate] = useState('')   
    const [data, setdata] = useState([])
    // fetch data 
    const fetchKots =(url)=>{
      fetch(url)
      .then(response => response.json())
        .then(dt => {
            setdata(dt)
            // console.log(data)
        }).catch(err=>{
          console.log(err)
        })
    }

    useEffect(()=>{
      let brnch = "";
      if(branch=="kumaripati"){
        brnch = "kumaripati_kot"
      }
      else{
        brnch = "durbarmarg_kot"
      }
      if (date && moment().format('yyyy-MM-DD') != moment(date).format('yyyy-MM-DD') ){
        const url = "https://fanta-backend12.herokuapp.com/"+brnch+"?date="+moment(date).format('yyyy-MM-DD');
        // console.log(date)
         fetchKots(url);
      }else{
        const url = "https://fanta-backend12.herokuapp.com/"+brnch;
        fetchKots(url);
      }
    },[date, branch])
      // handle data
    const handleChange = (event) => {
      setbranch(event.target.value);
    };
  
    return (
      <Box >
          <Box 
          display="flex"
          sx={{m:3,mt:5, gap:1,}} 
          justifyContent="center"
          >
          <FormControl sx={{ minWidth: 300,mr:2, }}>
              <InputLabel id="branch-id">Branch</InputLabel>
              <Select
              labelId="branch-id"
              id="branch-select"
              value={branch}
              label="Branch"
              onChange={handleChange}
              >
              <MenuItem value={"durbarmarg"}>Durbarmarg</MenuItem>
              <MenuItem value={"kumaripati"}>Kumaripati</MenuItem>
              </Select>
          </FormControl>
          <DatePickr setDate={setdate}/>
        </Box> 
        {/* data-orders-kots */}
        <Box display="flex"
            flexWrap='wrap'
          sx={{m:3,mt:5, gap:3,}} 
          justifyContent="center">
        {data.map(o=>o.kot.map(kt =><KotCard kot={kt}/>))}
        </Box>
    </Box>
    )
}

const KotCard =({kot})=>{
    return(
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {kot?.kotId}
        </Typography>
        <Box color="text.secondary" sx={{ display:'flex',fontSize: 14, justifyContent:'space-around'}}>
        <Typography variant="body2">
          items
        </Typography>
        <Typography variant="body2">
          quantity
        </Typography>
        </Box>
        <hr/>
        {/* map through */}
        {kot?.items.map(k=>(
        <Box sx={{ display:'flex',fontSize: 14, justifyContent:'space-around'}}>
            <Typography variant="body2">
            {k?.title}
            </Typography>
            <Typography variant="body2">
            {k?.quantity}
            </Typography>
        </Box>))}
      </CardContent>
    </Card>
    )
}

export default Kot