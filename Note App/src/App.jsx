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

  return (
    <div className="container">
      <div className="note-header">note haeder</div>
      <div className="note-app">
        <div className="add-new-note">
          <AddNewNote onAddNote={handleAddNote} />
        </div>
        <div className="note-container">
          hi
        <NoteList notes={notes}/>
        hi
        </div>
      </div>
    </div>
  );
};

export default App;
