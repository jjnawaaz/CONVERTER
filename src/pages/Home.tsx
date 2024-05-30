import React, { useState } from "react";
import CommonIcons from "../components/CommonIcons";
import "./Home.css"; // Assuming you have a CSS file for Home page styles

const units = {
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  millimeter: 0.001,
  mile: 1609.34,
  yard: 0.9144,
  foot: 0.3048,
  inch: 0.0254,
};

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(""); // Initialize as an empty string
  const [fromUnit, setFromUnit] = useState<string>("meter");
  const [toUnit, setToUnit] = useState<string>("kilometer");
  const [result, setResult] = useState<number | null>(null); // Use null to represent no result yet

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFromUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromUnit(e.target.value);
  };

  const handleToUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToUnit(e.target.value);
  };

  const convert = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult(null);
      return;
    }
    const fromFactor = units[fromUnit as keyof typeof units];
    const toFactor = units[toUnit as keyof typeof units];
    const convertedValue = (value * fromFactor) / toFactor;
    setResult(convertedValue);
  };

  return (
    <div className="home">
      <h1>Welcome to Unit Converter</h1>

      <div className="converter-container">
        <div className="converter">
          <h2>Unit Converter</h2>
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter value"
            />
            <select value={fromUnit} onChange={handleFromUnitChange}>
              {Object.keys(units).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <span> to </span>
            <select value={toUnit} onChange={handleToUnitChange}>
              {Object.keys(units).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <button onClick={convert}>Convert</button>
          </div>
          <div className="result">
            <h2>Result: {result !== null ? result : "No result"}</h2>
          </div>
        </div>
      </div>
      <CommonIcons />
    </div>
  );
};

export default Home;
