import React, { useState, useEffect } from 'react';
import Button from '../../../components/button/button';
import Login from '../../clubs/login/login';
import './home.css'
import { Link } from 'react-router-dom'
import ClubCard from '../../../components/clubCard/clubCard';
import axios from 'axios';
import { readClubs } from '../../../functions';
import EventCard from '../../../components/eventCard/eventCard'

const event={
    title: "Ace event",
    start: "12/03/2007 11:00am",
    end: "12/03/2007 12:30am",
}

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
                <div className="hero">
                    <h1>Explore all clubs of IIIT Nagpur</h1>
                </div>
                <div className="line"></div>
            </div>
            <div className="eventCardsBelow">
                <div className="eventContainer">
                    <h1>Events</h1>
                    <div className="eventHome">
                        <EventCard event ={event}/>
                        <EventCard event ={event}/>
                        <EventCard event ={event}/>
                    </div>
                </div>
            </div>
            <div className="clubCardsBelow">
                <div className="clubContainer" id="clubContainer">
                <h1>Clubs</h1>
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
