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
  // fetch datas 
  useEffect(() => {
    const url = "https://fanta-backend12.herokuapp.com/";
    const getData =() =>{
       fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setfetchData(res)
        })
    }
    getData();
  }, []);
// date filter
  useEffect(()=>{
    // console.log(particularOption)
    // console.log(date)
    if (fetchData.length>0){
      // console.log(fetchData)
      let tempData = fetchData.find((li)=>(moment(li.date).format('yy MM DD')==date))
      if (tempData){
        settableData(tempData.data)
        // settableData(tempData)
      }
      else{
        settableData([])
      }
    }
  },[date, fetchData])
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
  useEffect(()=>{
    console.log('hello sunshine')
  },[tableData])

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
          <ToCook todoList={todoList}/>
        </Box>
    </div>
  )
}

export default Inventory

