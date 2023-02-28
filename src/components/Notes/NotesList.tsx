import React from 'react';
import NoteItem from 'src/components/Notes/NoteItem';
import {Note} from 'src/types/NoteType';

interface Props {
    data: Note[]
}

const NotesList: React.FC<Props> = ({data}) => (
    <div className="NoteList">
        {data.map((note) => (
            <NoteItem key={note.id} note={note}/>
        ))}
    </div>
);

export default NotesList;
