import React from 'react';
import './Header.css';
import Netflix from './netflix.png'

const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Netflix} alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg" alt="Usuário"/>
                    
                </a>
            </div>
        </header>
    );
}

export default Header;