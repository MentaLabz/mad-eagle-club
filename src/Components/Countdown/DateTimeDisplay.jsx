import React from 'react';
import './counter.css'


const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='display-counter'>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
