import React, { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const expandForm = () => {
    setExpand(true);
  };

  const closeForm = () => {
    setExpand(false);
  };

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addNote = (e) => {
    e.preventDefault();
    props.toShowNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="create-note">
      <form className="note-form" action="">
        {expand ? (
          <input
            type="text"
            placeholder="Title"
            value={note.title}
            name="title"
            autoComplete="off"
            onChange={inputEvent}
          />
        ) : null}

        <textarea
          name="write-note"
          id=""
          cols="30"
          rows="10"
          placeholder="Write a note..."
          value={note.content}
          name="content"
          onChange={inputEvent}
          onClick={expandForm}
        ></textarea>

        <div className="form-btn">
          {expand ? (
            <button className="btn" onClick={addNote}>
              Add
            </button>
          ) : null}

          {expand ? (
            <button className="btn" onClick={closeForm}>
              Close
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
