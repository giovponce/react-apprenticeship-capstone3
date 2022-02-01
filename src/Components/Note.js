import React, { useState } from 'react';
import { StyledNoteContainer } from '../Utils/Styled Components/StyledContainer';
import { StyledDescription, StyledTitle } from '../Utils/Styled Components/StyledText';
import { StyledInputTitle, StyledInputContent, InputContainer, ButtonForCreation, StyledColorInput, ColorLabel, BtnForIcons, StyledFlexContainer } from '../Utils/Styled Components/StyledContainer';
import { MdOutlinePalette } from "react-icons/md";
import { MdOutlineArchive, MdOutlineUnarchive, MdDeleteOutline, MdEditNote } from "react-icons/md";




export default function Note({note, onDelete, onArchive, onUnArchive, id, onEdit, showArchive}) {
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newColor, setNewColor] = useState('');


    return (
        <StyledNoteContainer color={newColor ? newColor : note?.color}>
            {editMode ? (
                <>
                <InputContainer color={newColor ? newColor : note?.color}>
                    <StyledInputTitle onChange={(event)=>{setNewTitle(event.target.value)}} type="text" value={newTitle ?  newTitle : note?.title}/>
                    <StyledInputContent onChange={(event)=>{setNewContent(event.target.value)}} type="text" value={newContent ? newContent : note?.content}/>
                    <ColorLabel><MdOutlinePalette/>
                        <StyledColorInput onChange={(event)=>{setNewColor(event.target.value)}} type="color" list="presets"/>
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
                    <StyledFlexContainer>
                        {showArchive ? <BtnForIcons><MdOutlineArchive  onClick={() => onArchive(id)}/></BtnForIcons> : <BtnForIcons><MdOutlineUnarchive  onClick={()=>{onUnArchive(id)}}/></BtnForIcons>}
                        <BtnForIcons><MdEditNote onClick={() => setEditMode(true)}/></BtnForIcons>
                        <BtnForIcons><MdDeleteOutline onClick={() => onDelete(id)}/></BtnForIcons>
                    </StyledFlexContainer>
                </>
            )}
            
        </StyledNoteContainer>
    )
}
