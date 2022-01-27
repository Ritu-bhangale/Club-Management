import React from 'react';
import Calendar from 'react-calendar'
import './Calendar.css'

const calendar = () => {
  return (
      <>
      <div className="calendar-parent">
      <div className="calendar-in">
      <Calendar calendarType="ISO 8601" 
                showNeighboringMonth="false"/>
      </div>
      </div>
      </>
  );
};

export default calendar;    
