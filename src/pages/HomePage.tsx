// src/pages/HomePage.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h1" color="primary" gutterBottom>
        Hoş Geldiniz
      </Typography>
      <Typography variant="h2" color="secondary" gutterBottom>
        Projenize Başlayın
      </Typography>
      <Button variant="contained" color="primary">
        Başla
      </Button>
    </Box>
  );
};

export default HomePage;
