import React, { useState } from "react";

export default function AddNewNote({ onAddNote }) {
  //states:
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(), // time stamp
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTitle("");
    setDescription("");

    // setNotes((prevNotes) => [...prevNotes, newNote]);
    onAddNote(newNote)
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          name="name"
          type="text"
          placeholder="Add New Note ..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="name"
          type="text"
          className="text-field"
          placeholder="Note Description ..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}
