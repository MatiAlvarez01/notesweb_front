import React, { useState } from "react"
import styled from "styled-components";
import { connect } from "react-redux"
import { newNote } from "../../actions";

const CreateSection = styled.section `
    align-items:center;
    text-align: -webkit-center;
    padding: 2%;
    background-color: orange;
`

const Newnote = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1%;
    width: 500px;
    border: 2px dashed rgba(28,110,164,0.35);
    border-radius: 30px;
    align-items: center;
`

const StyledInput = styled.input`
    border: 0px;
    border-radius: 25px 25px 0px 0px;
    padding: 2%;
    text-align: center;
    border: none;
    overflow: none;
    outline: none;
    width: 95%;
`
const StyledTextarea = styled.textarea`
    border: 0px;
    margin-top: 2px;
    border-radius: 0px 0px 25px 25px;
    padding: 2%;
    text-align: center;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    width: 95%
`
const StyledButton = styled.button`
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#777777;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
    width:50%;
    margin-top: 1%;
`

function NewNote(props) {

    const [note, setNote] = useState({})
    const [noteId, setNoteId] = useState(0)

    function handleSubmit(event) {
        event.preventDefault();
        setNoteId(noteId + 1)
        props.newNote(note)
    }

    function handleChange(event) {
        setNote({
            ...note,
            id: noteId,
            [event.target.name] : event.target.value
        })
    }

    return <CreateSection>
        <Newnote onSubmit={handleSubmit}>
            <StyledInput 
                placeholder="Note title" 
                name="title"
                onChange={handleChange}
                autoComplete="off"
                />
            <StyledTextarea 
                placeholder="Take a Note!" 
                name="content"
                onChange={handleChange}
                />
            <StyledButton type="submit">Add</StyledButton>
        </Newnote>
    </CreateSection>
}


export default connect(null, { newNote })(NewNote);