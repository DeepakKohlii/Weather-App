import * as React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ErrorBox(props) {
  return (
    <Box
      display={props.display || 'flex'}
      justifyContent={props.justifyContent || 'center'}
      alignItems={props.alignItems || 'center'}
      margin={props.margin || '1rem auto'}
      gap={props.gap || '12px'}
      flex={props.flex || 'auto'}
      maxWidth="600px"
      sx={{
        padding: '1.5rem',
        flexDirection: { xs: 'column', sm: 'row' },
        color: props.type === 'info' ? '#f5a922' : '#DC2941',
        border: props.type === 'info' 
          ? '1px solid #f5a922' 
          : '1px solid #DC2941',
        borderRadius: '12px',
        background: props.type === 'info'
          ? 'rgba(245, 169, 34, .1)' 
          : 'rgba(220, 41, 65, .25)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <ErrorOutlineIcon 
        sx={{ 
          fontSize: { xs: '24px', sm: '28px' }, 
          color: props.type === 'info' ? '#f5a922' : '#DC2941',
        }} 
      />

      <Typography
        variant="h6"
        component="h2"
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: 500,
          fontFamily: 'Poppins',
          textAlign: { xs: 'center', sm: 'left' }, 
          color: props.type === 'info' ? '#f5a922' : '#DC2941',
        }}
      >
        {props.errorMessage || 'Internal error'}
      </Typography>
    </Box>
  );
}
