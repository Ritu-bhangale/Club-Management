import React from "react";
import './clubDetail.css'
import Button from "../button/button";

const ClubDetail=({club})=>{
    return(
        <>
        <div className="mainpage">
            <div className="body_page">
            <img src={club.logo} className="image" alt="" />
                <div className="first">
                    <h1 className="first-heading">{club.name}</h1>
                    <p className="first_sub">{club.wingname}</p>
                </div>
                <div className="second">
                <h1 className="second-heading">Description</h1>
                <p className="second-body">{club.description}</p>
                </div>
                <div className="third">
                    <h1 className="third-heading">Website</h1>
                    <p className="third-body">{club.website}</p>
                </div>
                <div className="button-edit">
                <Button  buttonStyle="btn-normal">Edit Info</Button>
                </div>
            </div>
        </div>
        </>
    )
}
export default ClubDetail