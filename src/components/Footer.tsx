// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      bgcolor="primary.main"
      color="white"
      py={2}
    >
      <Typography variant="body1" align="center">
        © 2024 Proje Adı. Tüm hakları saklıdır.
      </Typography>
    </Box>
  );
};

export default Footer;
