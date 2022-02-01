import React, { useState } from "react";
import Modal from "modal";
import datetime from "react-datetime";
import Button from '../../components/button/button'

export default function ({ isOpen, onClose, onEventAdded }) {
    const [title,setTitle] = useState({title:""})
    const [start,setStart] = useState(new Date())
    const [end,setEnd] = useState(new Date())

    const onSubmit = async(e)=>{
        e.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose()
    }
  return (
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
              onChange={e=> setTitle(e.target.value)}
              placeholder="Title of Event"
            />
            <p>Choose Start Date of Event:</p>
            <datetime
              value={start}
              onChange={date=>setStart(date)}
            />
            <p>Choose End Date of Event:</p>
            <datetime
              value={end}
              onChange={date=>setEnd(date)}
            />
            <Button buttonStyle="btn-normal">Add event</Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
