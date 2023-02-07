import React from "react"

function NoteList() {
    let list = ["note1", "note2", "note3"]

    return (
        <ul>
            {list.map((item) => <li>{item}</li>)}
        </ul>
    )
}

export default NoteList