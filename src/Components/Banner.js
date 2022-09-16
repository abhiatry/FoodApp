import React from 'react'
import bannerImage  from './Public/bannerImage.png' 
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function Banner() {
    return (
      <div className='bannerDiv'>

        <div style={{margin:'15vh 0 0 15vh', width:'50%'}}>
        <h1 style={{color:'red'}}>Are You Hungry?</h1>
        <h3>Enjoy Our Delicious Food</h3> 
        <p>We will serve you the best</p>
        <button type="button" className="btn btn-outline-success">Order Food Now</button>
        </div>

        <div className='bannerImageDiv' style={{width:'50%'}}>
        <img className='bannerImage' src={bannerImage} alt='bannerImage' style={{width:'90%',height:'90%'}}/>
        </div>

      </div>
    )
}


export default Banner


