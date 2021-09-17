import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
             <nav className = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className = "container-fluid">
          <Link className = "navbar-brand" to = "/">{props.title}</Link>
          <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
          </button>
          <div className = "collapse navbar-collapse" id="navbarSupportedContent">
            <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
              <li className = "nav-item">
                <Link className = "nav-link active" aria-current="page" to= "/">Home</Link>
              </li>
              <li className = "nav-item">
                <Link className = "nav-link" to = "/about">{props.aboutText}</Link>
              </li>
            </ul>
            
            <div className="d-flex">
            <button className="btn btn-danger mx-1" style={{borderRadius: "50px", height: "25px", width: "25px"}}  onClick = {()=>{props.toggleTheme('danger')}} type="button"  ></button>
            <button className="btn btn-success mx-1" style={{borderRadius: "50px", height: "25px", width: "25px"}}  onClick = {()=>{props.toggleTheme('success')}} type="button"  ></button>
            <button className="btn btn-warning mx-1" style={{borderRadius: "50px", height: "25px", width: "25px"}}  onClick = {()=>{props.toggleTheme('warning')}} type="button"  ></button>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick = {()=>{props.toggleMode(props.mode)}} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set the title",
    aboutText : "Write about text"
}