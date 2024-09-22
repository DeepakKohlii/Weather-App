import { Box, Typography } from "@mui/material";
import React from "react";
import { convertCelciusToFarenheit } from "../../../utilities/helpers";

const TemperatureWeatherDetail = (props) => {
  const { isFarenheit } = props;
  const temperature = isFarenheit
    ? convertCelciusToFarenheit(props.temperature)
    : props.temperature;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: "700", 
          fontSize: { xs: "18px", sm: "20px", md: "24px" },
          color: "#000", 
          textTransform: "uppercase",
          lineHeight: 1.2, 
          marginBottom: "8px",
          fontFamily: "Poppins", 
          letterSpacing: "1px", 
        }}
      >
        {Math.round(temperature)} {isFarenheit ? "°F" : "°C"}
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" }, 
          color: "#333", 
          lineHeight: 1.3,
          letterSpacing: { xs: "0.5px", sm: "1px" }, 
          fontFamily: "Roboto Condensed", 
          textTransform: "capitalize", 
        }}
      >
        {props.description}
      </Typography>
    </Box>
  );
};

export default TemperatureWeatherDetail;
