

function NoteHeader({ notes,sortBy, onSort}) {

  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort Based on latest notes</option>
        <option value="earliest">Sort Based on earliest notes</option>
        <option value="completed">Sort Based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
