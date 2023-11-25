import React from 'react';

const WorkoutPlan = ({ bmiStatus }) => {
  const workoutPlans = {
    'Underweight': {
      message: 'Here is a light workout plan suitable for underweight individuals aged 65+:',
      plan: [
        '15 minutes of walking or light jogging',
        '5-10 minutes of stretching exercises',
        'Bodyweight exercises like squats, lunges, and gentle yoga poses',
        'Focus on flexibility and mobility exercises'
      ]
    },
    'Normal weight': {
      message: 'Here is a moderate workout plan suitable for normal weight individuals aged 65+:',
      plan: [
        '30 minutes of brisk walking or cycling',
        '10-15 minutes of stretching and flexibility exercises',
        'Strength training with light weights or resistance bands (consult a trainer or physiotherapist)',
        'Include balance and coordination exercises'
      ]
    },
    'Overweight': {
      message: 'Here is a workout plan suitable for overweight individuals aged 65+:',
      plan: [
        '20-30 minutes of moderate-intensity aerobic exercises like walking or swimming',
        '15 minutes of stretching and flexibility exercises',
        'Low-impact cardio workouts (elliptical, stationary bike) to reduce joint stress',
        'Incorporate light strength training exercises'
      ]
    },
    'Obese': {
      message: 'Here is a low-impact workout plan suitable for obese individuals aged 65+:',
      plan: [
        '15-20 minutes of gentle walking or water exercises (aquatic exercises)',
        '10-15 minutes of chair exercises or seated workouts',
        'Focus on low-impact activities to avoid joint strain',
        'Include balance and flexibility exercises'
      ]
    }
    // Add more workout plans as needed
  };

  return (
    <div className='workout-plan'>
      <h2>Workout Plan</h2>
      <p>{workoutPlans[bmiStatus].message}</p>
      <div className="workout-plan-details">
        <div className="workout-plan-card">  
        <ul>
        {workoutPlans[bmiStatus].plan.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
