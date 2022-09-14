import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import data from "../../data.json"
import {SingleVehicle} from './singleVehicle'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Vehicle() {
  
  let area = localStorage.getItem("outletarea")
  const time = new Date();
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <h2>Scooty available in {area}</h2>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.vehicle.map((el) => (
          <Grid item xs={2} sm={4} md={4} key={el.id}>
            <Item><SingleVehicle key={el.id} {...el} expiryTimestamp={time} /></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
