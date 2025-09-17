import {TextField} from "@mui/material";
import {useEffect, useState} from "react";

export default function TemperatureConverter() {
  let [numberCelsius, setNumberCelsius] = useState(0);
  let [numberFahrenheit, setNumberFahrenheit] = useState(0);

  useEffect(() => {
    setNumberFahrenheit(numberFahrenheit = (numberCelsius * 9/5) + 32);
  }, [numberCelsius])

  useEffect(() => {
    setNumberCelsius(numberCelsius = (numberFahrenheit - 32) * 5/9);
  }, [numberFahrenheit])

  return (
    <>
      <TextField
        type="number"
        size="small"
        label="Цельсия"
        value={numberCelsius}
        onChange={(e) => setNumberCelsius(e.target.value)} />
      <TextField
        type="number"
        size="small"
        label="Фаренгейта"
        value={numberFahrenheit}
        onChange={(e) => setNumberFahrenheit(e.target.value)}/>
    </>
  )
}
