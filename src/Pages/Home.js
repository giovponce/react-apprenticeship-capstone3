import React, { useState, useEffect } from 'react';
import Note from '../Components/Note';
import { StyledH1 } from '../Utils/Styled Components/StyledText';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function Home() {

  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, 'notes');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = async () => {
    await addDoc(notesCollectionRef, {
      title: title,
      content : content
    });
    setTitle('');
    setContent('');
  }

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getDocs(notesCollectionRef);
      setNotes(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }

    fetchNotes();
  });

  return (
    <div>
      <StyledH1>Home</StyledH1>
      <input onChange={(event)=>{setTitle(event.target.value)}} type="text" placeholder="title" />
      <input onChange={(event)=>{setContent(event.target.value)}} type="text" placeholder="content" />
      <button onClick={addNote}>Add note</button>

      {notes.map((note) => {
        return (
          <Note key={note.id} note={note} />
        )
      })}
    </div>
  )
}
