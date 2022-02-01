import styled from 'styled-components';


export const SearchInput = styled.input`
    display: inline-flex;
    
    padding: 3px;
    padding-left: 3.5em;
    border: solid 1px #E4E4E4;
    border-radius: 6px;
    background-color: #F1F3F4;
    color: #202124;
    width: 30vw;
    height: 3em;
    font-size: 16px;
    line-height: 2em;

    &:focus {
        background-color: #fff;
        box-shadow: 5px 2px 18px #888888;
    }
`;

export const SearchFormStyled = styled.form`
    display: flex;
    align-items: center;
    font-size: 1.5em;
`;