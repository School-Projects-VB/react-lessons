import React from "react"
import NoteItem from './NoteItem'

const NoteList: React.FC = () => (
    <div>
        {Array.from(Array(40)).map(() => (
            <NoteItem />
        ))}
    </div>
);

export default NoteList;