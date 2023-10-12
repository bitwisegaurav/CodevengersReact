import React from 'react';
import '../css/intro.css';
import image from '../images/Programming-amico.svg';

export default function Intro() {
  return (
    <main>
      <div className="container">
        <div id="image">
          <img src={image} alt="Intro"/>
        </div>
        <div className="maincont">
          <div className="name">Codevengers</div>
          <p>
            Read about the basics of web development, the process of creating a
            website, and additional resources for those who want to learn more.
          </p>
          <a id="coursebtn" href="#courseSection">Courses</a>
        </div>
      </div>
    </main>
  )
}
