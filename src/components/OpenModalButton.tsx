import React, {useState} from 'react';
import Button from 'src/components/Button';
import Modal from 'src/components/Modal';
import NoteForm from 'src/components/Notes/NoteForm';

const OpenModalButton: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="OpenModalButton">
            <Button text="Add note" onClick={() => setShow(true)}/>

            <Modal show={show} setShow={setShow}>
                <NoteForm close={() => setShow(false)}/>
            </Modal>
        </div>
    );
};

export default OpenModalButton;