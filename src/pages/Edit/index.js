import React, {useState, useEffect} from 'react';
import Api from '../../api/api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const [list, setList] = useState({});
   
    useEffect(() => {
        getListById();
      }, [])

    const { id }= useParams();
    const getListById = async () => {
        const request = await Api.fetchGetById(id);
        const list = await request.json();
        setList(list);
        }

        const handleFieldsChange = (evento) => {
            const campos = { ...list }
            campos[evento.target.name] = evento.target.value;
            campos[evento.target.descricao] = evento.target.value;
            campos[evento.target.status] = evento.target.value;
            campos[evento.target.prazo] = evento.target.value;

            setList(campos);
         }
   
    return (
        <>
        <div className="titulo-h1">
        <h1>Editar Tarefa</h1>
        </div>
        <div className="cadastro">
            <form>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input type="text"  value={list.titulo} onChange={handleFieldsChange} name=" titulo" className="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Título" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" value={list.descricao} onChange={handleFieldsChange}  name='descricao' className="form-control" id="descricao" aria-describedby="emailHelp" placeholder="Descrição" required/>
                </div>
                <div className="form-group">
                        <label htmlFor="prioridade">Prioridade: </label>
                        <select name="prioridade" value={list.prioridade} onChange={handleFieldsChange} className="form-select" >
                            <option value="nenhum" >Nenhum</option>
                            <option value="Alto">Alto</option>
                            <option value="Médio">Médio</option>
                            <option value="Baixa">Baixa</option>
                        </select>
                </div>
                <div className="form-group">
                        <label htmlFor="status">Status: </label>
                        <select name="status" value={list.status} onChange={handleFieldsChange} className="form-select" >
                            <option value="nenhum" >Nenhum</option>
                            <option value="Alto">Fazer</option>
                            <option value="Médio">Fazendo</option>
                            <option value="Baixa">Feito</option>
                        </select>
                </div>
                <div className="form-group">
                    <label htmlFor="prazo">Prazo</label>
                    <input type="Date" name= "prazo" value={list.prazo} onChange={handleFieldsChange} className="form-control" id="prazo" aria-describedby="emailHelp" placeholder="Prazo"/>
                </div>
             
                <br></br>
                <button type="submit" className="btn btn-primary">Editar</button>
                <Link to={`/view/${id}`} type="button" className="btn btn-danger">
                  Voltar
                </Link>
            </form>
        </div>
        </>
    )
}

export default Edit

