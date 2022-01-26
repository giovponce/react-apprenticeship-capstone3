import { StyledMobileNav, StyledLi } from "../../Utils/Styled Components/StyledNav";
import { StyledInputForHamburguer, StyledUlForHamburguer, StyledSpanForHamburguer, StyledHamburguerContainer, StyledLinkForHamburguer } from "../../Utils/Styled Components/StyledHamburguer";

const MobileNavigation = () => {
    return (
        <>
        <StyledMobileNav>
            <StyledHamburguerContainer>
                <StyledInputForHamburguer type="checkbox"></StyledInputForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledUlForHamburguer>
                    <StyledLi>
                        <StyledLinkForHamburguer to="/">Home</StyledLinkForHamburguer>
                    </StyledLi>
                    <StyledLi>
                        <StyledLinkForHamburguer to="/login">Login</StyledLinkForHamburguer>
                    </StyledLi>
                    <StyledLi>
                        <StyledLinkForHamburguer to="/archive">Archive</StyledLinkForHamburguer>
                    </StyledLi>
                </StyledUlForHamburguer>
            </StyledHamburguerContainer>
        </StyledMobileNav>
        </>
        
    )
}

export default MobileNavigation;