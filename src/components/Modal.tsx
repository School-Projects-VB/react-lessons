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
            style={{display: show ? 'block' : 'none'}}>
            <div className="ModalContent">
                <img
                    className="cross"
                    src="/svg/cross.svg"
                    alt="cross"
                    onClick={() => setShow(false)}
                />
                {children}
            </div>
        </div>
    );
};

export default Modal;
