import React from 'react'
import logo from '../images/logo.png';
import insta from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/x.png';
import github from '../images/github.png';
import '../css/footer.css';

export default function Footer() {
  return (
    <footer>
        <div class="foot">
            <div class="left">
                <a href="index.html" class="logo">
                    <img src={logo} alt="logo"/>
                </a>
                <a href="index.html" class="name">Codevengers</a>
            </div>
            <div class="socials">
                <a id="insta" target="_blank" href="https://instagram.com/BitwiseGaurav" rel="noreferrer">
                    <img src={insta} alt="instagram"/>
                </a>
                <a id="linkedin" target="_blank" href="https://www.linkedin.com/in/bitwisegaurav/" rel="noreferrer">
                    <img src={linkedin} alt="linkedin"/>
                </a>
                <a id="twitter" target="_blank" href="https://twitter.com/BitwiseGaurav" rel="noreferrer">
                    <img src={twitter} alt="x"/>
                </a>
                <a id="github" target="_blank" href="https://github.com/BitwiseGaurav" rel="noreferrer">
                    <img src={github} alt="github"/>
                </a>
            </div>
        </div>
    </footer>
  )
}
