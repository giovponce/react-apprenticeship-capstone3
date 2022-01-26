import { StyledMobileNav, StyledLi } from "../../Utils/Styled Components/StyledNav";
import { StyledInputForHamburguer, StyledUlForHamburguer, StyledSpanForHamburguer, StyledHamburguerContainer, StyledLinkForHamburguer, StyledFakeLinkForHamburguer } from "../../Utils/Styled Components/StyledHamburguer";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const MobileNavigation = ({ user }) => {
    console.log(user);

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <>
        <StyledMobileNav>
            <StyledHamburguerContainer>
                <StyledInputForHamburguer type="checkbox"></StyledInputForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledUlForHamburguer>
                {user ? (
                    <>
                        <StyledLi>
                            <StyledLinkForHamburguer to="/">Home</StyledLinkForHamburguer>
                        </StyledLi>
                        <StyledLi>
                            <StyledLinkForHamburguer to="/archive">Archive</StyledLinkForHamburguer>
                        </StyledLi>
                        <StyledLi>
                            <StyledFakeLinkForHamburguer onClick={logout}>Logout</StyledFakeLinkForHamburguer>
                        </StyledLi>
                    </>
                ):(
                        <StyledLi>
                            <StyledLinkForHamburguer to="/login">Login</StyledLinkForHamburguer>
                        </StyledLi>
                )}
                    
                </StyledUlForHamburguer>
            </StyledHamburguerContainer>
        </StyledMobileNav>
        </>
        
    )
}

export default MobileNavigation;