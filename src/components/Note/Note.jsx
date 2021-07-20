import React from "react"
import styled from "styled-components";
import { connect } from "react-redux"
import { removeNote, addToFavs } from "../../actions";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;

const StyledNote = styled.div`
    background-color: orange;
    padding: 1% 3%;
    border-radius: 15px;
    margin-bottom: 2%;
`
const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledP = styled.p`
    color: white;
    font-size: 1.5rem;
`

const StyledButton = styled.button`
    background:linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
	background-color:#ffffff;
	border-radius:42px;
	border:1px solid #000000;
	display:inline-block;
	cursor:pointer;
	color:#030003;
	font-family:Arial;
	font-size:9px;
	font-weight:bold;
	padding:6px 8px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
`

function Note(props) {

    function handleClickFav(event) {
        event.preventDefault();
        props.addToFavs(props.note.id)
    }

    function handleClickRemove(event) {
        event.preventDefault();
        props.removeNote(props.note.id)
    }
    
    return <StyledNote>
        <ButtonsDiv>
        { props.favs.find(noteFav => noteFav.id === props.note.id) ? 
            <StyledButton 
                name="Check"
                onClick={handleClickFav}
                >💗</StyledButton> :
                <StyledButton 
                name="Check"
                onClick={handleClickFav}
                >🖤</StyledButton>}
            <StyledButton 
                name="Remove"
                onClick={handleClickRemove}
                >X</StyledButton>
        </ButtonsDiv>
        <StyledLink to={`/notes/${props.note.id}`}><StyledP>{props.note.title}</StyledP></StyledLink>
        <StyledP>{props.note.content}</StyledP>
    </StyledNote>
}

function mapStateToProps(state) {
    return {
        favs: state.favs
    }
}

export default connect(mapStateToProps, {removeNote, addToFavs})(Note)