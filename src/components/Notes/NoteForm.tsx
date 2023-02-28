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

    const addNote = async () => {
        if (title.length > 0 && content.length > 0) {
            try {
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
        <form className="Form">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <label htmlFor="content">Content</label>
            <textarea
                name="content"
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />

            <Button
                text="Add"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addNote();
                }}
            />
        </form>
    );
};

export default NoteForm;
