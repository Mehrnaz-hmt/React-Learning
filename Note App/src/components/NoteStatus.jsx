import React from "react";

function NoteStatus({ notes }) {
  //derived states:  => maybe we don't need to creating new states
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const openNotes = notes.filter((note) => note.completed === false).length;

  //conditional rendering
  if (!allNotes) return <h3>No notes has already been added!🤷‍♀️</h3>;
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{openNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
