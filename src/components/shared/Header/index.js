import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { AiFillProfile } from 'react-icons/ai';
import logoalwhite from './Img/logoalwhite.png';
import DateF from '../../../func/date/date.js'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light w-100">
            <div className="container">
                <Link className="navbar-brand text-white " to="/">
                    <img src={logoalwhite} width="160" height="60" />
                </Link>

                <h1 className="text-data"> {DateF.funDateEst()}</h1>

                <div className="nav-right">
                    <div
                        className=""
                        id="navbarTogglerDemo03"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white active"
                                    title="Home"
                                    to="/"
                                >
                                    <AiFillHome size={25} color={'black'} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white"
                                    title="Cadastrar Tarefa"
                                    to="/cadastro"
                                >
                                    <AiFillProfile size={25} color={'black'} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
