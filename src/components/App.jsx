import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList(prev => {
      return [...prev, note];
    });
  }
  function deleteNote(index) {
    setNoteList(prev => {
      return prev.filter((note, indx) => indx !== index);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((noteUnit, indx) => (
        <Note
          key={indx}
          index={indx}
          title={noteUnit.title}
          content={noteUnit.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
