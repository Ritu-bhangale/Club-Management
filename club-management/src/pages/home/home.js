import React from 'react';
import Button from '../../components/button/button';
import Login from '../login/login';
import './home.css'
import { Link } from 'react-router-dom'
import ClubCard from '../../components/clubCard/clubCard';

const club={
    name: "ACE - Ecell",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit blanditiis, doloribus eaque nulla id, praesentium cumque repellendus eligendi, explicabo aliquam reprehenderit quis natus ratione vitae minima debitis ipsum ex.",
    link: "https://esummit.vercel.app/",
    logo: {url: "https://www.linkpicture.com/q/d2c-icon-800x800.jpg"},
    _id:"ace"
}

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
        <div className="clubCardsBelow">
            <div className="clubContainer" id="clubContainer">
                <div className="clubHome">
                    <ClubCard club={club}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default home;
