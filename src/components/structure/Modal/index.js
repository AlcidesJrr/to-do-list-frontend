import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import './Modal.css'

const ModalDelete = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button variant="primary" className="btn  editar      bg-transparent btn-sm" onClick={handleShow}>
          <RiDeleteBinLine size={20} />
        </button> 

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>Tem certeza que deseja excluir?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} size={25}>
             Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose} size={25}>
              Excluir
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ModalDelete;