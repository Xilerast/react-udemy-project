import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [isModalOpen, setModalIsOpen] = useState(false); // We don't want our modal to be open at the start, so we pass false.

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {isModalOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
            {isModalOpen && <Backdrop onCancel={closeModalHandler} />} {/* If Modal is open and <Backdrop /> is true, return <Backdrop />. Basically alternate syntax for a ternary */}
        </div>
    );
}

export default Todo;