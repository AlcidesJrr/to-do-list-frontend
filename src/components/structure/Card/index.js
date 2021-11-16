import React from 'react';
import './Styles.css';
import { VscThumbsdown } from "react-icons/vsc";
import { VscThumbsup } from "react-icons/vsc";



const Card = (props) => {
    const list = props.data;

    if(list.status == true){
        list.status = <VscThumbsdown size={25} color={'red'} />
    } else { 
        list.status = <VscThumbsup size={25} color={'green'} />
    }

    return (
    
        <div className="container" key={list._id}>
            <div className="card-body">
                <h5 className="card-title">{list.titulo}</h5>
                <p className="card-text">{list.descricao}</p>
                <h6>Prioridade: <span className="badge bg-primary">{list.prioridade}</span></h6>
                <h6>Status: <button className="status">{list.status}</button></h6>
                <h2 className="badge bg-primary">{list.prazo}</h2>
                <h2 className="badge bg-primary">{list.dataCriacao}</h2>
            </div>
            </div>
    )
}

export default Card
