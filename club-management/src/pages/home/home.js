import React from 'react';
import Button from '../../components/button/button';
import Login from '../login/login';
import './home.css'

const home = () => {
    return (
        <>
        <div className="home">
        <div className="nav-button">
            <Button buttonStyle= "btn-normal" >Login</Button>
            <Button buttonStyle= "btn-border">Register</Button>
        </div>
        <div className="hero">
            <h1>Explore all clubs of IIIT Nagpur</h1>
        </div>
        <div className="line"></div>
        </div>
        </>
    );
};

export default home;
