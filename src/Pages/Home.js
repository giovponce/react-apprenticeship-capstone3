import React, { useState, useEffect } from 'react';
import { StyledP } from '../Utils/Styled Components/StyledText';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore';
import { StyledNotesContainer, StyledMainContainer, StyledInput, StyledInputTitle, StyledInputContent, InputContainer, ButtonForCreation, StyledColorInput, ColorLabel } from '../Utils/Styled Components/StyledContainer';
import { MdOutlinePalette } from "react-icons/md";
import NotesList from '../Components/NotesList';

export default function Home({term}) {

  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, 'notes');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [creation, setCreation] = useState(false);
  const [updatedDB, setUpdatedDB] = useState(false);

  const addNote = async () => {
    if(title || content){
      let isMounted = true;
      if (isMounted){
        await addDoc(notesCollectionRef, {
          title: title,
          content : content,
          color : color
        }).then(
          setTitle(''),
          setContent(''),
          setCreation(false),
          setColor('#ffffff')
        );
      }
      return () => { isMounted = false };
    }else{
      setCreation(false);
    }
  }

  useEffect(() => {
    const fetchNotes = async () => {
        const data = await getDocs(notesCollectionRef);
        const allNotes = data.docs.map(doc => ({...doc.data(), id: doc.id}));
        setNotes(allNotes.filter(note => !note.archived));
        console.log(notes);
    }

    fetchNotes();
    return () => { setUpdatedDB(false) };
  }, [updatedDB]);//eslint-disable-line

  const onArchive = async (id) => {
    console.log(id);
    const noteDoc = doc(db, "notes", id);
    const newNote = {
        archived: true
    }
    await updateDoc(noteDoc, newNote).then(
      setUpdatedDB(true)
    );
  }

  const onDelete = async (id) => {
    const noteDoc = doc(db, "notes", id);
    await deleteDoc(noteDoc).then(
      setUpdatedDB(true)
    );
  }

  const onEdit = async (id, updatedTitle, updatedContent, updatedColor) => {
    if(updatedTitle && updatedColor){
      const noteDoc = doc(db, "notes", id);
      const newNote = {
          title: updatedTitle,
          color: updatedColor
      }
      await updateDoc(noteDoc, newNote).then(
        setUpdatedDB(true)
      );
    }else if(updatedContent && updatedColor){
      const noteDoc = doc(db, "notes", id);
      const newNote = {
          content: updatedContent,
          color: updatedColor
      }
      await updateDoc(noteDoc, newNote).then(
        setUpdatedDB(true)
      );
    }else if(updatedColor){
      const noteDoc = doc(db, "notes", id);
      const newNote = {
          color: updatedColor
      }
      await updateDoc(noteDoc, newNote).then(
        setUpdatedDB(true)
      );
    }else if(updatedTitle){
      const noteDoc = doc(db, "notes", id);
      const newNote = {
          title: updatedTitle
      }
      await updateDoc(noteDoc, newNote).then(
        setUpdatedDB(true)
      );
    }
    else if(updatedContent){
      const noteDoc = doc(db, "notes", id);
      const newNote = {
        content: updatedContent
      }
      await updateDoc(noteDoc, newNote).then(
        setUpdatedDB(true)
      );
    }else if(updatedTitle && updatedContent){
      const noteDoc = doc(db, "notes", id);
      const newNote = {
        title: updatedTitle,
        content: updatedContent
      }
      await updateDoc(noteDoc, newNote).then(
        setUpdatedDB(true)
      );
    }else if(updatedTitle && updatedContent && updatedColor){
      const noteDoc = doc(db, "notes", id);
      const newNote = {
        title: updatedTitle,
        content: updatedContent,
        color: updatedColor
      }
      await updateDoc(noteDoc, newNote).then(
        setUpdatedDB(true)
      );
    }
  }

  return (
    <StyledMainContainer>
      
      {creation ? (
        <InputContainer color={color} >
          <StyledInputTitle onChange={(event)=>{setTitle(event.target.value)}} type="text" placeholder="Title" />
          <StyledInputContent onChange={(event)=>{setContent(event.target.value)}} type="text" placeholder="Take a note..." />
          <ColorLabel><MdOutlinePalette/>
            <StyledColorInput onChange={(event)=>{setColor(event.target.value)}} type="color" value={color} list="presets"/>
            <datalist id="presets">
              <option value="#ffffff"/>
              <option value="#F28B82"/>
              <option value="#FABC02"/>
              <option value="#FFF474"/>
              <option value="#CCFF8F"/>
              <option value="#A7FFEB"/>
              <option value="#CBF0F8"/>
              <option value="#AECBFA"/>
              <option value="#D7AEFB"/>
              <option value="#FBCFE8"/>
              <option value="#E6C9A8"/>
              <option value="#E8EAED"/>
            </datalist>
          </ColorLabel>
          <ButtonForCreation onClick={addNote}>Close</ButtonForCreation>
        </InputContainer>
      ) : (
        <StyledInput placeholder='Take a note...' onFocus={()=>{setCreation(true)}}/>
      )}
      

      {notes.length > 0 ? (
        <StyledNotesContainer>
          <NotesList 
            notes={notes.filter((note) => note.title.toLowerCase().includes(term.toLowerCase()))}
            onArchive={onArchive}
            onDelete={onDelete}
            onEdit={onEdit}
            showArchive={true}
          />
        </StyledNotesContainer>
      ) : (
        <StyledP>There are no notes. Please create a new one using the creation note input.</StyledP>
      )}
      

    </StyledMainContainer>
  )
}
