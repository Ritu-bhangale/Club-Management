import React from 'react';
import Calendar from '../../components/Calendar/calendar'
import Navbar from '../../components/navbar/navbar'
import './calendar.css'
// demo just to showcase functionality

const calendar = () => {
  return(
      <>
      <div className="calendar-some">
      <Navbar/>
      <Calendar/>
      </div>
      </>
  );
};

export default calendar;
