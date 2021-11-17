import React from 'react';
import './Card.css';
import DatePicker from 'react-native-datepicker';

const Card = (props) => {
    const list = props.data;

    state = {
        data:''
    }

    changeDate = (valor) => {
        this.setState({
            data: valor
        })
    }

    return (
        <div className="container" key={list._id}>
            <div className="card-body">
                <h5 className="card-title">{list.titulo}</h5>
                <p className="card-text">{list.descricao}</p>
                <h6>Prioridade: <button className="badge bg-primary status">{list.prioridade}</button></h6>
                <h6>Status: <button className="badge bg-primary status">{list.status}</button></h6>

                <View style={styles.container}>
                    <DatePicker
                    format="DD/MM/YYYY"
                    style={styles.dateComponente}
                    date={this.state.data}
                    onDateChange={this.changeDate}
                    />
                </View>    

                <h2 className="badge bg-primary">{list.prazo}</h2>  
                <h2 className="badge bg-primary">{list.dataCriacao}</h2>
            </div>
        </div>
    )
}

export default Card


// import React from 'react';
// import './Card.css';
// import DatePicker from 'react-native-datepicker';

// const Card = (props) => {
//     const list = props.data;

//     return (
//         <div className="container" key={list._id}>
//             <div className="card-body">
//                 <h5 className="card-title">{list.titulo}</h5>
//                 <p className="card-text">{list.descricao}</p>
//                 <h6>Prioridade: <button className="badge bg-primary status">{list.prioridade}</button></h6>
//                 <h6>Status: <button className="badge bg-primary status">{list.status}</button></h6>
//                 <h2 className="badge bg-primary">{list.prazo}</h2>
//                 <h2 className="badge bg-primary">{list.dataCriacao}</h2>
//             </div>
//             </div>
//     )
// }

// export default Card
