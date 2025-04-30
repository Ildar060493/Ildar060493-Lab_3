import React from 'react';
import DateView from './DateView';

function NoteCard({ content, date, important, completed }) {
  return (
    <div className={`note-card ${completed ? 'completed' : ''}`}>
      <div className="note-content">
        {content}
      </div>
      <DateView date={date} />
      <div className="note-actions">
        <img src="check.svg" alt="check" />
        <img src="mode_edit.svg" alt="edit" />
        <img src="delete_sweep.svg" alt="delete" />
      </div>
    </div>
  );
}

export default NoteCard;
