import React, { useState, useEffect } from 'react';
import { StyledH1, StyledP } from '../Utils/Styled Components/StyledText';
import { db } from '../firebase-config';
import { StyledMainContainer, StyledNotesContainer } from '../Utils/Styled Components/StyledContainer';
import NotesList from '../Components/NotesList';
import { collection, getDocs, doc, updateDoc, deleteDoc, } from 'firebase/firestore';


export default function Archive({term}) {

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
  }, []);//eslint-disable-line

  const onDelete = async (id) => {
    const noteDoc = doc(db, "notes", id);
    await deleteDoc(noteDoc);
  }

  const onEdit = async (id, updatedTitle, updatedContent, updatedColor) => {
    if(updatedTitle || updatedContent){
      const noteDoc = doc(db, "notes", id);
      const newNote = {
          title: updatedTitle,
          content: updatedContent,
          color: updatedColor
      }
      await updateDoc(noteDoc, newNote);
    }
  }

  const onUnArchive = async (id) => {
    const noteDoc = doc(db, "notes", id);
    const newNote = {
        archived: false
    }
    await updateDoc(noteDoc, newNote);
}

  return (
      <StyledMainContainer>
      <StyledH1>Archive</StyledH1>

      {notes.length > 0 ? (
        <StyledNotesContainer>
          <NotesList 
            notes={notes.filter((note) => note.title.toLowerCase().includes(term.toLowerCase()))}
            onUnArchive={onUnArchive}
            onDelete={onDelete}
            onEdit={onEdit}
            showArchive={false}
          />
        </StyledNotesContainer>
      ):(
        <StyledP>No archived notes</StyledP>
      )}
      
      </StyledMainContainer>
  )
}
