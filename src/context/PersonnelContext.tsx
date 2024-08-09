import React, { createContext, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonnel, setPersonnel } from '../store/reducer';
import { RootState } from '../store';

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

export const PersonnelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const personnel = useSelector((state: RootState) => state.personnel.personnel);
  const dispatch = useDispatch();

  const addPersonnelHandler = (personnel: Personnel) => {
    dispatch(addPersonnel(personnel));
  };

  const setPersonnelHandler = (personnel: Personnel[]) => {
    dispatch(setPersonnel(personnel));
  };

  return (
    <PersonnelContext.Provider value={{ personnel, addPersonnel: addPersonnelHandler, setPersonnel: setPersonnelHandler }}>
      {children}
    </PersonnelContext.Provider>
  );
};
