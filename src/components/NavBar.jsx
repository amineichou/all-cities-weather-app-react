import React from 'react';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className="title">
                logo
            </div>
            <div className="nav-links-container">
                <a href='/portfolio' className="nav-links">
                    <img src="/dyali.jpg" alt="" />
                    <h2>By</h2>
                    <h1>amine ichou</h1>
                </a>
            </div>
        </div>
    );
}

export default NavBar;
