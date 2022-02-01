import React from 'react';
import Calendar from '../../components/Calendar/calendar'
import Navbar from '../../components/navbar/navbar'
import './calendar.css'
import Button from '../../components/button/button'
// demo just to showcase functionality

const calendar = () => {
  return(
      <>
      <div className="calendar-some">
      <Navbar/>
      <Calendar/>
      <div className="addEventBtn">
      <Button buttonStyle="btn-normal">Add Event</Button>
      </div>
      </div>
      </>
  );
};

export default calendar;
