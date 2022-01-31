import { StyledMobileNav, StyledLi } from "../../Utils/Styled Components/StyledNav";
import { StyledInputForHamburguer, StyledUlForHamburguer, StyledSpanForHamburguer, StyledHamburguerContainer, StyledLinkForHamburguer, StyledFakeLinkForHamburguer } from "../../Utils/Styled Components/StyledHamburguer";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useHistory } from 'react-router-dom';
import Search from './Search';
import { StyledFlexContainer } from "../../Utils/Styled Components/StyledContainer";
import { MdLightbulbOutline, MdOutlineArchive } from "react-icons/md";

const MobileNavigation = ({ user, getSearchResult }) => {
    const navigate = useHistory();


    const logout = async () => {
        await signOut(auth);
        navigate.push('/login');
    };

    return (
        <>
        <StyledMobileNav>
            <StyledHamburguerContainer>
                {user ? (
                    <StyledFlexContainer>
                    <div>
                        <StyledInputForHamburguer type="checkbox"></StyledInputForHamburguer>
                        <StyledSpanForHamburguer></StyledSpanForHamburguer>
                        <StyledSpanForHamburguer></StyledSpanForHamburguer>
                        <StyledSpanForHamburguer></StyledSpanForHamburguer>
                    
                        <StyledUlForHamburguer>
                            <StyledLi>
                                <StyledLinkForHamburguer to="/"><MdLightbulbOutline/> Notes</StyledLinkForHamburguer>
                            </StyledLi>
                            <StyledLi>
                                <StyledLinkForHamburguer to="/archive"><MdOutlineArchive/> Archive</StyledLinkForHamburguer>
                            </StyledLi>
                            <StyledLi>
                                <StyledFakeLinkForHamburguer onClick={logout}>Logout</StyledFakeLinkForHamburguer>
                            </StyledLi>
                        </StyledUlForHamburguer>
                        </div>
                    <div>
                        <Search getSearchResult={getSearchResult}/>
                    </div>
                    </StyledFlexContainer>
                ):(
                    <StyledLinkForHamburguer to="/login">Login</StyledLinkForHamburguer>     
                )}
            </StyledHamburguerContainer>
        </StyledMobileNav>
        </>
        
    )
}

export default MobileNavigation;