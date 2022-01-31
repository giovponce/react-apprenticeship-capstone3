import React from 'react';
import { StyledNoteContainer } from '../Utils/Styled Components/StyledContainer';
import { StyledDescription, StyledTitle } from '../Utils/Styled Components/StyledText';
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';



export default function Note({note, archive}) {


    const updateNote = async (id, title, content) => {
        const noteDoc = doc(db, "notes", id);
        const newNote = {
            title: title + 'modified from app',
            content: content + 'modified from app'
        }
        await updateDoc(noteDoc, newNote);
    }

    const archiveNote = async (id) => {
        const noteDoc = doc(db, "notes", id);
        const newNote = {
            archived: true
        }
        await updateDoc(noteDoc, newNote);
    }

    const unarchiveNote = async (id) => {
        const noteDoc = doc(db, "notes", id);
        const newNote = {
            archived: false
        }
        await updateDoc(noteDoc, newNote);
    }

    const deleteNote = async (id) => {
        const noteDoc = doc(db, "notes", id);
        await deleteDoc(noteDoc);
    }

    return (
        <StyledNoteContainer color={note?.color}>
            <StyledTitle>{note?.title}</StyledTitle>
            <StyledDescription>{note?.content}</StyledDescription>
            <button onClick={()=>{updateNote(note.id, note.title, note.content)}}>Edit</button>
            {archive ? <button onClick={()=>{archiveNote(note.id)}}>Archive</button> : <button onClick={()=>{unarchiveNote(note.id)}}>Unarchive</button>}
            <button onClick={()=>{deleteNote(note.id)}}>Delete</button>
        </StyledNoteContainer>
    )
}
