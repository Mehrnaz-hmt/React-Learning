import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

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

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    //setNotes(newNotes);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
    console.log(notes)
  };

  return (
    <div className="container">
      <div className="note-header">note haeder</div>
      <div className="note-app">
        <div className="add-new-note">
          <AddNewNote onAddNote={handleAddNote} />
        </div>
        <div className="note-container">
          <NoteStatus notes={notes}/>
          <NoteList
            onDelete={handleDeleteNote}
            notes={notes}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
