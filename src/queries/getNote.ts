import {db} from "../config/firebase";
import {
    doc,
    getDoc,
} from "firebase/firestore";
import {useContext, useEffect} from "react";
import {NoteContext} from "../context/NoteProvider";
import {NoteActionType} from "../context/NoteReducer";

const getNote = (noteId: string | undefined) => {
    const [state, dispatch] = useContext(NoteContext);
    const id: string = noteId? noteId : state.note.id;

    useEffect(() => {
        const docRef = doc(db, "notes", id);

        getDoc(docRef)
            .then((snapshot) => {
                dispatch({
                    type: NoteActionType.SET_NOTES,
                    payload: snapshot.data()
                });
            })
            .catch((e) => console.error('ERROR', e))
            .finally(() => dispatch({
                type: NoteActionType.SET_LOADING,
                payload: false,
            }));
    }, []);

    return state
}

export default getNote;