import React from 'react';
import Note from '../Components/Note';
import { StyledH1 } from '../Utils/Styled Components/StyledText';


export default function Home() {
  return (
    <div>
      <StyledH1>Home</StyledH1>
      <Note/>
    </div>
  )
}
