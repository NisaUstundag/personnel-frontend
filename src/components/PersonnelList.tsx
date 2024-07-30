import React, { useContext, useEffect } from 'react';
import { PersonnelContext } from '../context/PersonnelContext';
import axios from 'axios';

const PersonnelList = () => {
  const { personnel, setPersonnel } = useContext(PersonnelContext);

  useEffect(() => {
    axios.get('/api/personnel').then(response => {
      setPersonnel(response.data);
    });
  }, [setPersonnel]);

  return (
    <ul>
      {personnel.map(p => (
        <li key={p.id}>{p.firstName} {p.lastName} - {p.email}</li>
      ))}
    </ul>
  );
};

export default PersonnelList;
