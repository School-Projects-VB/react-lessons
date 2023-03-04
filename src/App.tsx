import 'css/App.css'
import { useEffect, useState } from 'react';
import {
    collection, CollectionReference, getDocs, query, orderBy,
} from 'firebase/firestore';
import NotesList from 'src/components/Notes/NotesList';
import OpenModalButton from 'src/components/OpenModalButton';
import {Note} from 'src/types/NoteType';
import {db} from 'src/config/firebase';
import Loading, {LoadingColor} from 'src/components/Loading';

const App = () => {
    const [data, setData] = useState<Note[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const q = query(collection(db, 'notes') as CollectionReference<Note>, orderBy('created_date', 'desc'));
        getDocs(q)
            .then((querySnapshot) => {
                setData(
                    querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    })),
                );
            })
            .catch((e) => console.error('ERROR', e))
            .finally(() => setLoading(false));
    }, []);

    const addData = (note: Note) => {
        setData([...data, note]);
    };

    return (
        <div className="App">
            <h1>Notes App</h1>

            <OpenModalButton addData={addData}/>

            {loading
                ? (
                    <Loading color={LoadingColor.PURPLE} />
                )
                : <NotesList data={data} />
            }
        </div>
    );
};

export default App;