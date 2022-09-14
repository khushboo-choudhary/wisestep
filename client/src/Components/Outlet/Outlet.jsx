import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import "./outlet.css"

const Outlet = () => {
  const navigate = useNavigate()

  const selectScooty = (area)=>{
    localStorage.setItem("outletarea",area)
    navigate("/vehicle")
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    width: "auto",
    color: theme.palette.getContrastText(pink[700]),
    backgroundColor: pink[700],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

  return (
    <div>
        <h3>Select your area</h3>
        <div className='main' >
            <div id="box1" onClick={()=>selectScooty("BTM")}><ColorButton id="btn" size="large" variant="contained">BTM</ColorButton></div>
            <div id="box2" onClick={()=>selectScooty("IndraNagar")}><ColorButton id="btn" size="large" variant="contained">Indra Nagar</ColorButton></div>
            <div id="box3" onClick={()=>selectScooty("Rajaji Nagar")}><ColorButton id="btn" size="large" variant="contained">Rajaji Nagar</ColorButton></div>
            <div id="box4" onClick={()=>selectScooty("HSR Layout")}><ColorButton id="btn" size="large" variant="contained">HSR Layout</ColorButton></div>
            <div id="box5" onClick={()=>selectScooty("Koramangala")}><ColorButton id="btn" size="large" variant="contained">Koramangala</ColorButton></div>
            <div id="box6" onClick={()=>selectScooty("Maruthi Layout")}><ColorButton id="btn" size="large" variant="contained">Ashok Nagar</ColorButton></div>
        </div>
    </div>
  )
}

export default Outlet