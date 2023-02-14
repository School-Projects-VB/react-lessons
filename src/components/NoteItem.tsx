interface ListProperties {
    title: string,
    content: string
}

function NoteItem(props: ListProperties) {
    const {title, content} = props

    return (
        <div className="NoteItem">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default NoteItem;