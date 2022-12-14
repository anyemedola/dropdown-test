import './style.css';
import React from 'react';
import profile_picture from '../.././assets/profile_picture.jpg'

function Sidebar() {
    const handleClick = event => {
        // 👇️ toggle class on click
        event.currentTarget.classList.toggle('active');

        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');

        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
    };

    return (
        <div className="sidebar-container">

            <div class="menu-inner">

                <ul>
                    <li><a href="https://aeatech.com.br/" target="_blank">A&A Tech</a> |</li>
                    <li onClick={handleClick}>
                        <a href="#">Dashboard</a>

                        <ul className='submenu'>
                            <li>Abacate</li>
                            <li>Abacaxi</li>
                            <li>Amora</li>
                        </ul>
                    </li>
                    <li><a href="https://github.com/anyemedola/dropdown-test" target="_blank">README.md</a></li>
                </ul>
            </div>

        </div>
    );
}

export default Sidebar;
