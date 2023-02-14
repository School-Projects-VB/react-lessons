import '/public/css/App.css'

interface ListProperties {
    id: number,
    title: string,
    content: string
}

function NoteItem(props: ListProperties) {
    const {id, title, content} = props

    return (
        <div className="NoteItem">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default NoteItem;