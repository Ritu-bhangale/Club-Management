import React, { useState } from 'react';
import Button from '../../components/button/button'
import './register.css'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }
    //register function 
    const egister = async (e) => {
        e.preventDefault();
        try {
			const url = "http://localhost:8080/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
                            <input type="submit" value="Register" onClick={egister} />
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