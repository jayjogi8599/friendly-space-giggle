import React from "react";

function Navbar(props) {
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className={`container-fluid text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <a className="navbar-brand" href="#">
          {props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
              <button type="button" onClick={props.togglemode} className="btn btn-dark">DarkMode</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
  }
  
  
  export default Navbar;