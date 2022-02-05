import React, { useState, useEffect } from 'react';
import Button from '../../../components/button/button';
import Login from '../../clubs/login/login';
import './home.css'
import { Link } from 'react-router-dom'
import ClubCard from '../../../components/clubCard/clubCard';
import axios from 'axios';
import { readClubs, readEvents } from '../../../functions';
import EventCard from '../../../components/eventCard/eventCard'

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
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const output = await readEvents();
            console.log(output)
            setEvents(output)
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
                    <div className="eventCardsHead">
                    <h1>Events</h1>
                    </div>
                    <div className="eventHome">
                        {events.map(event=>
                            <EventCard key={event._id} event={event}/>
                        )}
                    </div>
                </div>
            </div>
            <div className="clubCardsBelow">
                <div className="clubContainer" id="clubContainer">
                <div className="clubCardsHead">
                <h1>Clubs</h1>
                </div>
                    <div className="clubHome">
                        {clubs.map(club=>
                            <ClubCard key={club._id} club={club}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
