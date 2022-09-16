import React from 'react'
import {Link} from 'react-router-dom'


function Login() {
  return (
    
    <div className='loginDiv'>
        
        <div className='loginDiv1'>
            
            <form>
                <h1 style={{marginBottom:'3vh', color:'rgb(42, 112, 48'}}>Sign In</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label"  >Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' style={{borderRadius:'15vh' , width:'55vh'}}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' style={{borderRadius:'15vh' , width:'55vh'}}/>
                </div>
                
                {/* <button type="submit" className="btn btn-primary" >Submit</button> */}
                <button type="button" className="btn btn-outline-success" style={{marginTop:'1.5rem' , width:'55vh', borderRadius:'15vh'}}>Login</button>
                <div className="mb-3 form-check" style={{marginTop:'2rem'}}>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1" >Remember me</label>
                </div>
            </form>
        </div>

        <div className='loginDiv2'>
            <h1 style={{ textAlign:'center'}}>Welcome to Login</h1>
            <h5 style={{ textAlign:'center'}}>Don't have an Account?</h5> 
            <Link to='/signup' style={{textDecoration:'none'}}><button type="button" className="btn btn-outline-success" style={{margin:'3vh 0 0 31vh'}}>Sign Up</button></Link>
        </div>
        
    </div>

  )
}

export default Login






