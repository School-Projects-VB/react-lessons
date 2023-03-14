import React, {useContext, useEffect} from 'react';
import NoteItem from 'src/components/Notes/NoteItem';
import {Note} from 'src/types/NoteType';
import {NoteContext} from "../../context/NoteProvider";
import {collection, CollectionReference, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../../config/firebase";
import {NoteActionType} from "../../context/NoteReducer";
import Loading, {LoadingColor} from "../Loading";

const NotesList: React.FC = () => {
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

    if (state.loading) {
        return (
            <Loading color={LoadingColor.BLUE}/>
        );
    }

    return (
        <div className="NoteList">
            {state.notes.map((note) => (
                <NoteItem key={note.id} note={note}/>
            ))}
        </div>
    );
}

export default NotesList;
