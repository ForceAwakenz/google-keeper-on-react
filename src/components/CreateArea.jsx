import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({ title: '', content: '' });
  const [ifClicked, setIfClicked] = useState(false);
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
      <form className='create-note' onSubmit={e => e.preventDefault()}>
        {ifClicked && (
          <input
            onChange={handleChange}
            name='title'
            placeholder='Title'
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows={ifClicked ? 3 : 1}
          value={note.content}
          onClick={() => setIfClicked(true)}
        />
        <Zoom in={ifClicked}>
          <button onClick={handleClick}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
