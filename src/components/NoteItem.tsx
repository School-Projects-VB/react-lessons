import React from "react"

interface ListProperties {
    title: string,
    content: string
}

const NoteItem = (props :ListProperties) => (
    <div className="NoteItem">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
);

export default NoteItem;