import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import DataTable from './DataTable'
import moment from "moment"
import Button from '@mui/material/Button';
import { Box } from '@mui/system'
import ToCook from './ToCook'

function Inventory(){
  const [particularOption, setParticularOption] = useState('')
  const [date, setDate] = useState('')
  const [fetchData, setfetchData] = useState([])
  const [tableData, settableData] = useState([])
  const [todoList, setTodoList] = useState([])
  
  const getData =(url) =>{
    fetch(url)
     .then((res) => res.json())
     .then((res) => {
        // console.log('set')
       setfetchData(res)
     })
  }
  
  // fetch today data
  // useEffect(() => {
  // }, []);
 // fetch specific dates data
 useEffect(() => {
  // console.log('called--')
  if (date && moment().format('yyyy-MM-DD') != moment(date).format('yyyy-MM-DD') ){
    const url = "https://fanta-backend12.herokuapp.com?date="+moment(date).format('yyyy-MM-DD');
    // console.log(date)
     getData(url);
  }else{
    const url = "https://fanta-backend12.herokuapp.com/";
    getData(url);
  }
}, [date]);

// date filter
  useEffect(()=>{
    // console.log(particularOption)
    // console.log(date)
    if (fetchData){
      settableData(fetchData.data)
      // settableData(tempData)
    }
    else{
      settableData([])
    }
  },[fetchData])
  // handle update value
  const handleSubmit =()=>{
    // const postData ={date:moment(date).format('yyyy-MM-DD'), data:tableData}
    if (tableData.length >0){
      fetch("https://fanta-backend12.herokuapp.com/", {
        method: "POST",
        body: JSON.stringify({
          date:moment(date).format('yyyy-MM-DD'),
          data:tableData
        }),
        headers: {
            "Content-type": "application/json"
        }
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }
  }

  return (
    <div>
        <Filter setParticularOption={setParticularOption} setDate={setDate}/>
        <DataTable setTodoList={setTodoList }  date={date} particularOption={particularOption} tableData={tableData} settableData={settableData}/>
        {/* update button */}
        <Box
          display="flex"
          justifyContent="center"
          margin={2}
          alignItems="center" >
          <Button  onClick={handleSubmit} variant="contained" color="success"  sx={{width:'15%'}} > update </Button>       
        </Box>
        <Box display="flex"
          justifyContent="center"
          alignItems="center"
          margin={5}
          >
          {/* toCook list */}
          <ToCook fetchData={fetchData}/>
        </Box>
    </div>
  )
}

export default Inventory

