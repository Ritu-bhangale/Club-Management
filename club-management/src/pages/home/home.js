import React from 'react';
import Button from '../../components/button/button';
import Login from '../login/login';
import './home.css'
import { Link } from 'react-router-dom'

const home = () => {
    return (
        <>
        <div className="home">
        <div className="nav-button">
        <Link to="/login"><Button buttonStyle="btn-normal">Login</Button></Link>
        <Link to="/register"><Button buttonStyle="btn-border">Register</Button></Link>
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
