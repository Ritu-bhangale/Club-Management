import React from 'react';
import Button from '../../components/button/button';
import './home.css'

const home = () => {
    return (
        <>
        <div className="nav-button">
            <Button buttonStyle= "btn-normal">Login</Button>
            <Button buttonStyle= "btn-border">Register</Button>
        </div>
        <div className="hero">
            <h1>Explore all clubs of IIIT Nagpur</h1>
        </div>
        <div className="line"></div>
        </>
    );
};

export default home;
