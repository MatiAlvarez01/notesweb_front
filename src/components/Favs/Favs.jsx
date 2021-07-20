import React from "react"
import Note from "../Note/Note";
import styled from "styled-components";
import { connect } from "react-redux";

const FavsSection = styled.section`
    background-color: coral;
    display: flex;
    justify-content: space-around;
    padding: 2%;
`

function Favs(props) {
    return <FavsSection>
        {props.favs?.length > 0 ? 
        props.favs.map(note => <Note key={note.id} note={note}/>) : 
        <span>You don't have any notes in Favs!</span>}
    </FavsSection>
}

function mapStateToProps(state) {
    return {
        favs: state.favs
    }
}

export default connect(mapStateToProps)(Favs)