import './style.css';
import React from 'react';
import profile_picture from '../.././assets/profile_picture.jpg'

function Menu() {

  const handleClick = event => {
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle('active');

    // 👇️ add class on click
    // event.currentTarget.classList.add('bg-salmon');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
};

  return (
    <div className="header-container">

      <div className="menu"  onClick={handleClick}>
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>

        <div className="sidebar-container submenu">

            <div class="menu-inner">

                <ul>
                    <li><a href="https://aeatech.com.br/" target="_blank">A&A Tech</a></li>
                    <li onClick={handleClick}>
                        <a href="#">Dashboard</a>

                        <ul className='submenu-two'>
                            <li>Abacate</li>
                            <li>Abacaxi</li>
                            <li>Amora</li>
                        </ul>
                    </li>
                    <li><a href="https://github.com/anyemedola/dropdown-test" target="_blank">README.md</a></li>
                </ul>
            </div>

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
