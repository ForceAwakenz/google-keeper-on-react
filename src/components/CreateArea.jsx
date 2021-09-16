import React, { useState } from 'react';

function CreateArea(props) {
  const [note, setNote] = useState({ title: '', content: '' });
  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleClick() {
    props.addNote(note);
    setNote({ title: '', content: '' });
  }
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          onChange={handleChange}
          name='title'
          placeholder='Title'
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows='3'
          value={note.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
