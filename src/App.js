import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import View from './pages/View';
import Edit from './pages/Edit';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
      < Footer />
    </div>
  );
}

export default App;