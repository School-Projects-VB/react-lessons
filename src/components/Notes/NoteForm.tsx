import React, {useState} from 'react';
import {
    collection, addDoc, getDoc, CollectionReference,
} from 'firebase/firestore';
import {db} from 'src/config/firebase';
import {Note} from 'src/types/NoteType';
import Button from 'src/components/Button';

interface Props {
    addData: (note: Note) => void;
    close: () => void;
}

const NoteForm: React.FC<Props> = ({addData, close}) => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const addNote = async () => {
        if (title.length > 0 && content.length > 0) {
            try {
                setLoading(true);
                const docRef = await addDoc<Note>(collection(db, 'notes') as CollectionReference<Note>, {
                    title,
                    content,
                    created_date: new Date(),
                });

                const doc = await getDoc(docRef);
                const data = doc.data();

                if (data) {
                    addData({
                        id: doc.id,
                        ...data,
                    });
                }

                close();
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        }
    };

    return (
        <div className="Form">
            <div className="FormContainer">
                <h2>Create a note</h2>
                <form className="FormContent">
                    <div className="FormElement">
                        <label htmlFor="title">Title</label>
                        <input
                            className="Input"
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div className="FormElement">
                        <label htmlFor="content">Content</label>
                        <textarea
                            className="Input"
                            name="content"
                            id="content"
                            value={content}
                            rows={5}
                            onChange={(event) => setContent(event.target.value)}
                        />
                    </div>
                </form>

                <Button
                    text="Add"
                    type="submit"
                    loading={loading}
                    onClick={(e) => {
                        e.preventDefault();
                        addNote();
                    }}
                />
            </div>
        </div>
    );
};

export default NoteForm;
