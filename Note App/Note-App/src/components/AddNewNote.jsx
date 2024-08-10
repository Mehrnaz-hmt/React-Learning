import React from "react";

export default function AddNewNote() {
  // Handlers
//   const handleSubmit = (e) => {
//     // e.preventDefault();
//     console.log(e);
//   };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
       <form >
        <input className="text-field" name="name" type="text"  placeholder="Add New Note ..."/>
        <input
        name="name"
          type="text"
          className="text-field"
          placeholder="Note Description ..."
        />
        <button  type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form> 

      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder="Plz enter your name..."/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
