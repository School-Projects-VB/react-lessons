import React from 'react';
import NoteItem from 'src/components/Notes/NoteItem';
import Loading, {LoadingColor} from "../Loading";
import getNotes from "../../queries/getNotes";

const NotesList: React.FC = () => {
    const state = getNotes();

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
