import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import './clubDetails_Form.css'




function ClubDetails_Form(){
    const [data, setData] = useState({
        name: "",
        wingname: "",
        website: "",
        description:""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

  return(
    <>
    <h1 className='welcome'>Welcome!</h1>
    <div className='colorpart'>
    <div className="form-part">
        <form>
            <p>Club name:</p>
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <p>Name of Wing:</p>
            <input
                type="text"
                name="wingname"
                value={data.wingname}
                onChange={handleChange}
            />
            <p>Website Link:</p>
            <input
                type="text"
                name="website"
                value={data.website}
                onChange={handleChange}
            />
            <p>About the club:</p>
            <input
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
            />
            <input type="submit" value="club" />
        </form>
        
    </div>
    </div>

    </>
  );
}

export default ClubDetails_Form
