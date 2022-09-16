import { borderRadius } from '@mui/system';
import React from 'react'
import testo from './Public/testo.png'
import testoLogo from './Public/testoLogo.png'
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Testonomials() {
  return (
    <>
    <div className='testonomial-cont'>
        <div className="left-testonomial-cont">
            <img src={testo} alt="" />
        </div>
        <div className="right-testonomial-cont">
            <div className="main-content" >
                <h1>Customer <br/> say about us</h1>
            </div>
            <div className="card-for-testo">
                <div className="top-part d-flex align-items-center">
                    <img src={testoLogo} alt="" height="60" width='60' style={{border : '2px solid gray', borderRadius : '50%'}}/>
                    <div className="name-cont" style={{marginLeft : '0.8rem', lineHeight : '0.4rem'}}>
                        <h4>Dummy Name</h4>
                        <span>Dummy Position</span>
                    </div>
                </div>
                <div className="bottom-part" style={{marginTop : '1rem', color : 'gray'}}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque impedit assumenda pariatur, laboriosam recusandae nobis saepe temporibus accusamus suscipit ipsa quidem officia consequuntur blanditiis, quasi delectus similique provident voluptas quas.</p>
                </div>
                <div className="review d-flex align-items-center">
                    <StarIcon sx={{color : 'rgb(92,181,72)'}}/>
                    <span style={{marginLeft : '0.3rem', color : "gray"}}>10</span>
                </div>
            </div>

            <div className="controls-cont d-flex" style={{alignSelf : 'center'}}>
                <ArrowBackIcon className='icon'/>
                <ArrowForwardIcon className='icon'/>
            </div>

        </div>
    </div>

    <div style={{width:'100%' ,height:'5vh',backgroundColor:'rgb(32, 78, 32)', marginBottom:'2vh'}}></div>
    </>
  )
}

export default Testonomials