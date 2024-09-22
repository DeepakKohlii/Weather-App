export const convertCelciusToFarenheit = (celsius) => {
  if (isNaN(celsius)) return "N/A";

  return (celsius * 9) / 5 + 32;
};
