import React from 'react';
import { Link } from 'react-router-dom'
import './clubCard.css'

const ClubCard = ({ club }) => {
    return (
        <>
            <div className="clubCardComp">
                <div className="lineClubCard">
                </div>
                <div className="leftLogoCardComp">
                    <img src={club.logo} alt="" className="imgCardHome" />
                </div>
                <div className="rightLogoCardComp">
                    <div className="rightTopCard">
                    <div className="headingshere">
                    <h1 className="h1CardHome">{club.name}</h1>
                    <div className="wingname"><h1>{club.wingname}</h1></div>
                    </div>
                    <a href={club.website} className="vdCardHome" target="_blank">Visit Website</a>
                    </div>
                    <p className="paraCardHome">{club.description}</p>
                </div>
            </div>
        </>
    );
};

export default ClubCard;
