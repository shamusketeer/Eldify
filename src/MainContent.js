import React, { useState } from "react";
import "./MainContent.css"; // Import CSS for styling
import MealPlan from "./MealPlan";
import WorkoutPlan from "./WorkoutPlan";
import Diseases from "./Diseases";

const MainContent = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const handleCalculateBMI = () => {
    // Calculate BMI
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBMI(calculatedBMI);
    }
  };

  const getBMIStatus = () => {
    if (bmi === null) {
      return "";
    } else if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  return (
    <div className="main-content">
      <div className="bmi-calculator">
        <h2>Calculate The BMI To Get The Personalized Deit Plan and Exercises</h2>
        <div className="input-fields">
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          /><br />
          <button onClick={handleCalculateBMI}>Calculate BMI</button>
        </div>
        {bmi !== null && (
          <div className="bmi-result">
            <p>Your BMI: {bmi.toFixed(2)}</p>
            <p>Status: {getBMIStatus()}</p>
          </div>
        )}
      </div>

      {bmi !== null && (
        <div className="meal-plan-section">
          <MealPlan bmiStatus={getBMIStatus()} />
          <div className="workout-plan-section">
          <WorkoutPlan bmiStatus={getBMIStatus()} />
        </div>
        </div>
      )}

      {/* {bmi !== null && (
        
      )} */}
      <Diseases />
    </div>
  );
};

export default MainContent;
