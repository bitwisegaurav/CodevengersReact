import React from 'react';
import '../css/navbar.css';
import logo from '../images/logo.png'

export default function Navbar(props) {
  return (
    <nav>
        <ul>
            <li>
                <div className="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="/">
                <img src={logo} alt="logo" />
                </a>
            </li>
            <li className="comname">
                <a href="/">Codevengers</a>
            </li>
            {   props.courses ?
                <li className="languages">
                    <p className="courses">Courses ↓</p>
                    <div className="options">
                        <a href="mysql.html">MySQL</a>
                        <a href="plsql.html">PL/SQL</a>
                        <a href="java.html">Java</a>
                        <a href="javaPrograms.html">Java Programs</a>
                        <a href="php.html">Php</a>
                    </div>
                </li> : ""
            }
        </ul>
    </nav>
  );
}

Navbar.defaultProps = {
    courses: true
};