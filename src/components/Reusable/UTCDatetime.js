import { Typography, Box } from '@mui/material';
import React from 'react';

// Helper function to format the UTC date
const getFormattedUTCDatetime = () => {
  const now = new Date();
  
  // Get the month and year (e.g., "January 2024")
  const monthYear = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });

  // Get the full date and time with alphabets (e.g., "Monday, 21 September 2024, 12:34:56 PM")
  const fullDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  
  const fullTime = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'UTC',
  });

  return { monthYear, fullDate, fullTime };
};

const UTCDatetime = () => {
  const { monthYear, fullDate, fullTime } = getFormattedUTCDatetime();

  return (
    <Box textAlign="center">
      {/* Month and Year in bold */}
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '16px', sm: '20px' }, // Adjusted size for bold date
          color: 'rgba(255, 255, 255, .9)',
          fontFamily: 'Poppins',
        }}
      >
        {monthYear}
      </Typography>

      {/* Full date with time in words underneath */}
      <Typography
        variant="h6"
        component="h6"
        sx={{
          fontWeight: '400',
          fontSize: { xs: '10px', sm: '12px' },
          color: 'rgba(255, 255, 255, .7)',
          lineHeight: 1.2,
          paddingTop: '4px',
          fontFamily: 'Poppins',
        }}
      >
        {fullDate}, {fullTime} GMT
      </Typography>
    </Box>
  );
};

export default UTCDatetime;
