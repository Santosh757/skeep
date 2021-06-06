import React, { useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  const [addedNote, setAddedNote] = useState([]);

  const showAddedNote = (note) => {
    setAddedNote((preValue) => {
      return [...preValue, note];
    });
  };

  const removeDeletedNote = (id) => {
    setAddedNote((preValue) => {
      return preValue.filter((currentValue, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateNote toShowNote={showAddedNote} />
      <div className="note">
        {addedNote.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              toRemoveNote={removeDeletedNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
