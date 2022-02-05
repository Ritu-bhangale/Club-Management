import React, { useEffect, useState } from "react";
import Button from '../../../components/button/button'
import './clubDetails.css'
import Navbar from '../../../components/navbar/navbar'
import ClubDetail from "../../../components/clubDetail/clubDetail";
import axios from "axios";
import { readClubs } from "../../../functions";

function ClubDetails() {
    const [clubs, setClubs] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await readClubs();
            console.log(result)
            setClubs(result.clubs)
        }
        fetchData()
    }, [])
    return(
        <>
        <div className="clubDetailsFront">
        <Navbar/>
        <div className="clubDetailHome">
            {clubs.map(club=>
                <ClubDetail key={club.name} club={club}/>
            )}
            </div>
        </div>
        </>
    );
}

export default ClubDetails