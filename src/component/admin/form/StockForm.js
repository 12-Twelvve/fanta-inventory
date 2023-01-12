import React from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
// import Grid from '@mui/material'

function KitchenStockForm({defaultData}) {
  return (
    <Box
    display='flex'
    flexDirection='column'
    m={2}
    rowGap={4}
    >
        <TextField
          required
          id="stock_item"
          label="Stock Item"
          placeholder='stock item name e.g. momo'
          defaultValue={(defaultData.itemName)?defaultData.itemName:''}
        />
    </Box>
  )
}

export default KitchenStockForm
