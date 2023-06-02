import React from 'react'
import Logo from "../img/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img className='main_logo' src={Logo} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="?cat=technology"><a className="nav-link" href="javascript:void(0)">Technology</a></Link>
            </li>
            <li className="nav-item"> 
              <Link to="?cat=Science"><a className="nav-link" href="javascript:void(0)">Science</a></Link>
            </li>
            <li className="nav-item">
              <Link to="?cat=Artist"><a className="nav-link" href="javascript:void(0)">Artist</a></Link>
            </li>
            <li className="nav-item"> 
              <Link to="?cat=Design"><a className="nav-link" href="javascript:void(0)">Design</a></Link>
            </li>
            <li className="nav-item"> 
              <a className="nav-link" href="javascript:void(0)">Logout</a>
            </li>
            <li className="nav-item"> 
              <Link to="/write"><a className="nav-link btn btn-sm btn-info" href="javascript:void(0)">Write</a></Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  )
}
export default Navbar;
