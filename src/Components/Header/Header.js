import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    
    <>
      <div className="container header">
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Destination</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Sign in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Sign up</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        

      </div>
      <section className="banner">
      </section>
    </>


  );
};

export default Header;
