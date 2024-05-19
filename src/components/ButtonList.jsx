import React from 'react';
import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ButtonList() {
  return (
    <Link to="/" className="button">
      <FaList /> Listar Vagas
    </Link>
  );
}

export default ButtonList;
