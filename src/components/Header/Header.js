import React from 'react';
import './Header.css';

const Header = () => {
    
    return (
        <React.Fragment>
            <header className='container text-center lead header-css'>
                <p className='lead'>
                    Get ready to concentrate!
                </p>
                <p className='lead'>
                    Click on an image to earn points, but don't click the same image more than once!
                </p>
            </header>
        </React.Fragment>
    )
}

export default Header;