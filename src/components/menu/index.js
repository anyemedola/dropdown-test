import './style.css';
import React from 'react';
import profile_picture from '../.././assets/profile_picture.jpg'

function Menu() {
  return (
    <div className="header-container">

      <div className="menu">
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>

      <div className="profile">
        <div>Welcome, Any Medola!</div>
        <img className="img-user" src={profile_picture} />
      </div>

    </div>
  );
}

export default Menu;
