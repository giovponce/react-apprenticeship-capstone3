import React, { useState } from 'react';
import { StyledNoteContainer } from '../Utils/Styled Components/StyledContainer';
import { StyledDescription, StyledTitle } from '../Utils/Styled Components/StyledText';
import { StyledInputTitle, StyledInputContent, InputContainer, ButtonForCreation, StyledColorInput, ColorLabel } from '../Utils/Styled Components/StyledContainer';
import { MdOutlinePalette } from "react-icons/md";




export default function Note({note, onDelete, onArchive, onUnArchive, id, onEdit, showArchive}) {
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setTitle] = useState('');
    const [newContent, setContent] = useState('');
    const [newColor, setColor] = useState('#ffffff');


    return (
        <StyledNoteContainer color={note?.color}>
            {editMode ? (
                <>
                <InputContainer>
                    <StyledInputTitle onChange={(event)=>{setTitle(event.target.value)}} type="text" placeholder="Title" />
                    <StyledInputContent onChange={(event)=>{setContent(event.target.value)}} type="text" placeholder="Take a note..." />
                    <ColorLabel><MdOutlinePalette/>
                        <StyledColorInput onChange={(event)=>{setColor(event.target.value)}} type="color" value={newColor} list="presets"/>
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
                    <ButtonForCreation onClick={(event)=>{
                        onEdit(id, newTitle, newContent, newColor);
                        setEditMode(false);
                    }}>Close</ButtonForCreation>
                </InputContainer>
                </>
            ) : (
                <>
                <StyledTitle>{note?.title}</StyledTitle>
                <StyledDescription>{note?.content}</StyledDescription>
                <button onClick={() => setEditMode(true)}>Edit</button>
                {showArchive ? <button  onClick={() => onArchive(id)}>Archive</button> : <button onClick={()=>{onUnArchive(id)}}>Unarchive</button>}
                <button onClick={() => onDelete(id)}>Delete</button>
                </>
            )}
            
        </StyledNoteContainer>
    )
}
