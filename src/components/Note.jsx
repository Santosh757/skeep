import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.toRemoveNote(props.id);
  };
  return (
    <div className="notes">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button className="btn" onClick={deleteNote}>
        Delete
      </button>
    </div>
  );
};

export default Note;
