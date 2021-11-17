import './Styles.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import logoalwhite from './Img/logoalwhite.png';

const Header = () => {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light w-100">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand text-white " to="/">
          <img src={logoalwhite}  width="250" height="100" />
        </Link>
        <div className="nav-right">
        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white active" title="Home" to="/">
                < FcHome size={20} /> 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" title= "Cadastrar Tarefa" to="/cadastro">
              < FcTodoList size={20} /> 
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header