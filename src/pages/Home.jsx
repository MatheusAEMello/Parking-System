import React, { useContext, useState } from 'react';
import ParkingContext from '../contexts/ParkingContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ParkingFormModal from '../components/ParkingFormModal';

function Home() {
  const { parkingLots, deleteParkingLot, updateParkingLot } = useContext(ParkingContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [currentEditData, setCurrentEditData] = useState(null);

  const handleEdit = (index) => {
    setCurrentEditIndex(index);
    setCurrentEditData(parkingLots[index]);
    setModalIsOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm('Tem certeza que deseja excluir esta vaga?')) {
      deleteParkingLot(index);
    }
  };

  const handleSaveEdit = (updatedData) => {
    updateParkingLot(currentEditIndex, updatedData);
    setModalIsOpen(false);
  };

  return (
    <div className="parking-list">
      <h2>Vagas Cadastradas</h2>
      {parkingLots.map((lot, index) => (
        <div key={index} className="parking-item">
          <p>Placa: {lot.plate}</p>
          <p>Proprietário: {lot.owner}</p>
          <p>Apartamento: {lot.apartment}</p>
          <p>Bloco: {lot.block}</p>
          <p>Modelo: {lot.model}</p>
          <p>Cor: {lot.color}</p>
          <p>Vaga: {lot.spotNumber}</p>
          <p>Disponibilidade: {lot.availability}</p>
          <button className="edit-button" onClick={() => handleEdit(index)}><FaEdit /> Editar</button>
          <button className="delete-button" onClick={() => handleDelete(index)}><FaTrash /> Excluir</button>
        </div>
      ))}
      {modalIsOpen && (
        <ParkingFormModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          editMode={true}
          existingData={currentEditData}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}

export default Home;
