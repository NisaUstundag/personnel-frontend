import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { PersonnelContext } from '../context/PersonnelContext';


const PersonnelForm = () => {
  const { addPersonnel } = useContext(PersonnelContext);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('/api/personnel', formData).then(response => {
      addPersonnel(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
      <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PersonnelForm;
