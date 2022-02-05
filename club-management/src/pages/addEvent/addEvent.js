import React, { useState } from "react";
import'./addEvent.css'
import Datetime from 'react-datetime'
import Button from "../../components/button/button";
import DateTimePicker from "react-datetime-picker"
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const [title,setTitle] = useState("");
  const [start,setStart] = useState(new Date());
  const [end,setEnd] = useState(new Date());
  const navigate = useNavigate();

  const onSubmit = async(event) =>{
    event.preventDefault();
    try {
      const url = "http://localhost:8080/event/create";
      const { data: res } = await axios.post(url, data);
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
      <div className="addEventHead">
      <h1>Add Events here</h1>
      </div>
      <div className="formAddEvent">
        <form action="#" onSubmit={onSubmit}>
        <p>Title of Event:</p>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title of Event"
                />
                <p>Choose Start Date of Event:</p>
                <DateTimePicker
                    value={start}
                    onChange={date => setStart(date)}
                />
                <p>Choose End Date of Event:</p>
                <DateTimePicker
                    value={end}
                    onChange={date => setEnd(date)}
                />
                <br />
                <Button buttonStyle="btn-normal">Add Event</Button>
        </form>
      </div>
      </>
  );
};

export default AddEvent;
