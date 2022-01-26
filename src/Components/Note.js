import React from 'react';
import { StyledNoteContainer } from '../Utils/Styled Components/StyledContainer';
import { StyledDescription, StyledTitle } from '../Utils/Styled Components/StyledText';

export default function Note() {
    return (
        <StyledNoteContainer>
            <StyledTitle>Title</StyledTitle>
            <StyledDescription>Description</StyledDescription>
        </StyledNoteContainer>
    )
}
