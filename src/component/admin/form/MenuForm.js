import React from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
// import Grid from '@mui/material'

function MenuForm({defaultData}) {
  return (
    <Box
    display='flex'
    flexDirection='column'
    m={2}
    rowGap={4}
    >
        {/* inputs::
            itemName
            itemFamily
            itemPrice
         */}
        <TextField
          required
          id="itemName"
          label="Item Name"
          placeholder='item name e.g. jhol momo'
          defaultValue={(defaultData.itemName)?defaultData.itemName:''}
        />
        <TextField
          required
          id="itemFamily"
          label="Item Family"
          placeholder='item family e.g. momo'
          defaultValue={(defaultData.itemFamily)?defaultData.itemFamily:''}
        />
        <TextField
          required
          id="itemPrice"
          label="Item Price"
          type='number'
          placeholder='price'
          defaultValue={(defaultData.itemPrice)?defaultData.itemPrice:''}
        />
    </Box>
  )
}

export default MenuForm
