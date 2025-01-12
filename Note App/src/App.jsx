import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function notesReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "delete": {
      return state.filter((s) => s.id !== action.payload);
    }
    case "complete": {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default: {
      throw new Error("Unknown Error!", action.payload);
    }
  }
}

export default function App() {
  //start-states----------------------------------------------------------------------------------------------------------
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("earliest"); //This state moved from NoteHeader component
  const [notes, dispatch] = useReducer(notesReducer, []);
  //end-states----------------------------------------------------------------------------------------------------------

  //start-handlers --------------------------------------------------------------------------------------------------------
  const handleAddNote = (newNote) => {
    //setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "add", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    //  return setNotes(notes.filter(note => note.id !== id)); //this solution is correct too!
    //  return setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id)); //more professional
    dispatch({ type: "delete", payload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "complete", payload: noteId });
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    //setNotes(newNotes);
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
  };

  //end-handlers --------------------------------------------------------------------------------------------------------

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <div className="add-new-note">
          <AddNewNote onAddNote={handleAddNote} />
        </div>
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}
