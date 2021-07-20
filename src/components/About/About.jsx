import React from "react"
import styled from "styled-components";

const StyledAbout = styled.section`
    background-color: grey;
    text-align: center;
    padding: 2%;
`

const TextAbout = styled.span`
    color: white;
    font-size: 1.5rem;
`

function About() {
    return <StyledAbout>
        <TextAbout>Webpage made by Mati Alvarez using only React with Redux</TextAbout>
    </StyledAbout>
}

export default About;