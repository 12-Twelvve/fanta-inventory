import React from 'react'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
// import Grid from '@mui/material'

function RecipeForm({defaultData}) {
  return (
    <Box
    display='flex'
    flexDirection='column'
    m={2}
    rowGap={4}
    >
        <TextField
          required
          id="item_name"
          label="Item Name"
          placeholder='item name e.g. jhol momo'
          defaultValue={(defaultData.itemName)?defaultData.itemName:''}
        />
        <TextField
          required
          id="recipeList"
          label="Recipe list"
          placeholder='list of recipe'
          defaultValue={(defaultData.recipe)?defaultData.recipe:''}
        />
        
    </Box>
  )
}

export default RecipeForm
