import React from "react";
import "./MealPlan.css";
const MealPlan = ({ bmiStatus }) => {
  const mealPlans = {
    Underweight: {
      breakfast: "Whole grain toast with avocado",
      lunch: "Quinoa salad with mixed veggies",
      eveningSnacks: "Greek yogurt with berries",
      dinner: "Grilled chicken with sweet potatoes",
    },
    "Normal weight": {
      breakfast: "Oatmeal with fruits and nuts",
      lunch: "Grilled salmon with quinoa",
      eveningSnacks: "Apple slices with almond butter",
      dinner: "Vegetable stir-fry with tofu",
    },
    Overweight: {
      breakfast: "Egg white omelette with spinach",
      lunch: "Grilled turkey sandwich with salad",
      eveningSnacks: "Mixed nuts and seeds",
      dinner: "Baked fish with steamed vegetables",
    },
    Obese: {
      breakfast: "Chia seed pudding with fruits",
      lunch: "Brown rice with grilled veggies",
      eveningSnacks: "Carrot sticks with hummus",
      dinner: "Grilled lean beef with quinoa",
    },
    // Add more meal plans as needed
  };

  return (
    <div className="meal-plan">
      <h2>Meal Plan</h2>
      <p>Here are some meal plans for your BMI status:</p>
      <div className="meal-plan-details">
        <div className="meal-plan-card">
        <h3>Breakfast:</h3>
        <p>{mealPlans[bmiStatus].breakfast}</p>
        <h3>Lunch:</h3>
        <p>{mealPlans[bmiStatus].lunch}</p>
        <h3>Evening Snacks:</h3>
        <p>{mealPlans[bmiStatus].eveningSnacks}</p>
        <h3>Dinner:</h3>
        <p>{mealPlans[bmiStatus].dinner}</p>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
