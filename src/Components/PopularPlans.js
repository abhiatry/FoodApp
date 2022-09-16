import React from 'react'
import popularPlanImage  from './Public/popularPlanImage.jpg' 

function PopularPlans() {
  return (
    <div className='popularPlansDiv'>

        <h1 style={{marginLeft:'3.6rem', marginTop:'1rem', color:'white'}}>Popular Plans</h1>
            
        <div className="plan-list">


        <div className="card plan-card " style={{margin:'.3rem', backgroundColor:'rgb(255, 203, 196)'}}>
            <img src={popularPlanImage} className="card-img-top" alt="..." />
            <div className="card-body">
            <p className="card-text" style={{color:'black'}}>Burger</p>
            <p className="card-rating" style={{color:'black'}}>*****</p>
            </div>
        </div>


        <div className="card plan-card " style={{margin:'.3rem', backgroundColor:'rgb(255, 203, 196)'}}>
            <img src={popularPlanImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text" style={{color:'black'}}>Burger</p>
            <p className="card-rating" style={{color:'black'}}>*****</p>
            </div>
        </div>

        <div className="card plan-card " style={{margin:'.3rem', backgroundColor:'rgb(255, 203, 196)'}}>
            <img src={popularPlanImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text" style={{color:'black'}}>Burger</p>
            <p className="card-rating" style={{color:'black'}}>*****</p>
            </div>
        </div>

        <div className="card plan-card " style={{margin:'.3rem', backgroundColor:'rgb(255, 203, 196)'}}>
            <img src={popularPlanImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text" style={{color:'black'}}>Burger</p>
            <p className="card-rating" style={{color:'black'}}>*****</p>
            </div>
        </div>

        <div className="card plan-card " style={{margin:'.3rem', backgroundColor:'rgb(255, 203, 196)'}}>
            <img src={popularPlanImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <p className="card-text" style={{color:'black'}}>Burger</p>
            <p className="card-rating" style={{color:'black'}}>*****</p>
            </div>
        </div>

        </div>

        
    </div>
  )
}

export default PopularPlans