import React from "react"
import styled from "styled-components";
import { connect } from "react-redux"
import Note from "../Note/Note";

const NotesSection = styled.section`
    background-color: coral;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2%;
`

function Notes(props) {
    return <NotesSection>
        {props.notes?.length > 0 ? 
        props.notes.map(note => <Note key={note.id} note={note}/>): 
        <span>You don't have any note!</span>}
    </NotesSection>
}

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Notes);