import {useContext, useEffect} from "react";
import {NoteContext} from "../context/NoteProvider";
import {collection, CollectionReference, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../config/firebase";
import {Note} from "../types/NoteType";
import {NoteActionType} from "../context/NoteReducer";

const getNotes = () => {
    const [state, dispatch] = useContext(NoteContext);

    useEffect(() => {
        const q = query(
            collection(db, 'notes') as CollectionReference<Note>,
            orderBy('created_date', 'desc'),
        );

        getDocs(q)
            .then((querySnapshot) => {
                dispatch({
                    type: NoteActionType.SET_NOTES,
                    payload: querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    })),
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


export default getNotes;