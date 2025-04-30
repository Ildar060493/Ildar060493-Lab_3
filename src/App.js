import React from 'react';
import './App.css';
import NoteAdd from './components/NoteAdd';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <NoteAdd />
      <NoteList />
    </div>
  );
}

export default App;
