import React from "react";
import { Grid } from "@mui/material";
import { getDayMonthFromDate } from "../../../utilities/DatetimeUtils";
import { weatherIcon } from "../../../utilities/IconsUtils";
import ErrorBox from "../../Reusable/ErrorBox";
import CityDateDetail from "./CityDateDetail";
import TemperatureWeatherDetail from "./TemperatureWeatherDetail";
import WeatherIconDetail from "./WeatherIconDetail";
import Layout from "../../Reusable/Layout";

const dayMonth = getDayMonthFromDate();

const Details = ({ data, isFarenheit }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === "404";

  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided)
    content = (
      <>
        <Grid
          item
          xs={4}
          border={2}
          width="10%"
          sx={{
            marginTop: "1rem",
            height: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
            padding: "10px",
            backgroundColor: "#f5f5f5", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
          }}
        >
          <CityDateDetail city={data.name} date={dayMonth} />
        </Grid>
        <Grid
          item
          xs={4}
          border={2}
          sx={{
            marginTop: "1rem",
            height: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#000", 
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <TemperatureWeatherDetail
            temperature={data.main.temp}
            description={data.weather[0].description}
            isFarenheit={isFarenheit}
          />
        </Grid>
        <Grid
          item
          xs={4}
          border={2}
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <WeatherIconDetail src={weatherIcon(`${data.weather[0].icon}.png`)} />
        </Grid>
      </>
    );

  return <Layout title="CURRENT WEATHER" content={content} />;
};

export default Details;
