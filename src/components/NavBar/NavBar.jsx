import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;

const Navbar = styled.section`
    background-color: blanchedalmond;
`

const NavbarLogo = styled.div`
    float: left;
`;

const NavbarActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Actions = styled.span`
    font-size: 1.5rem;
    margin: 10px;
`;

function NavBar() {
    return <Navbar>
        <NavbarActions>
        <StyledLink to="/">
            <NavbarLogo>
                <img src="logo.png" alt="logo"></img>
            </NavbarLogo>
        </StyledLink>
            <StyledLink to="/"><Actions>HOME</Actions></StyledLink>
            <StyledLink to="/notes"><Actions>NOTES</Actions></StyledLink>
            <StyledLink to="/favs"><Actions>FAVS</Actions></StyledLink>
            <StyledLink to="/about"><Actions>ABOUT</Actions></StyledLink>
        </NavbarActions>
    </Navbar>
}

export default NavBar;