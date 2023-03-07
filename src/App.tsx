import NotesList from 'src/components/Notes/NotesList';
import OpenModalButton from 'src/components/OpenModalButton';
import NoteProvider from "./context/NoteProvider";
import 'css/App.css';

const App = () => (
    <NoteProvider>
        <div className="App">
            <h1>Notes App</h1>

            <OpenModalButton/>
            <NotesList/>
        </div>
    </NoteProvider>
);

export default App;