// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { Container, Typography, Box } from '@mui/material';
import store from './store';
import { PersonnelProvider } from './context/PersonnelContext';
import PersonnelForm from './components/PersonnelForm';
import PersonnelList from './components/PersonnelList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersonnelProvider>
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            my={4}
          >
            <Typography variant="h1" gutterBottom>
              Personnel Management
            </Typography>
            <PersonnelForm />
            <PersonnelList />
          </Box>
        </Container>
      </PersonnelProvider>
    </Provider>
  );
};

export default App;
