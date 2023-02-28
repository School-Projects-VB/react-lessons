import React, {useState} from 'react';
import Button from 'src/components/Button';
import Modal from 'src/components/Modal';
import NoteForm from 'src/components/Notes/NoteForm';
import {Note} from 'src/types/NoteType';

interface Props {
    addData: (note: Note) => void;
}

const OpenModalButton: React.FC<Props> = ({addData}) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="OpenModalButton">
            <Button text="Add note" onClick={() => setShow(true)}/>

            <Modal show={show} setShow={setShow}>
                <NoteForm addData={addData} close={() => setShow(false)}/>
            </Modal>
        </div>
    );
};

export default OpenModalButton;