import React from "react"
import NoteItem from './NoteItem'

const NoteList: React.FC = () => (
    <div className="NoteList">
        {Array.from(Array(4)).map(() => (
            <NoteItem />
        ))}
    </div>
);

export default NoteList;