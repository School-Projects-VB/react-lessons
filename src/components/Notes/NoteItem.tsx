import React from 'react';
import {Note} from 'src/types/NoteType';

interface Props {
    note: Note;
}

const NoteItem: React.FC<Props> = ({note}) => (
    <div className="NoteItem">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
    </div>
);

export default NoteItem;
