import { StyledNav, StyledLi, StyledUl } from "../../Utils/Styled Components/StyledNav";
import { StyledLink, StyledFakeLink } from "../../Utils/Styled Components/StyledText";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const Navigation = ({ user }) => {
    console.log(user);

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <> 
        <StyledNav>
        <StyledUl>
            {user ? (
                <>
                    <StyledLi>
                        <StyledLink to="/">Notes</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/archive">Archive</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledFakeLink onClick={logout}>Logout</StyledFakeLink>
                    </StyledLi>
                </>
            ) : (
                <StyledLi>
                    <StyledLink to="/login">Login</StyledLink>
                </StyledLi>
            )}
            
        </StyledUl>
        </StyledNav>
        </>
    )
}

export default Navigation;