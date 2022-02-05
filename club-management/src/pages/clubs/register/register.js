import React, { useState } from 'react';
import Button from '../../../components/button/button'
import './register.css'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        wingname: "", 
        website: "", 
        description: "", 
        logo: "" 
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }
    const handlePhoto = (e) => {
        console.log("uploaded")
        setData({ ...data, logo: e.target.files[0] });
        console.log(e.target.files[0])
    }
    //register function 
    const egister = async (e) => {
        e.preventDefault();
        try {
			const url = "http://localhost:8080/register";
			await axios.post(url, data);
            navigate("/clubs/addevent")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }
    return (
        <>
            <div className="register">
                <div className="left-side">
                    <div className="form-part">
                        <h1>Register</h1>
                        <form action='#' onSubmit={egister}>
                            <p>Fullname:</p>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                placeholder='FullName'
                            />
                            <br />
                            <p>E-Mail Id:</p>
                            <input
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder='Enter college Email Id'
                            />
                            <br />
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                            />
                            <br />
                            <p>Club name:</p>
            <input
              type="text"
              required
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <p>Name of Wing:</p>
            <input
              type="text"
              required
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
            {/* <p>Logo of the Club:</p> */}
            {/* <input
              type="file"
              id='file'
              name="logo"
              accept=".png, .jpg, .jpeg"
              value={data.logo}
              // onChange={(e) => setLogo(e.target.files[0])}
              onChange={handlePhoto}
            /> */}
            <Button
              buttonStyle="btn-normal"
              type="submit"
              onClick={egister}>Submit</Button>
                        </form>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right">
                        <h1>Already Registered?</h1>
                        <Link to="/login"><Button buttonStyle="btn-normal">Login</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;