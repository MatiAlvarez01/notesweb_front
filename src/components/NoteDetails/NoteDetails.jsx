import React from "react"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Note from "../Note/Note";

const NoteDetailsSection = styled.section`
    background-color: coral;
    display: flex;
    justify-content: space-around;
    padding: 2%;
`

function NoteDetails(props) {
    const {id} = useParams();
    var noteSelected = props.notes.find(note => note.id === parseInt(id))

    return <NoteDetailsSection>
        {noteSelected ?
        <Note note={noteSelected}/> :
        <span>{`Note with ID: ${id} dosn't exist!`}</span>}
    </NoteDetailsSection>
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NoteDetails);