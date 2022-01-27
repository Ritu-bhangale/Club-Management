import React, { Component, useState } from "react";
import Button from "../../components/button/button";
import "../login/login.css";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom"

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate()

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

    const handlChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const lgoin = async (e) => {
        e.preventDefault();
		try {
			const url = "http://localhost:8080/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
            <div className="login">
                <div className="leftSide">
                    <div className="leFt">
                        <h1>Not Registered yet?</h1>
                        <Link to="/register"><Button buttonStyle="btn-normal">Register</Button></Link>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="form-part">
                        <h1>Login</h1>
                        <div className="form">
                            <form action="#" onSubmit={lgoin}>
                            <p>E-Mail Id:</p>
                            <input
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={handlChange}
                                required
                                placeholder='Enter college email id' />
                            <br />
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handlChange}
                                required
                                placeholder='' />
                            <br />
                            <Button
                                buttonStyle="btn-normal"
                                type="submit"
                                onClick={lgoin}>Login</Button>
                            </form>
                            <div className="forgot">
                                <Button buttonStyle="btn-line">Forgot Password?</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             fullName: "",
//             email: "",
//             password: "",
//         };
//         this.changeFullName = this.changeFullName.bind(this);
//         this.changeEmail = this.changeEmail.bind(this);
//         this.changePassword = this.changePassword.bind(this);
//     }

//     changeFullName(event) {
//         this.setState({
//             fullName: event.target.value,
//         });
//     }
//     changeEmail(event) {
//         this.setState({
//             email: event.target.value,
//         });
//     }
//     changePassword(event) {
//         this.setState({
//             password: event.target.value,
//         });
//     }
//     onSubmit(event) {
//         event.preventDefault();

//         const registered = {
//             fullName: this.state.fullName,
//             email: this.state.email,
//             password: this.state.password,
//         };
//     }
//     render() {
//         return (
//             <>
//                 <div className="main">
//                     <div className="left-side">
//                         <h1>Not  registered  yet?</h1>
//                         <Button buttonStyle="btn-normal">Register</Button>
//                     </div>
//                     <div className="half-grey">
//                         <div className="right-side">
//                             <h1 className="heading">Login</h1>
//                             <div className="form-part">
//                                 <form onSubmit={this.onSubmit}>
//                                     <p>E-mail Id</p>
//                                     <input
//                                         type="text"
//                                         placeholder="Enter College E mail id"
//                                         onChange={this.changeEmail}
//                                         value={this.state.email}
//                                     />
//                                     <p>Full Name</p>
//                                     <input
//                                         type="password"
//                                         placeholder="Password"
//                                         onChange={this.changePassword}
//                                         value={this.state.password}
//                                     />
//                                     <br />
//                                     <Button buttonStyle="btn-normal"><input type="submit" value="Login" /></Button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

// export default App;