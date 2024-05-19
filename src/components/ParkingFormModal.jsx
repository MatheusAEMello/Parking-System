import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ParkingFormModal({ isOpen, onRequestClose, addParkingLot, editMode, existingData, onSave }) {
  const [formData, setFormData] = useState({
    plate: '',
    owner: '',
    apartment: '',
    block: '',
    model: '',
    color: '',
    spotNumber: '',
  });

  useEffect(() => {
    if (editMode && existingData) {
      setFormData(existingData);
    }
  }, [editMode, existingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Log the form data to the console
    if (editMode) {
      onSave(formData);
    } else {
      addParkingLot(formData);
    }
    onRequestClose();
    alert(editMode ? 'Cadastro editado com sucesso' : 'Cadastro realizado com sucesso');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Cadastro de Reserva"
    >
      <h2>{editMode ? 'Editar Reserva' : 'Cadastro de Reserva'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="plate" placeholder="Placa do veículo" value={formData.plate} onChange={handleChange} required />
        <input type="text" name="owner" placeholder="Nome do proprietário" value={formData.owner} onChange={handleChange} required />
        <input type="text" name="apartment" placeholder="Número do apartamento" value={formData.apartment} onChange={handleChange} required />
        <input type="text" name="block" placeholder="Bloco do apartamento" value={formData.block} onChange={handleChange} required />
        <input type="text" name="model" placeholder="Modelo do veículo" value={formData.model} onChange={handleChange} required />
        <input type="text" name="color" placeholder="Cor do veículo" value={formData.color} onChange={handleChange} required />
        <input type="text" name="spotNumber" placeholder="Número da vaga de estacionamento" value={formData.spotNumber} onChange={handleChange} required />
        <button type="submit">{editMode ? 'Salvar Edição' : 'Salvar'}</button>
      </form>
    </Modal>
  );
}

export default ParkingFormModal;
