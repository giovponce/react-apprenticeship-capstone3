import React, { useState, useEffect } from 'react';
import Note from '../Components/Note';
import { StyledP } from '../Utils/Styled Components/StyledText';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { StyledNotesContainer, StyledMainContainer, StyledInput, StyledInputTitle, StyledInputContent, InputContainer, ButtonForCreation, StyledColorInput, ColorLabel } from '../Utils/Styled Components/StyledContainer';
import { MdOutlinePalette } from "react-icons/md";


export default function Home({filteredNotes}) {

  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, 'notes');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [creation, setCreation] = useState(false);

  const addNote = async () => {
    if(title && content){
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
    let isMounted = true;
    const fetchNotes = async () => {
      if (isMounted){
        const data = await getDocs(notesCollectionRef);
        const allNotes = data.docs.map(doc => ({...doc.data(), id: doc.id}));
        setNotes(allNotes.filter(note => !note.archived));
        console.log(notes);
      }
    }

    fetchNotes();
    return () => { isMounted = false };
  }, []);


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
      


      <StyledNotesContainer>
        {notes.length > 0 ? notes.map((note) => {
          return (
            <Note key={note.id} note={note} archive={true} />
          )
        }) : <StyledP>There are no notes. Please create a new one using the creation note input.</StyledP>}
      </StyledNotesContainer>

    </StyledMainContainer>
  )
}
