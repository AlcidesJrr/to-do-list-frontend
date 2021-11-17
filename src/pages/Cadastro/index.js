import React from 'react'
import './Cadastro.css'

const Cadastro = () => {
    return (
        <>
        <div className="titulo-h1">
        <h1>Cadastrar Tarefa</h1>
        </div>
        <div className="cadastro">
            <form>
                <div className="form-group">
                    <label for="titulo">Título</label>
                    <input type="text" className="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Título"/>
                </div>
                <div className="form-group">
                    <label for="descricao">Descrição</label>
                    <input type="text" className="form-control" id="descricao" aria-describedby="emailHelp" placeholder="Descrição"/>
                </div>
                <div className="form-group">
                        <label for="prioridade">Prioridade: </label>
                        <select name="prioridade" class="form-select" >
                            <option value="nenhum" >Nenhum</option>
                            <option value="alto">Alto</option>
                            <option value="amedio">Médio</option>
                            <option value="baixa">Baixa</option>
                        </select>
                </div>
                <div className="form-group">
                        <label for="status">Status: </label>
                        <select name="status" class="form-select">
                            <option value="nenhum">Nenhum</option>
                            <option value="alto">Fazer</option>
                            <option value="amedio">Fazendo</option>
                            <option value="baixa">Feito</option>
                        </select>
                </div>
                <div className="form-group">
                    <label for="prazo">Prazo</label>
                    <input type="Date" className="form-control" id="prazo" aria-describedby="emailHelp" placeholder="Prazo"/>
                </div>
             
                <br></br>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
        </>
    )
}

export default Cadastro

