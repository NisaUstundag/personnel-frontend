import React, { createContext, useReducer } from 'react';
import personnelReducer, { PersonnelAction } from '../store/reducer';

interface Personnel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface PersonnelContextProps {
  personnel: Personnel[];
  addPersonnel: (personnel: Personnel) => void;
  setPersonnel: (personnel: Personnel[]) => void;
}

export const PersonnelContext = createContext<PersonnelContextProps>({
  personnel: [],
  addPersonnel: () => {},
  setPersonnel: () => {}
});

export const PersonnelProvider: React.FC = ({ children }) => {
  const [personnel, dispatch] = useReducer(personnelReducer, []);

  const addPersonnel = (personnel: Personnel) => {
    dispatch({ type: 'ADD_PERSONNEL', payload: personnel });
  };

  const setPersonnel = (personnel: Personnel[]) => {
    dispatch({ type: 'SET_PERSONNEL', payload: personnel });
  };

  return (
    <PersonnelContext.Provider value={{ personnel, addPersonnel, setPersonnel }}>
      {children}
    </PersonnelContext.Provider>
  );
};
