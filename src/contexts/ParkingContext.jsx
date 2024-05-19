import React, { createContext, useState } from 'react';

const ParkingContext = createContext();

const generateRandomAvailability = () => {
  return Math.random() < 0.5 ? 'Disponível' : 'Indisponível';
};

export const ParkingProvider = ({ children }) => {
  const [parkingLots, setParkingLots] = useState([]);

  const addParkingLot = (parkingLot) => {
    const newParkingLot = {
      ...parkingLot,
      availability: generateRandomAvailability(),
    };
    setParkingLots([...parkingLots, newParkingLot]);
  };

  const updateParkingLot = (index, updatedLot) => {
    const newParkingLots = [...parkingLots];
    newParkingLots[index] = updatedLot;
    setParkingLots(newParkingLots);
  };

  const deleteParkingLot = (index) => {
    setParkingLots(parkingLots.filter((_, i) => i !== index));
  };

  return (
    <ParkingContext.Provider value={{ parkingLots, addParkingLot, updateParkingLot, deleteParkingLot }}>
      {children}
    </ParkingContext.Provider>
  );
};

export default ParkingContext;
