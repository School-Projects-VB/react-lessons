import NoteItem from './NoteItem'

const values = [
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

const NoteList = () => (
    <div className="NoteList">
        {values.map(({id, title, content}) => (
            <NoteItem key={id} title={title} content={content} />
        ))}
    </div>
);

export default NoteList;