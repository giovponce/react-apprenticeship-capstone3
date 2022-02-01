import { StyledNav, StyledLi, StyledUl } from "../../Utils/Styled Components/StyledNav";
import { StyledLink, StyledFakeLink } from "../../Utils/Styled Components/StyledText";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Search from "./Search";
import { useHistory } from 'react-router-dom';


const Navigation = ({ user, getSearchResult }) => {
    const navigate = useHistory();


    const logout = async () => {
        await signOut(auth);
        navigate.push('/login');
    };


    return (
        <> 
        <StyledNav>
        <StyledUl>
            {user ? (
                <>
                    <Search getSearchResult={getSearchResult}/>
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