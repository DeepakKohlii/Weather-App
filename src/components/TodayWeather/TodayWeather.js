import { Grid } from '@mui/material';
import React from 'react';
import AirConditions from './AirConditions/AirConditions';
import DailyForecast from './Forecast/DailyForecast';
import Details from './Details/Details';

const TodayWeather = ({ data, forecastList, isFarenheit }) => {
  return (
    <Grid container sx={{ padding: '3rem 0rem 0rem' }} >
      <Details data={data} isFarenheit={isFarenheit} />
      <AirConditions data={data} isFarenheit={isFarenheit} />
      <DailyForecast data={data} forecastList={forecastList} isFarenheit={isFarenheit} />
    </Grid>
  );
};

export default TodayWeather;
