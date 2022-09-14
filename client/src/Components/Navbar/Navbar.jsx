import React from 'react'
import "./Navbar.css"
import LocationOn from '@mui/icons-material/LocationOn';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='Container'>
        <div className="box">
            <div>
              <h3 style={{fontSize:"30px",marginTop:"5px"}}>
                <Link to="/">Scooty Rental</Link>
              </h3>
            </div>
            <div>
                <div className="location">
                  <LocationOn/>
                  <p> Delhi </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar