export function newNote(noteContent) {
    return {
        type: "NEW_NOTE",
        payload: noteContent
    }
};

export function getNotes() {
    return {
        type: "GET_NOTES",
    }
};

export function addToFavs(id) {
    return {
        type: "ADD_TO_FAVS",
        payload: id
    }
};

export function doneNote(id) {
    return {
        type: "DONE_NOTE",
        payload: id
    }
};

export function removeNote(id) {
    return {
        type: "REMOVE_NOTE",
        payload: id
    }
};