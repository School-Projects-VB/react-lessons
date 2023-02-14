import React from "react"
import NoteItem from './NoteItem'
import '../App.css'

const NoteList: React.FC = () => (
    <div className="NoteList">
        {Array.from([
            ["Prog", "Don't forget to review lessons"],
            ["Data", "Review MongoDB operators"],
            ["Bank", "Go to bank tuesday"],
            ["Other", "Call uncle Ben"]
        ]).map(([title, content]) => (
            <NoteItem title={title} content={content} />
        ))}
    </div>
);

export default NoteList;