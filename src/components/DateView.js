import React from 'react';

function DateView({ date }) {
  const dateObj = new Date(date.day);
  const dayOfWeek = dateObj.toLocaleString('en-us', { weekday: 'short' });
  const dayInCalendar = dateObj.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="date-box">
      <div className="date-box__top">
        <div>{dayOfWeek}</div>
        <div>{dayInCalendar}</div>
      </div>
      <div className="date-box__bottom">
        {date.start} - {date.end}
      </div>
    </div>
  );
}

export default DateView;
