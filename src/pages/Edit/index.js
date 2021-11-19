import React, { useState, useEffect } from 'react';
import Api from '../../api/api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoIosReturnLeft } from 'react-icons/io';
import './../Cadastro/Cadastro.css'

const Edit = () => {
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

    const handleFieldsChange = evento => {
        const campos = { ...list };
        campos[evento.target.name] = evento.target.value;
        setList(campos);
    };

    let data1 = new Date(list.prazo);
    let dataFormatada1 = (data1.getFullYear() + "-" + ((data1.getMonth() + 1)) + "-" + (data1.getDate() )) ;                 

    let data = new Date();
    let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;                 

    return (
        <>
            <div className="titulo-h1">
                <h1>Editar Tarefa</h1>
            </div>
            <div className="cadastro">
                <form>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input
                            type="text"
                            value={list.titulo}
                            onChange={handleFieldsChange}
                            name="titulo"
                            className="form-control"
                            id="titulo"
                            aria-describedby="emailHelp"
                            placeholder="Título"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <input
                            type="text"
                            value={list.descricao}
                            onChange={handleFieldsChange}
                            name="descricao"
                            className="form-control"
                            id="descricao"
                            aria-describedby="emailHelp"
                            placeholder="Descrição"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prioridade">Prioridade: </label>
                        <select
                            name="prioridade"
                            value={list.prioridade}
                            onChange={handleFieldsChange}
                            className="form-select"
                        >
                            <option value="nenhum">Nenhum</option>
                            <option value="Alta">Alta</option>
                            <option value="Média">Média</option>
                            <option value="Baixa">Baixa</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status: </label>
                        <select
                            name="status"
                            value={list.status}
                            onChange={handleFieldsChange}
                            className="form-select"
                        >
                            <option value="nenhum">Nenhum</option>
                            <option value="Fazer">Fazer</option>
                            <option value="Fazendo">Fazendo</option>
                            <option value="Feito">Feito</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prazo">Prazo</label>
                        <input
                            type="Date" 
                            min={dataFormatada}
                            name="prazo"
                            value={dataFormatada1}
                            onChange={handleFieldsChange}
                            className="form-control"
                            id="prazo"
                            aria-describedby="emailHelp"
                            placeholder="Prazo"
                        />
                        {console.log(list.prazo)}
                    </div>

                    <br></br>
                    <button
                        type="submit"
                        title="Editar"
                        className="btn bg-transparent success"
                    >
                        Editar
                    </button>
                    <Link
                        to={`/view/${id}`}
                        type="button"
                        title="Voltar"
                        className="btn bg-transparent back"
                    >
                        <IoIosReturnLeft size={40} />
                    </Link>
                </form>
            </div>
        </>
    );
};

export default Edit;
