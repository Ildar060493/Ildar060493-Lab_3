import React, { useContext } from 'react';
import { DataContext } from '../DataProvider';
import NoteCard from './NoteCard';

function NoteList() {
  const { tasks } = useContext(DataContext);

  return (
    <div className="note-list">
      {tasks.map((task, index) => (
        <NoteCard 
          key={index}
          content={task.content}
          date={task.date}
          important={task.important}
          completed={task.completed}
        />
      ))}
    </div>
  );
}

export default NoteList;
