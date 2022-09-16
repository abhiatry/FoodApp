import { Link } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <h2 >Foodie</h2>
        
        <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px'}}>
            <li className="nav-item">
            <Link to="/" style={{textDecoration:'none'}}><a className="nav-link active" aria-current="page" style={{marginLeft:'3vh'}}>Home</a></Link>
            </li>
        
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Link
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled">Link</a>
            </li>
        </ul>
        <form className="d-flex" role="search" style={{marginLeft:'70vh'}}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px' , 'marginLeft':'4rem'}}>
        <li className="nav-item">
           <Link to="/login" style={{textDecoration:'none'}}>  <a className="nav-link" >Login</a> </Link> 
            </li>
        </ul>
        </div>
    </div>
    </nav>
  </div>
  )
}

export default Navbar

