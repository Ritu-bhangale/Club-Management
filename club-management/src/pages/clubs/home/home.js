import React, { useState, useEffect } from 'react';
import Button from '../../../components/button/button';
import Login from '../login/login';
import './home.css'
import { Link } from 'react-router-dom'
import ClubCard from '../../../components/clubCard/clubCard';
import axios from 'axios';
import { readClubs } from '../../../functions';

const Home = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await readClubs();
            console.log(result)
            setClubs(result.clubs)
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="home">
                <div className="nav-button">
                    <Link to="/clubs/login"><Button buttonStyle="btn-normal">Login</Button></Link>
                    <Link to="/clubs/register"><Button buttonStyle="btn-border">Register</Button></Link>
                </div>
                <div className="hero">
                    <h1>Explore all clubs of IIIT Nagpur</h1>
                </div>
                <div className="line"></div>
            </div>
            <div className="clubCardsBelow">
                <div className="clubContainer" id="clubContainer">
                    <div className="clubHome">
                        {clubs.map(club=>
                            <ClubCard key={club.name} club={club}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
