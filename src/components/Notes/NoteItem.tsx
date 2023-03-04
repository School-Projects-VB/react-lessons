import React from 'react';
import {Note} from 'src/types/NoteType';
import { formatFirebaseDate } from 'src/helpers/dateHelper';
import { Timestamp } from '@firebase/firestore';

interface Props {
    note: Note;
}

const NoteItem: React.FC<Props> = ({note}) => (
    <div className="NoteItem">
        <h3>{note.title}</h3>
        <p>{note.content}</p>

        <p>
            {formatFirebaseDate(note.created_date as Timestamp)}
        </p>
    </div>
);

export default NoteItem;
