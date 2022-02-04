import {React, useRef, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import Button from '../button/button'
import AddEventModal from "../addEventModal";
import './Calendar.css'
import axios, { Axios } from 'axios'
import moment from 'react-moment'


export default function CalendarA() {
    const [modalOpen, setModalOpen] = useState(false)
    const [events,setEvents] = useState("")
    const calendarRef = useRef(null)

    const onEventAdded = ({event})=>{
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({event});
    };
    async function handleEventAdd(data){
        await axios.post("http://localhost:8080/event/create", data.event)
    }
    async function handleDateSet({data}){
        const response = await axios.get("http://localhost:8080/event/?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
        // const response = await axios.get("http://localhost:8080/event/");
        setEvents(response.data);
    }
    return (
        <>
            <Button buttonStyle="btn-normal" onClick={()=>setModalOpen(true)}>Add Event</Button>
            <div className="calendarDiv">
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                eventAdd={event=> handleEventAdd(event)}
                datesSet={date=> handleDateSet(date)}
            />
            </div>
            <AddEventModal isOpen={modalOpen} onClose={()=> setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
        </>
    )
}