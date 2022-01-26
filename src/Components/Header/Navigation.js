import { StyledNav, StyledLi, StyledUl } from "../../Utils/Styled Components/StyledNav";
import { StyledLink } from "../../Utils/Styled Components/StyledText";

const Navigation = () => {
    return (
        <> 
        <StyledNav>
        <StyledUl>
            <StyledLi>
                <StyledLink to="/">Notes</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink to="/login">Login</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink to="/archive">Archive</StyledLink>
            </StyledLi>
        </StyledUl>
        </StyledNav>
        </>
    )
}

export default Navigation;