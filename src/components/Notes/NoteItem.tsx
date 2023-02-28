import React from 'react';
import {Note} from 'src/types/NoteType';

interface Props {
    note: Note;
}

const NoteItem: React.FC<Props> = ({note}) => (
    <div className="NoteItem">
        <div>{note.title}</div>
        <p>{note.content}</p>
    </div>
);

export default NoteItem;
