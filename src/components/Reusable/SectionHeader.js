import { Typography } from '@mui/material';
import React from 'react';

const SectionHeader = ({ title, mb }) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      sx={{
        fontSize: { xs: '18px', sm: '22px', md: '26px' }, 
        color: 'rgba(255, 255, 255, 0.9)', 
        fontWeight: '700', 
        lineHeight: 1.4, 
        textAlign: 'center',
        fontFamily: 'Roboto Condensed',
        textTransform: 'uppercase', 
        letterSpacing: { xs: '0.8px', sm: '1.2px' }, 
        marginBottom: mb ? mb : '1.8rem', 
        padding: '12px 24px', 
        backgroundColor: '#0000',
        borderRadius: '10px', 
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)', 
        transition: 'transform 0.4s ease, background-color 0.3s ease', 
        border: '.1px solid #fff',
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
