import React from 'react';
import './Nav.css';
import ScoreBox from '../ScoreBox';

const Nav = props => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand col" href="/">concentration</a>
            <div className="col justify-content-center text-center">
                <span className="navbar-text">
                    <img src='./assets/images/brain-cog-50.png' alt='Thinking Brain' />
                </span>
            </div>
            <div className="col justify-content-end text-right">
                <ScoreBox score={props.score} topScore={props.topScore}/>
            </div>
        </nav>
    )
}

export default Nav;