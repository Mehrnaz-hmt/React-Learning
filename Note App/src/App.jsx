import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  //states
  const [notes, setNotes] = useState([]);

  //handlers
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    //  return setNotes(notes.filter(note => note.id !== id)); //this solution is correct too!
    return setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id)); //more professional
  };

  return (
    <div className="container">
      <div className="note-header">note haeder</div>
      <div className="note-app">
        <div className="add-new-note">
          <AddNewNote onAddNote={handleAddNote} />
        </div>
        <div className="note-container">
          hi
          <NoteList onDelete={handleDeleteNote} notes={notes} />
          {console.log(notes)}
        </div>
      </div>
    </div>
  );
}

export default App;
