import React from 'react';
import './Components/css/comingsooninner.css';
import image from './Components/images/Code-development.png';
export default function ComingSoonInner() {
  return (
    <main id='coming-inner-main'>
        <div class="contain">
            <div class="logo">
                <img src={image} alt="Vector Images" />
            </div>
            <div class="about">
                <h1>Coming Soon</h1>
                <hr />
                <p>We're crafting valuable content for this page.</p>
                <p>While it's not available yet, you can explore our other courses.</p>
                <p>Click the courses button above.</p>
            </div>
        </div>
    </main>
  )
}
