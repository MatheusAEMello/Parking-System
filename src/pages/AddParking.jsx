import React, { useState, useContext } from 'react';
import ParkingFormModal from '../components/ParkingFormModal';
import ParkingContext from '../contexts/ParkingContext';

function AddParking() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { addParkingLot } = useContext(ParkingContext);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <h2>Cadastro de Reserva</h2>
      <button className="add-parking-button" onClick={openModal}>
        Adicionar Vaga
      </button>
      <ParkingFormModal isOpen={modalIsOpen} onRequestClose={closeModal} addParkingLot={addParkingLot} />
    </div>
  );
}

export default AddParking;
