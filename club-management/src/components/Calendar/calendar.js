import {React, useRef} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Addevent from '../addEvent'
import Modal from 'react-modal'


export default function () {
    const calendarRef = useRef(null)

    const onEventAdded = (event)=>{
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.addEvent()
    }
    return (
        <>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                eventContent={Addevent}
            />
        </>
    )
}