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
                    <h1 className="h1CardHome">{club.name}</h1>
                    <a href={club.link} className="vdCardHome" target="_blank">Visit Website</a>
                    </div>
                    <p className="paraCardHome">{club.description}</p>
                </div>
            </div>
        </>
    );
};

export default ClubCard;
