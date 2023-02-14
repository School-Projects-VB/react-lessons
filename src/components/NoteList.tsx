import React from "react"
import NoteItem from './NoteItem'
import '/public/css/App.css'

export const values = [
    {
        id: 1,
        title: "Prog",
        content: "Don't forget to review lessons"
    },
    {
        id: 2,
        title: "Data",
        content: "Review MongoDB operators"
    },
    {
        id: 3,
        title: "Bank",
        content: "Go to bank tuesday"
    },
    {
        id: 4,
        title: "Other",
        content: "Call uncle Ben"
    }
]

const NoteList: React.FC = () => (
    <div className="NoteList">
        {values.map(({id, title, content}) => (
            <NoteItem id={id} title={title} content={content} />
        ))}
    </div>
);

export default NoteList;