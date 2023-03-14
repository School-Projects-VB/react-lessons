import React from "react";
import { useParams } from "react-router-dom";
import NoteItem from "../components/Notes/NoteItem";
import getNote from "../queries/getNote";

const NotePage: React.FC = () => {
    const {noteId} = useParams();
    const state = getNote(noteId);

    return (
        <div className="NotePage">
            <NoteItem key={state.note.id} note={state.note}/>
        </div>
    )
}
export default NotePage;