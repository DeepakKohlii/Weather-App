import React from "react";

const ConversionButton = ({ setIsFarenheit, isFarenheit }) => {
  const handleOnChange = () => {
    setIsFarenheit((prev) => !prev);
  };

  return (
    <div style={styles.container}>
      <button onClick={handleOnChange} style={styles.button}>
        Convert Temperature to {isFarenheit ? "Celsius" : "Fahrenheit"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
    maxWidth: "100%",
  },
  button: {
    padding: "12px 28px", 
    fontSize: "18px", 
    cursor: "pointer",
    background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)", 
    color: "#fff", 
    border: "none",
    borderRadius: "30px", 
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", 
    transition: "all 0.4s ease", 
    fontFamily: "Poppins, sans-serif", 
    letterSpacing: "1px", 
    
  },
  buttonHover: {
    background: "linear-gradient(90deg, #5a009d 0%, #1d4ed8 100%)", 
    transform: "scale(1.08)", 
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
  },
};

export default ConversionButton;
