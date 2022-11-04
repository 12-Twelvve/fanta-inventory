import React, {useState, useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const dta = [
    {'itemName': 'momo achar', "qty":"5"},
    {'itemName': 'piro achar', "qty":"3"},
]

function ToCook({fetchData}) {
  const [tocookList, setcookList] = useState([])
  const getTodoItem =()=>{
  }
  
   useEffect(() => {
    //  console.log(fetchData)
    const li = ['green','yellow','blue']
    fetchData?.data?.map(parti=>{
      parti.plist.map(item=>{
        if (Number(item.tomorrow_order)<=Number(item.minvalue)){
          li.push(item.pname)
        }
      })
    })
    setcookList(li)
   },[fetchData])
   
  return (
    <Box sx={{ width: '70%', bgcolor: '#f1f1f3' }}>
        {/* heading */}
        <Typography gutterBottom align='center' variant="h5" component="div">
            To Cook list
          </Typography>
        {/* list */}
        {/* map through each item */}
        {tocookList?.map((item, index )=>(
        <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemText align='center' primary={item} />
              {/* <ListItemText align='center' primary={li.qty} /> */}
            </ListItemButton>
            {/* <Divider color={'white'} /> */}
          </ListItem>))}
        <List>
        </List>
    </Box>
  )
}
// rgba(71, 98, 130, 0.2)---color
// bgcolor: 'rgba(71, 98, 130, 0.2)'
export default ToCook