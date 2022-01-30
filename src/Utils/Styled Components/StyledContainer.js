import styled from 'styled-components';


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

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const StyledNotesContainer = styled.div`
    display: flex;
`;

export const StyledMainContainer = styled.div`
    width: 98vw;
`;