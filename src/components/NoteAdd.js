import React, { useState, useContext } from 'react';
import { DataContext } from '../DataProvider';

function NoteAdd() {
  const { tasks, setTasks } = useContext(DataContext);
  const [newNote, setNewNote] = useState('');

  const handleAddTask = () => {
    if (!newNote.trim()) return;  // Если текст пустой, ничего не добавлять
    setTasks([
      ...tasks,
      { content: newNote, important: false, completed: false, date: { day: new Date().toISOString() } }
    ]);
    setNewNote('');  // Очищаем поле ввода
  };

  return (
    <div className="note-add">
      <input 
        type="text" 
        placeholder="Добавьте новую задачу" 
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
}

export default NoteAdd;

