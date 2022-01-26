import styled from "styled-components";
import { Link } from 'react-router-dom';


export const StyledH1 = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    font-weight: bolder;
`;

export const StyledTitle = styled.p`
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
`;

export const StyledDescription = styled.p`
    font-size: 1rem;
    text-align: center;
    font-weight: normal;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-family: sans-serif;
    font-size: 1.2rem;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #00bcd4;
    }
`;

export const StyledFakeLink = styled.p`
    cursor: pointer;
    display: contents;
    text-decoration: none;
    color: white;
    font-family: sans-serif;
    font-size: 1.2rem;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #00bcd4;
    }
`;