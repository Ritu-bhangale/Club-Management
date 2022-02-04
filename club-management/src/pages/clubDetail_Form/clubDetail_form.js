import axios from 'axios';
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import "./clubDetail_form.css";

function ClubDetail_form() {

  const [data, setData] = useState({ name: "", wingname: "", website: "", description: "", logo: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handlePhoto = (e) => {
    console.log("uploaded")
    setData({ ...data, logo: e.target.files[0] });
    console.log(e.target.files[0])
  }

  const clubb = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/clubs/new";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate("/clubdetails");

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
      <h1 className='welcome'>Welcome!</h1>
      <div className='colorpart'>
        <div className="form-part">
          <form onSubmit={clubb}>
            <p>Club name:</p>
            <input
              type="text"
              required
              name="name"
              value={data.name}
              onChange={handlChange}
            />
            <p>Name of Wing:</p>
            <input
              type="text"
              required
              name="wingname"
              value={data.wingname}
              onChange={handlChange}
            />
            <p>Website Link:</p>
            <input
              type="text"
              name="website"
              value={data.website}
              onChange={handlChange}
            />
            <p>About the club:</p>
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={handlChange}
            />
            <p>Logo of the Club:</p>
            <input
              type="file"
              name="logo"
              accept=".png, .jpg, .jpeg"
              value={data.logo}
              onChange={handlePhoto}
            />
            <Button
              buttonStyle="btn-normal"
              type="submit"
              onClick={clubb}>Submit</Button>
          </form>

        </div>
      </div>
    </>
  );
}

export default ClubDetail_form;
