import { Link } from 'react-router-dom'
import React from 'react'
import planImage  from './Public/planImage.jpg' 


function PlansMenu() {
  return (
  <>

    <div className='plansMenuDiv' style={{display:'flex'}}>
        <img src={planImage} className="card-img-top" alt="..." style={{margin:'10vh 0 0 10vh', width:'70vh', height:'60vh'}}/>
        
        <div style={{width:'80vh',height:'50vh',padding:'4vh',margin:'15vh 0 0 25vh'}}>
            <h1 style={{color:'red',paddingBottom:'4vh'}}>Our lovely customer loves our restaurant</h1>
            <p1 style={{display:'block'}}>Food is as much about the moment, the occasion, the location and the company as it is about the taste. Food is not rational. Food is culture, habit, craving and identity.</p1>
            <Link to="/ourplans" style={{textDecoration:'none'}}><button type="button" className="btn btn-outline-success" style={{margin:'3vh 0 0 0'}}>Explore Plans</button></Link>
        </div>

    </div>

    <div style={{width:'100%' ,height:'5vh',backgroundColor:'rgb(32, 78, 32)', marginBottom:'2vh'}}></div>
    </>
  )
}

export default PlansMenu