const initialState = {
    notes: [],
    favs: [],
    doneNotes: []
}

function Actions(state = initialState, action) {
    switch(action.type) {
        case "NEW_NOTE":
            const newNote = action.payload
            return {
                ...state,
                notes: [...state.notes, newNote]
            }
        case "GET_NOTES": 
            return {
                ...state
            }
        case "ADD_TO_FAVS":
            const newFav = state.notes.find(note => note.id === action.payload)
            const exist = state.favs.find(note => note.id === newFav.id)
            if (exist) {
                alert("Note already on Favs")
                return {...state}
            }
            return {
                ...state,
                favs: [...state.favs, newFav]
            }
        case "DONE_NOTE":
            const newDoneNote = state.notes.find(note => note.id === action.payload)
            return {
                ...state,
                doneNotes: [...state.doneNotes, newDoneNote]
            }
        case "REMOVE_NOTE":
            const cleanNotes = state.notes.filter(note => note.id !== action.payload)
            const cleanNotesFavs = state.favs.filter(note => note.id !== action.payload)
            return {
                ...state,
                notes: cleanNotes,
                favs: cleanNotesFavs
            }
        default:
            return {...state}
    }
}

export default Actions;