import React from "react";
import Button from '../../components/button/button'
import '../club-detail/clubDetails.css'
import NavBar from '../../components/navbar/navbar'



function ClubDetails() {
    return(
        <>
        <div className="page">
        <div className="navbar">
        <div className="nav-head">
           <p className="nav-heading">Club Name</p>
           <p className="nav-subheading">Club of Wing</p>
        </div>
        </div>
        <div className="notnavbar">
        <div className="first">
           <p className="first-heading">Club Name</p>
           <p className="first-subheading">Club of Wing</p>
        </div>
        <div className="second">
            <p className="second-heading">Description</p>
            <p className="second-body">Description of club. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br/> minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
        </div>
        <div className="third">
            <p className="third-heading"> Website</p>
            <p className="third-body">https://clubname.iiitn.ac.in</p>
        </div>
        <div className="button-edit">
        <Button  buttonStyle="btn-normal">Edit</Button>
        </div>
        </div>
        </div>
        </>
    );
}

export default ClubDetails