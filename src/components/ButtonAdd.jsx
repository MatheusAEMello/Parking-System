import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ButtonAdd() {
  return (
    <Link to="/add-parking" className="button">
      <FaPlus /> Adicionar Vaga
    </Link>
  );
}

export default ButtonAdd;
