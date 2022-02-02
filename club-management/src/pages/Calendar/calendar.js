import React from 'react';
import Calendar from '../../components/Calendar/calendar';
import Button from '../../components/button/button'
import { Link } from 'react-router-dom'

const calendar = () => {
  return (
    <>
      <Link to="/calendar/addevent"><Button buttonStyle="btn-normal">Add Event</Button></Link>    
      <Calendar />
    </>
  );
};

export default calendar;
