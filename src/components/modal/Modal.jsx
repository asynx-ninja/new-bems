import React from 'react'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

const Modal = ({ title, body, footer }) => {
    return (
        <div>
            <ModalHeader title={title} />
            <ModalBody body={body}/>
            <ModalFooter footer={footer}/>
        </div>
    )
}

export default Modal