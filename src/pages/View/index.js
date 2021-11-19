import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/api';
import './View.css';
import { Link } from 'react-router-dom';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { AiOutlineReconciliation } from 'react-icons/ai';
import { ImCalendar } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';
import { IoIosReturnLeft } from 'react-icons/io';
import ModalDelete from '../../components/structure/Modal';

const View = () => {
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


    const meses = [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
    ];
    let data = new Date(list.prazo);
    let dataFormatada =
        data.getDate() +
        ' ' +
        meses[data.getMonth()] +
        ' ' +
        data.getFullYear();

    const meses1 = [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
    ];
    let data1 = new Date(list.dataCriacao);
    let dataFormatada1 =
    data1.getDate() +
        ' ' +
    meses1[data1.getMonth()] +
        ' ' +
    data1.getFullYear();


    var diffDays = '';
    const somaData = () => {
        var date1 = new Date(data);
        var date2 = new Date();
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        console.log(date1)
        console.log(date2)
        console.log(timeDiff)

        if(diffDays === 0){
            diffDays = "Prazo estourado!"
            return diffDays
        } else {
            return (`${diffDays} dia`)
        }
    }
    somaData();
    var somaDataResult = somaData()

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
                            < ModalDelete />
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
                            {dataFormatada}
                        </h2>{' '}
                    </span>
                </div>
                <div className="data-criacao">
                    <h5 title="Prazo">
                        {' '}
                        Registrado:
                        <h2 className="badge bg-transparent text-dark">
                            {dataFormatada1}
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
