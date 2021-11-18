import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const list = props.data;


    return (
        <Link to={`view/${list._id}`} className="container hg linkk" key={list._id} >
            <div className={`card-body ${list.prioridade}`}>
                <h5 className="card-title">{list.titulo}</h5>
                <p className="card-text">{list.descricao}</p>
            </div>
        </Link>
    )
}

export default Card

