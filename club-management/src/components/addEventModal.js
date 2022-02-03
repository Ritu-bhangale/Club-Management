import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from 'react-datetime'
import { Link } from "react-router-dom";
import Button from "./button/button";

export default function({isOpen, onClose, onEventAdded}){
    const [title,setTitle] = useState("");
    const [start,setStart] = useState(new Date());
    const [end,setEnd] = useState(new Date());

    const onSubmit = (event) =>{
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }
    return(
        <>
        <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className="formEventAdd">
            <h1>Add Events</h1>
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
                <Datetime
                    value={start}
                    onChange={date => setStart(date)}
                />
                <p>Choose End Date of Event:</p>
                <Datetime
                    value={end}
                    onChange={date => setEnd(date)}
                />
                <Button buttonStyle="btn-normal">Add Event</Button>
            </form>
        </div>
        </Modal>
        </>
    )
}