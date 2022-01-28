import React from 'react';
import { StyledNoteContainer } from '../Utils/Styled Components/StyledContainer';
import { StyledDescription, StyledTitle } from '../Utils/Styled Components/StyledText';
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';



export default function Note({note}) {

    const updateNote = async (id, title, content) => {
        const noteDoc = doc(db, "notes", id);
        const newNote = {
            title: title + 'modified from app',
            content: content + 'modified from app'
        }
        await updateDoc(noteDoc, newNote)
    }

    const deleteNote = async (id) => {
        const noteDoc = doc(db, "notes", id);
        await deleteDoc(noteDoc);
    }

    return (
        <StyledNoteContainer>
            <StyledTitle>{note?.title}</StyledTitle>
            <StyledDescription>{note?.content}</StyledDescription>
            <button onClick={()=>{updateNote(note.id, note.title, note.content)}}>Edit</button>
            <button onClick={()=>{deleteNote(note.id)}}>Delete</button>
        </StyledNoteContainer>
    )
}
