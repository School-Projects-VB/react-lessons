import NoteProvider from "./context/NoteProvider";
import 'css/App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./Router";

const App = () => (
    <NoteProvider>
        <div className="App">
            <RouterProvider router={router} />
        </div>
    </NoteProvider>
);

export default App;