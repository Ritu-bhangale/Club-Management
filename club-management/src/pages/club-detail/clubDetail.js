import React, { useEffect, useState } from "react";
import Button from '../../components/button/button'
import '../club-detail/clubDetails.css'
import Navbar from '../../components/navbar/navbar'
import axios from "axios";

function ClubDetails() {
    // const[clubs,setClub]=useState([]);
    // const[loading,setLoading]=useState(false);
    // const[error,setError]=useState(false);

    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try{
    //             setLoading(true);
    //             const {data}=await axios.get('');
    //             setClub(data);
    //         }catch(err){
    //             setError(err.message);
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // },[]);
    return(
        <>
        <div className="mainpage">
            <Navbar/>
            <div className="body_page">
            <img src="/Assets/logo.png" className="image" alt="" />
                <div className="first">
                    <h1 className="first-heading">Club Name</h1>
                    <p className="first_sub">Club of Wing</p>
                </div>
                <div className="second">
                <p className="second-heading">Description</p>
                <p className="second-body">Description of club. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                </div>
                <div className="third">
                    <p className="third-heading">Website</p>
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