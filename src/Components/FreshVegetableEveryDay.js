import React from 'react'
import vegetable from './Public/vegetable.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function FreshVegetableEveryDay() {
  return (
    <div className='fved-cont'>
       
        <div className="fved-right-cont">
            <h1>Fresh Vegetables <br /> Every Day</h1>
            <p>We present various types of fresh vegetables <br /> and taken directly from the farmer's garden <br /> especially for you.</p>
            <div className="learn-more-btn">
                Learn More <ArrowRightIcon />
            </div>
        </div>

        <div className="fved-left-cont" >
            <img src={vegetable} alt="" />
        </div>
    </div>
  )
}

export default FreshVegetableEveryDay