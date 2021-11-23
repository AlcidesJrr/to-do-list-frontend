import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import './View.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { AiOutlineReconciliation } from 'react-icons/ai';
import { ImCalendar } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';
import { IoIosReturnLeft } from 'react-icons/io';
import { Button, Modal } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import DateF from '../../func/date/date.js'


const View = () => {
    let navigate = useNavigate();
    const [list, setList] = useState({});

    useEffect(() => {
        getListById();
    }, []);

    const { id } = useParams();
    const getListById = async () => {
        const request = await Api.fetchGetById(id);
        const list = await request.json();
        setList(list);
    };

    const handleDelete = async () => {
        const response = await Api.fetchDelete(id);
        const data = await response.json();
        if(data.message) {
            console.log('excluido', data.message);
            navigate('/');
          }else {
            alert(data.error);
          }
    }

    const ModalDelete = () => {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <button variant="primary" className="btn editar bg-transparent btn-sm" onClick={handleShow}>
              <RiDeleteBinLine size={20} />
            </button> 
    
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>Tem certeza que deseja excluir?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} size={25}>
                 Cancelar
                </Button>
                <Button variant="primary" onClick={handleDelete} size={25}>
                  Excluir
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }

    var diffDays = '';
    const somaData = () => {
        var date1 = new Date(list.prazo);
        var date2 = new Date();
        var timeDiff = date1.getTime() - date2.getTime();
        diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if(diffDays <= 0){
            diffDays = "Prazo estourado!"
            return diffDays
        } else {
            return (`${diffDays} dias`)
        }
    }
    somaData();
    var somaDataResult = somaData()

    console.log(list.prazo)

    var colorText ='';
    const ColorText = () => {
        if(diffDays > 15) {
            colorText = 'text-dark'
        } else {
            colorText ='text-danger'
        }
    }
    ColorText();

    return (
        <div className="card-all">
            <div className={`card-view ${list.prioridade}`}>
                <h5 className="card-title">
                    {list.titulo}
                    <div className="edit-del">
                        <Link
                            to={`/edit/${id}`}
                            type="button"
                            className="btn editar bg-transparent btn-sm"
                            title ="Editar"
                        >
                            <FiEdit size={18} />
                        </Link>
                        <button 
                            type="button" 
                            className="btn delete bg-transparent btn-sm"
                            title = "Deletar"
                            >
                            {< ModalDelete />}
                        </button>
                        <Link
                            to={'/'}
                            title="Voltar"
                            type="button"
                            className="btn voltar bg-transparent btn-sm"
                        >
                            {' '}
                            <IoIosReturnLeft size={23} />{' '}
                        </Link>
                    </div>
                </h5>
                <p className="card-text-view">{list.descricao}</p>
                <div className="icons-view">
                    <span title="Prioridade">
                        <AiOutlineOrderedList size={35} />{' '}
                        <span className="badge bg-transparent text-dark ">
                            {list.prioridade}
                        </span>
                    </span>
                    <span title="Status">
                        <AiOutlineReconciliation size={35} />
                        <span className="badge bg-transparent text-dark">
                            {list.status}
                        </span>
                    </span>
                    <span title="Prazo">
                        <ImCalendar size={28} />{' '}
                        <h2 className="badge bg-transparent text-dark">
                            {DateF.funDateExt(list.prazo)}
                        </h2>{' '}
                    </span>
                </div>
                <div className="data-criacao">
                    <h5 title="Prazo">
                        {' '}
                        Registrado:
                        <h2 className="badge bg-transparent text-dark">
                            {DateF.funDateExt(list.dataCriacao)}
                        </h2>
                    </h5>
                    <h5 title="Prazo">
                        {' '}
                        Restam:
                        <h2 className={`badge bg-transparent ${colorText}`}>
                            {somaDataResult}
                        </h2>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default View;
