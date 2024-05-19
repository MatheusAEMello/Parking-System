import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParkingProvider } from './contexts/ParkingContext';
import Home from './pages/Home';
import AddParking from './pages/AddParking';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <ParkingProvider>
      <Router>
        <header>
          <h1>Sistema de Controle de Estacionamento</h1>
          <nav>
            <Link to="/">Listar Vagas</Link>
            <Link to="/add">Adicionar Vaga</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddParking />} />
        </Routes>
        <Footer />
      </Router>
    </ParkingProvider>
  );
}

export default App;
