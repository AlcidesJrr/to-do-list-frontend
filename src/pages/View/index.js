import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/api';
import '/View.css';

const View = () => {
    const [list, setList] = useState({});
   
    useEffect(() => {
        getListById()
    },[])

    const { id }= useParams();
    const getListById = async () => {
        const request = await Api.fetchGetById(id);
        const list = await request.json();
        setList(list);
        }

         const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
        let data = new Date(list.prazo);
        let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));

    return (
        <div>
            <div className="card-body ">
                <h5 className="card-title">{list.titulo}</h5>
                <p className="card-text">{list.descricao}</p>
                <h6>Prioridade: <span className="badge bg-primary status">{list.prioridade}</span></h6>
                <h6>Status: <span className="badge bg-primary status">{list.status}</span></h6> 
                <h6>Prazo: <h2 className="badge bg-transparent text-dark">{dataFormatada}</h2> </h6>
                <button type="button" class="btn btn-success btn-sm">Editar</button>
                <button type="button" class="btn btn-danger btn-sm">Excluir</button>
            </div>
        </div>
    )
}

export default View
