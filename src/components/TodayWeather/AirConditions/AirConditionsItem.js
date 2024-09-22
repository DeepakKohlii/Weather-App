import { Box, Grid, SvgIcon, Tooltip } from '@mui/material';
import React from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { ReactComponent as HumidityIcon } from '../../../assets/humidity.svg';

const AirConditionsItem = (props) => {
  
  let iconContent;

  if (props.type === 'temperature')
    iconContent = <ThermostatIcon sx={{ fontSize: '24px', color: '#FFD700' }} />;
  else if (props.type === 'wind')
    iconContent = <AirIcon sx={{ fontSize: '24px', color: '#00BFFF' }} />;
  else if (props.type === 'clouds')
    iconContent = <FilterDramaIcon sx={{ fontSize: '24px', color: '#B0C4DE' }} />;
  else if (props.type === 'humidity')
    iconContent = (
      <SvgIcon
        component={HumidityIcon}
        inheritViewBox
        sx={{ fontSize: '24px', color: '#ADD8E6' }}
      />
    );

  return (
    <Grid
      item
      xs={3}
      sx={{
        padding: '8px',
        height: '100px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Tooltip title={props.title} arrow>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '100%',
            height: '50px',
            flexDirection: { xs: 'column', sm: 'row' },
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 0,
            }}
          >
            {iconContent}
          </Box>
          <Box
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              paddingLeft: { xs: '4px', sm: '8px', md: '10px' },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {props.title}
          </Box>
        </Grid>
      </Tooltip>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: '50px' }}
      >
        <Box
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            color: '#FFFFFF',
            lineHeight: 1,
          }}
        >
          {props.value}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AirConditionsItem;
