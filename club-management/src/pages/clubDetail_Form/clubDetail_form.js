// import axios from 'axios';
// import React, { Component, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/button/button";
// import "./clubDetail_form.css";

// function ClubDetail_form()  {

//   const [data, setData] = useState({ name:"",wingname:"",website:"",description:"" });
// const [error, setError] = useState("");
// const navigate = useNavigate();

//   const handlChange = ({ currentTarget: input }) => {
//       setData({ ...data, [input.name]: input.value });
//   };

//   const clubb = async (e) => {
//       e.preventDefault();
//   try {
//     const url = "http://localhost:8080/clubDescription/add";
//     const { data: res } = await axios.post(url, data);
//     localStorage.setItem("token", res.data);
//     navigate("/clubdetails");

//   } catch (error) {
//     if (
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status <= 500
//     ) {
//       setError(error.response.data.message);
//     }
//   }
//   }
//   return (
//       <>
//           <h1 className='welcome'>Welcome!</h1>
//         <div className='colorpart'>
//         <div className="form-part">
//             <form onSubmit={clubb}>
//                 <p>Club name:</p>
//                 <input
//                     type="text"
//                     required
//                     name="name"
//                     value={data.name}
//                     onChange={handlChange}
//                 />
//                 <p>Name of Wing:</p>
//                 <input
//                     type="text"
//                     required
//                     name="wingname"
//                     value={data.wingname}
//                     onChange={handlChange}
//                 />
//                 <p>Website Link:</p>
//                 <input
//                     type="text"
//                     name="website"
//                     value={data.website}
//                     onChange={handlChange}
//                 />
//                 <p>About the club:</p>
//                 <input
//                     type="text"
//                     name="description"
//                     value={data.description}
//                     onChange={handlChange}
//                 />
//                 <Button
//                    buttonStyle="btn-normal"
//                    type="submit"
//                    onClick={clubb}>Submit</Button>
//             </form>
            
//         </div>
//         </div>
//       </>
//   );
// }

// export default ClubDetail_form;

import React, { Component } from 'react';
import axios from 'axios';
import Button from "../../components/button/button";
import "./clubDetail_form.css";

export default class ClubDetail_form extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangewingname = this.onChangewingname.bind(this);
    this.onChangewebsite = this.onChangewebsite.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      name: '',
      wingname:'',
      website:'',
      description:''
    }
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangewingname(e) {
    this.setState({
      wingname: e.target.value
    })
  }
  onChangewebsite(e) {
    this.setState({
      website: e.target.value
    })
  }
  onChangedescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const club = {
      name: this.state.username,
      wingname:this.state.wingname,
      website:this.state.website,
      description:this.state.description
    }

    console.log(club);

    axios.post("http://localhost:8080/clubDescription/add", club)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      wingname:'',
      website:'',
      description:''
    })
  }

  render() {
    return (
      <>
        <h1 className='welcome'>Welcome!</h1>
        <div className='colorpart'>
        <div className="form-part">
            <form onSubmit={this.onSubmit}>
                <p>Club name:</p>
                <input  type="text"
                required
                value={this.state.name}
                onChange={this.onChangename}
                />
                <p>Name of Wing:</p>
                <input  type="text"
                required
                value={this.state.wingname}
                onChange={this.onChangewingname}
                />
                <p>Website Link:</p>
                <input  type="text"
                required
                value={this.state.website}
                onChange={this.onChangewebsite}
                />
                <p>About the club:</p>
                <input  type="text"
                required
                value={this.state.description}
                onChange={this.onChangedescription}
                />
                {/* <Button
                   buttonStyle="btn-normal"
                   type="submit"
                   onClick={clubb}>Submit</Button> */}
                   <input type="submit" value="Create User" className="btn btn-primary" />
            </form>
            
        </div>
        </div>
      </>
    )
  }
}