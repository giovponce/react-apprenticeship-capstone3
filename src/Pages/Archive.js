import React, { useState, useEffect } from 'react';
import Note from '../Components/Note';
import { StyledH1, StyledP } from '../Utils/Styled Components/StyledText';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { StyledMainContainer, StyledNotesContainer } from '../Utils/Styled Components/StyledContainer';

export default function Home() {

  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, 'notes');

  useEffect(() => {
    let isMounted = true;
    const fetchNotes = async () => {
      if (isMounted){
        const data = await getDocs(notesCollectionRef);
        const allNotes = data.docs.map(doc => ({...doc.data(), id: doc.id}));
        setNotes(allNotes.filter(note => note.archived));
      }
    }

    fetchNotes();
    return () => { isMounted = false };
  }, []);

  return (
      <StyledMainContainer>
      <StyledH1>Archive</StyledH1>

      <StyledNotesContainer>
        {notes.length > 0 ? notes.map((note) => {
          return (
            <Note key={note.id} note={note} archive={false} />
          )
        }): <StyledP>No archived notes</StyledP>}
      </StyledNotesContainer>
      </StyledMainContainer>
  )
}
