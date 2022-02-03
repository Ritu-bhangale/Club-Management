import React, { useState } from "react";
import Datetime from "react-datetime";
import Button from './button/button'
import { Link } from 'react-router-dom'

function EventAdd(onEventAdded) {
    const [title, setTitle] = useState({ title: "" })
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())

    const onSubmit = async (e) => {
        e.preventDefault();
        onEventAdded({
            title,
            start,
            end
        })
    }
    
    return (
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
                    <Link to="/calendar"><Button buttonStyle="btn-normal">Add Event</Button></Link>
            </form>
        </div>
    )
}

export default EventAdd