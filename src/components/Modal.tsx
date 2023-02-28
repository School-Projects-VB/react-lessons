import React, {PropsWithChildren} from 'react';

interface Props {
    show: boolean;
    setShow: (value: boolean) => void;
}

const Modal: React.FC<PropsWithChildren<Props>> = (props) => {
    const {children, show, setShow} = props;

    return (
        <div
            className="Modal"
            style={{display: show ? 'block' : 'none'}}
        >
            <div>
                <button
                    className="button"
                    onClick={() => setShow(false)}>
                    Close
                </button>
                {children}
            </div>

        </div>
    );
};

export default Modal;
