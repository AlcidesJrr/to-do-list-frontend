import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
    return (
        <>
            
                <footer className="footer-basic fixed-bottom w-100">
                <div className="container">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <h6>Desenvolvido por Alcides Jr</h6>
                        </li>
                        <li className="copyright">Alcides Jr © 2021</li>
                        <div className="social">
                            <a href="https://www.instagram.com/alcides.jr/">
                                <BsInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/alcides-junior-780022171/">
                                <BsLinkedin />
                            </a>
                            <a href="https://github.com/AlcidesJrr">
                                <BsGithub />
                            </a>
                        </div>
                    </ul>
                    </div>
                </footer>

        </>
    );
};

export default Footer;
