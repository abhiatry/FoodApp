import React from 'react'
import call from './Public/call.jpg'
import location from './Public/location.jpg'
import email from './Public/email.jpg'
import corner1 from './Public/corner1.png'
import corner2 from './Public/corner2.png'

function ContactUs() {
  return (
    <div style={{display:'flex'}}>
        
      <div>
            <div style={{display:"flex",width:'fit-content'}}>

                <div classNameName="card " style={{backgroundColor:'white',border:'0.4vh solid red',borderRadius:'2vh',margin:'1rem', width:'30vh', height:'30vh',alignItems:'center',textAlign:'center',padding:'1vh'}}>
                <img src={location} classNameName="card-img-top" alt="..." style={{height:'10vh' ,width:'10vh',marginBottom:'3vh'}}/>
                <p><strong>Our Main Office</strong></p>
                <p style={{textsize:'1vh'}}>B/2 XYZ Shamli Uttar Pradesh - 247776</p>      
                </div>

                <div classNameName="card " style={{backgroundColor:'white',border:'0.4vh solid red',borderRadius:'2vh',margin:'1rem', width:'30vh', height:'30vh',alignItems:'center',textAlign:'center',padding:'1vh'}}>
                <img src={call} classNameName="card-img-top" alt="..." style={{height:'10vh' ,width:'10vh',marginBottom:'3vh'}}/>
                <p><strong>Phone Number</strong></p>
                <p style={{textsize:'1vh'}}>1234567890</p>      
                </div>

                <div classNameName="card " style={{backgroundColor:'white',border:'0.4vh solid red',borderRadius:'2vh',margin:'1rem', width:'30vh', height:'30vh',alignItems:'center',textAlign:'center',padding:'1vh'}}>
                <img src={email} classNameName="card-img-top" alt="..." style={{height:'10vh' ,width:'10vh',marginBottom:'3vh'}}/>
                <p><strong>Email</strong></p>
                <p style={{textsize:'1vh'}}>foodie@gmail.com</p>      
                </div>
            </div>

          <div style={{backgroundColor:'rgb(32, 78, 32)', width:'99.5vh',padding:'2.5vh', marginLeft:'2.5vh'}}>
              <h1 style={{color:'white',padding:'2vh 0 10vh 34vh'}}>Contact Us</h1>
            <div style={{marginLeft:'22vh'}}>
                <form>
                
                <div className="mb-3">
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Enter Full Name' style={{width:'55vh'}} required/>
                </div>

                <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' style={{width:'55vh'}} required/>
                </div>

                <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'14vh',width:'55vh'}}></textarea>
                </div>

                <button type="button" className="btn btn-outline-light" style={{margin:'3vh 0 0 0'}}>Submit</button>

                </form>
            </div>

          </div>
      </div>
    

      <div style={{backgroundColor:'white',width:'50%',position:'relative'}}>
      <img src={corner2} className="card-img-top" alt="..." style={{position:'absolute',left:'53vh', top:'2.6vh', width:'45vh', height:'35vh'}}/>

      <h1 style={{fontSize:'10vh',color:'red',position:'absolute',left:'12.5vh',top:'15vh'}}>Healthy & </h1>
      <h1 style={{fontSize:'16vh',color:'rgb(32, 78, 32)',position:'absolute',left:'11.7vh',top:'24vh'}}>Fresh</h1>
      <h1 style={{fontSize:'13vh',color:'rgb(32, 78, 32)',position:'absolute',left:'12vh',top:'38vh'}}>Food </h1>
      <div style={{width:'50vh', height:'25vh',position:'absolute',left:'44vh',top:'60vh'}}>
        <p style={{borderRadius:'8vh',backgroundColor:'red', width:'35vh',textAlign:'center',color:'red'}}>A</p>
        <p style={{ width:'35vh',textAlign:'center'}}>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.</p>
      </div>
      <img src={corner1} className="card-img-top" alt="..." style={{margin:'0 0 0 0', width:'45vh', height:'40vh',position:'absolute',top:'63vh'}}/>
      </div>
      
    
    </div>
  )
}

export default ContactUs