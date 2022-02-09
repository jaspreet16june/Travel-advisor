import React from 'react'
import "./list.css"
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";



const List = () => {
  return (
    <div className="container">
      <Typography variant="h4">Food & Dining around you</Typography>
          <FormControl className="formControl">
            <InputLabel id="type">Type</InputLabel>
            <Select id="type">
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='formControl'>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          </div>
  )
}

export default List