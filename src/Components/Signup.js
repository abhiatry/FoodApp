import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
        
    <div className='signupDiv'>
        
        <div className='signupDiv1'>
            
            <form>
                <h1 style={{marginBottom:'3vh', color:'rgb(42, 112, 48'}}>Sign Up</h1>
                <div className="mb-3">
                <label for="exampleInputName" className="form-label"  >Name</label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Full Name' style={{borderRadius:'15vh' , width:'55vh'}} required/>
            </div>

            <div className="mb-3">
                <label for="exampleInputMobile" className="form-label"  >Mobile</label>
                <input type="text" className="form-control" id="exampleInputMobile" aria-describedby="mobileHelp" placeholder='Mobile Number' style={{borderRadius:'15vh' , width:'55vh'}} required/>
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label"  >Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' style={{borderRadius:'15vh' , width:'55vh'}} required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' style={{borderRadius:'15vh' , width:'55vh'}} required/>
            </div>
            
            {/* <button type="submit" className="btn btn-primary" >Submit</button> */}
            <button type="button" className="btn btn-outline-success" style={{marginTop:'1.5rem' , width:'55vh', borderRadius:'15vh'}}>Sign Up</button>
            
        </form>
    </div>

        <div className='signupDiv2'>
            <h1 style={{ textAlign:'center', marginTop:'5vh'}}>Welcome to Sign Up</h1>
            <h5 style={{ textAlign:'center'}}>Already have an Account?</h5> 
            <Link to='/login' style={{textDecoration:'none'}}><button type="button" className="btn btn-outline-success" style={{margin:'3vh 0 0 31vh'}}>Login</button></Link>
        </div>

    </div>
    
  )
}

export default Signup