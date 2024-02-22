import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"red"}}>Financial Management Panel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">My Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <Link to ="/add" className="nav-link" >Add Payment</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Payments Details</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Reports</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  </div>
</nav>
    )
}



export default Header;