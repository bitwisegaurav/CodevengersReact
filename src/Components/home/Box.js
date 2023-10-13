import React from "react";
import '../css/box.css'

export default function Box(props) {
  return (
    <div className="box" id="mysql">
      <div className="langname">{props.lang}</div>
      <p className="aboutlang">{props.about}</p>
      <span id="startbtn">
        <a href="/">
          Get Started
          <span className="bodbot"></span>
        </a>
      </span>
    </div>
  );
}
