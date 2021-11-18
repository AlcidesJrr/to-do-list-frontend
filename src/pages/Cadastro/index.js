import React from 'react';
import './Cadastro.css';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Cadastro = () => {
    let navigate = useNavigate();

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;
        const prazo = evento.target.prazo.value;

        const list = {
        titulo,
        descricao,
        prioridade,
        status,
        prazo,
        }

        const request = await Api.fetchPost(list);
        if(request.status === 500) {
        alert('ERRO NO SERVIDOR')
        }
        const result = await request.json();
        if(result.error) {
        console.log(result.error);
        }   else {
        alert(result.message);
        navigate('/');
    
  }
    }

    return (
        <>
        <div className="titulo-h1">
        <h1>Cadastrar Tarefa</h1>
        </div>
        <div className="cadastro">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name=" titulo" className="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Título" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" name='descricao' className="form-control" id="descricao" aria-describedby="emailHelp" placeholder="Descrição" required/>
                </div>
                <div className="form-group">
                        <label htmlFor="prioridade">Prioridade: </label>
                        <select name="prioridade" className="form-select" >
                            <option value="nenhum" >Nenhum</option>
                            <option value="Alto">Alto</option>
                            <option value="Médio">Médio</option>
                            <option value="Baixa">Baixa</option>
                        </select>
                </div>
                <div className="form-group">
                        <label htmlFor="status">Status: </label>
                        <select name="status" className="form-select">
                            <option value="nenhum">Nenhum</option>
                            <option value="alto">Fazer</option>
                            <option value="amedio">Fazendo</option>
                            <option value="baixa">Feito</option>
                        </select>
                </div>
                <div className="form-group">
                    <label htmlFor="prazo">Prazo</label>
                    <input name="prazo" type="Date" className="form-control" id="prazo" aria-describedby="emailHelp" placeholder="Prazo"/>
                </div>
             
                <br></br>
                <button type="submit" className="btn btn-primary">Enviar</button>
                <Link to={`/`} type="button" className="btn btn-danger">
                  Voltar
                </Link>
            </form>
        </div>
        </>
    )
}

export default Cadastro

