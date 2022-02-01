import styled from 'styled-components';

export const StyledUl = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    background-color: white;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: #5f6368;
`;


export const StyledLi = styled.li`
    text-decoration: none !important;
    color: #5f6368;
    padding: 2%;
`;

export const StyledMobileNav = styled.nav`
    display: block;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const StyledNav = styled.nav`
    display: none;
    @media (min-width: 769px) {
        display: block;
    }
`;
