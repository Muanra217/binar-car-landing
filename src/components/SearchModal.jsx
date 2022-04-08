import React, {useRef} from 'react'

const SearchModal = ({children, showModal, setShowModal}) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if(e.target === modalRef.current) {
            setShowModal(false);
        }
    }
    return (
        showModal &&
        <div className='SearchModal' ref={modalRef} onClick={closeModal}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default SearchModal