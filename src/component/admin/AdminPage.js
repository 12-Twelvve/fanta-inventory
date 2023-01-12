import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import { List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuForm from './form/MenuForm';
import {Typography} from '@mui/material';
import RecipeForm from './form/RecipeForm';
import KitchenStockForm from './form/StockForm';

function AdminPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [formoption, setformoption] = React.useState(false);
  const [newdata, setnewdata] = React.useState(true);
  const [defaultData, setdefaultData] = React.useState({});
  
  const sideItem=['Menu', 'Recipe' , 'Main kitchen Stock']
  const handleAdd =()=>{
    setformoption(true)
    setnewdata(true)
  }
  const handleUpdate = (m)=>{
    setdefaultData(m)
    setformoption(true)
    setnewdata(false)
  }
  const handleSideBar =()=>{
    // console.log('ccc')
    setformoption(false)
    setnewdata(true)
    setdefaultData({})
  }
  const handleCancel =()=>{
    setformoption(false)
    setnewdata(true)
    setdefaultData({})
  }
  const handleSave = ()=>{
    setformoption(false)
    setnewdata(true)
    setdefaultData({})
  }
  const handleDelete = ()=>{
    setformoption(false)
    setnewdata(true)
    setdefaultData({})
  }

  return (
    <Grid container spacing={2}>
      {/* side bar */}
      <Grid item xs={2}>
        <SideBar handleSideBar={handleSideBar} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} sideItem={sideItem}/>
      </Grid>
      {/* update space */}
      <Grid item xs={10}>
          {formoption?<>
          {/* form and savedelete option */}
            {(selectedIndex===1)?<MenuForm defaultData={defaultData}/>:
              selectedIndex==2?<RecipeForm defaultData={defaultData}/>:<KitchenStockForm/>}
           {/* recipe form and stock form */}
           <SaveDeleteBar newdata={newdata} handleCancel={handleCancel} handleDelete={handleDelete} handleSave={handleSave} />
           {/* newdata={newdata} setformoption={setformoption} */}
           </>
           :
           (<>
            {/* add and get values  or empty*/}
          <AddNewBar  handleAdd={handleAdd} content={sideItem[selectedIndex-1]}/>
          <GetData handleUpdate={handleUpdate} content={sideItem[selectedIndex-1]}/>
          </>) 
          }         
          {/* <MenuForm itemPrice={123} itemFamily="momo" itemName="steamed momo"/> */}

      </Grid>
    </Grid>
  )
}

// get data
function GetData({handleUpdate, content}){
  const [data, setdata] = useState([])
  const menus =[
    {"itemName":'jhol momo',"itemFamily":"momo", "itemPrice":124},
    {"itemName":'steam momo',"itemFamily":"momo", "itemPrice":154},
    {"itemName":'fry momo',"itemFamily":"momo", "itemPrice":114}
  ]
  const recipe =[
    {"itemName":'jhol momo',"recipe":"momo, jhol, achar"},
    {"itemName":'fry momo',"recipe":"mo oomo"},
    {"itemName":'momo',"recipe":"mo mo"},
  ]
  useEffect(() => {  
      if (content =='Menu'){
        setdata(menus)
      }else if(content =='Recipe'){
        setdata(recipe)
      }else{
        setdata([])
      }
  }, [content])
  
  return (
    <Box
      sx={{
        width: '100%',
        height:'70vh',
        overflow:'scroll'
      }}
      >
        <List>
          {data.map(m=>(<ListItemButton
                divider={true}
                onClick={() => handleUpdate(m)}
                key={m.itemName}
                >
              <ListItemText primary={m.itemName} />
          </ListItemButton>))}
        </List>
  </Box>
  )
}

// add bar
function AddNewBar({content, handleAdd}){
  return(
    <Box display="flex" flexDirection="row-reverse" m ={2}>
      <Button 
      onClick={()=>{handleAdd()}}
      variant="contained" sx={{backgroundColor:'orange'}}>Add {content}</Button>
    </Box>
  )
}
// update bar
function SaveDeleteBar({handleSave, handleCancel,handleDelete, newdata}){
  return(
    <Box display="flex" flexDirection="row-reverse" m={3}>
      <Button  onClick={()=>handleSave()} variant="contained"  sx={{backgroundColor:'orange'}}>Save</Button>
      <Button onClick={()=>handleCancel()} variant="contained"  sx={{backgroundColor:'gray'}}>Cancel</Button>
      {newdata?'':
      <Button onClick={()=>handleDelete()} variant="contained" sx={{backgroundColor:'red', marginRight:5}}>Delete</Button>
      }
    </Box>
  )
}


// side bar
function SideBar({handleSideBar, selectedIndex, setSelectedIndex, sideItem}){
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleSideBar()
  };
  return(
  <Box
      sx={{
        width: 200,
        height:'90vh',
        backgroundColor: 'orange',
      }}
      >
        <List>
          {
            sideItem.map((item, i)=>{
            return (<ListItemButton
              // divider={true}
              key={i}
              onClick={(event) => handleListItemClick(event, i+1)}
              sx={{
                ...(selectedIndex == i+1 && {
                  backgroundColor:'white',
                }
                  ),
                '&:hover': {
                  backgroundColor: 'white',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>)
            })
          }
      </List>
  </Box>
  )
}

export default AdminPage
