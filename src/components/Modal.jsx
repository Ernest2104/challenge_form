import React from 'react';
import ReactDOM from 'react-dom';
import { WindowModal, Button, ModalContainer } from './styled'

export const Modal = ({closeModal, data}) => {
   return ReactDOM.createPortal(
    <ModalContainer>
      <WindowModal>
        <h1>Acces Data</h1>
        <pre>{data}</pre>
        <Button onClick={closeModal}>Close</Button>
      </WindowModal>
    </ModalContainer>,
    document.getElementById('modal')
  )
};
