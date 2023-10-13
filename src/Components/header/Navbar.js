import React from 'react';
import '../css/navbar.css';
import logo from '../images/logo.png'

function Link(props){
    return(
        <a href={props.link}>{props.name}</a>
    )
}

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
                    {links.map((item, index) =>
                        props.course === item.name ? null : (
                            <Link key={index} link={item.link} name={item.name} />
                        )
                    )}
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

let links = [
    {
        name: "MySQL",
        link: "mysql.html"
    },
    {
        name: "PL/SQL",
        link: "plsql.html"
    },
    {
        name: "Java",
        link: "java.html"
    },
    {
        name: "Java Programs",
        link: "javaPrograms.html"
    },
    {
        name: "Php",
        link: "php.html"
    }
];