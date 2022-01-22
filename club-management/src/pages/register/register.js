import React, { useState } from 'react';
import Button from '../../components/button/button'
import './register.css'
import axios from 'axios'

function Register() {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // async function registerUser(event){
    //     event.preventDefault()
    //     const response = await fetch('http://localhost:3000/register',{
    //         method:'POST',
    //         headers: {
    //             'Content-Type' : 'application.json',
    //         },
    //         body: JSON.stringify({
    //             name,
    //             email,
    //             password,
    //         })
    //     })
    //     const data = await response.json()
    //     console.log(data)

    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
//register function 
   const egister = ()=>{
   const {name,email,password} = user
   if (name && email && password){
    axios.post("http://localhost:3000/register",user )
    .then(res=>console.log(res))
   }
   else{
       alert("invalid input")
   };
    }
    return (
        <>
            <div className="register">
                <div className="left-side">
                    <div className="form-part">
                        <h1>Register</h1>
                        <form action='#'>
                            <p>Fullname:</p>
                            <input
                                type="text"
                                name="name" 
                                value={user.name} 
                                onChange={handleChange}
                                placeholder='FullName'
                            />
                            <br />
                            <p>E-Mail Id:</p>
                            <input
                                type="text"
                                name="email" 
                                value={user.email} 
                                onChange={handleChange}
                                placeholder='Enter college Email Id'
                            />
                            <br />
                            <p>Password</p>
                            <input
                                type="password"
                                name="password" 
                                value={user.password} 
                                onChange={handleChange}
                            />
                            <br />
                            <input type="submit" value="Register" onClick={egister}/>
                        </form>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right">
                        <h1>Already Registered?</h1>
                        <Button buttonStyle="btn-normal">Login</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;