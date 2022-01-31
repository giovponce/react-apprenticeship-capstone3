import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    font-family: sans-serif;
`;

export const ButtonForCreation = styled.button`
    display: flex;
    justify-content: end;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 10%;
    position: relative;
    left: 90%;
    font-weight: 600;
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2%;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 100vh;
    padding-bottom: 5%;
`;

export const StyledNoteContainer = styled.div`
    display: grid;
    justify-content: center;
    background-color: ${(props) => props.color};
    text-align: center;
    margin: 2%;
    padding: 2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 20%;
    border-radius: 8px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const StyledNotesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledMainContainer = styled.div`
    width: 98vw;
`;

export const StyledInput = styled.input`
    display: inline-flex;
    box-shadow: 5px 2px 18px #888888;
    padding: 3px;
    border: solid 1px #E4E4E4;
    border-radius: 6px;
    background-color: #fff;
    color: #202124;
    width: 40%;
    height: 2em;
    font-size: 16px;
    line-height: 2em;
    padding-left: 2%;
`;

export const StyledInputTitle = styled.input`
    display: inline-flex;
    padding: 3px;
    border: solid 1px transparent;
    border-radius: 6px;
    background-color: transparent;
    width: 48vw;
    padding-left: 2%;
    font-size: 18px;
    margin-bottom: 1em;
    margin-top: 0.5em;
`;

export const StyledInputContent = styled.input`
    display: inline-flex;
    padding: 3px;
    border: solid 1px transparent;
    border-radius: 6px;
    background-color: transparent;
    width: 48vw;
    padding-left: 2%;
    font-size: 14px;
    margin-bottom: 1em;
`;

export const InputContainer = styled.div`
    padding: 3px;
    border: solid 1px #E4E4E4;
    border-radius: 6px;
    display: grid;
    justify-content: start;
    width: 50vw;
    margin: auto;
    box-shadow: 5px 10px 18px #888888;
    background-color: ${(props) => props.color}
    ;
`;

export const StyledColorInput = styled.input`
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    cursor: pointer;
    color: transparent;
    visibility: hidden;

    &::-moz-color-swatch {
        border-color: red;
    }

    &:focus {
        border: 1px solid transparent;
    }
`;

export const ColorLabel = styled.label`
    font-size: 1.5em;
    float: left !important;
    display: flex;
    justify-content: start;
    cursor: pointer;
    padding-left: 2%;
    margin-top: 0.5em;
`;

export const StyledFlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;