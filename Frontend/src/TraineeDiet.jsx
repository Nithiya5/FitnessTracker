
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TraineeNavbar from './TraineeNavbar';

const TraineeDiet = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get('https://fitnessbackend-10wn.onrender.com/plans');
      setPlans(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching diet plans:', err);
      setError('Failed to fetch diet plans');
      setLoading(false);
    }
  };

  const handlePlanClick = (planId) => {
    setSelectedPlan(planId === selectedPlan ? null : planId);
  };

  return (
    <div className="diet-page">
      <TraineeNavbar />
      
      <div className="container">
        <h1>Diet Plans</h1>
        {loading && <p>Loading diet plans...</p>}
        {error && <p>{error}</p>}
        <div className="plans-list">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className={`plan-card ${selectedPlan === plan._id ? 'expanded' : ''}`}
              onClick={() => handlePlanClick(plan._id)}
            >
              <h2 style={{ fontSize: '24px', color: 'black' }}>{plan.name}</h2>
              <p>{plan.description}</p>
              <p className="highlight">Calories: {plan.calories}</p>
              <p className="highlight">Protein: {plan.protein}</p>
              <p className="highlight">Carbs: {plan.carbs}</p>
              <p className="highlight">Fat: {plan.fat}</p>
              {/* <h3>Meals</h3> */}
              <ul className="meals-list">
                {plan.meals.map((meal, index) => (
                  <li key={index} className="meal-item">
                    <strong>{meal.mealName}:</strong> {meal.foodItems} ({meal.quantity}, {meal.nutrition})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .diet-page {
          font-family: 'Arial, sans-serif';
          width: 100%;
          margin: 0 auto;
        
          // background-color: #121212;
          color: #ffffff;
        }
        .navbar {
          background-color: #333;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logout-btn {
          margin-left: auto;
        }
        .navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .navbar li {
          margin-right: 15px;
        }
        .navbar a, .navbar button {
          color: white;
          text-decoration: none;
          padding: 10px 15px;
          display: block;
        }
        .navbar a:hover, .navbar button:hover {
          background-color: #555;
        }
        .logout-btn {
          margin-left: auto;
        }
        .container {
          padding: 20px;
          color:black;
        }
        .plans-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .plan-card {
          background: white;
          border: 1px solid #333;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: calc(33.333% - 20px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .plan-card.expanded {
          transform: scale(1.05);
          z-index: 10;
          background-color: #333;
        }
        .plan-card h2 {
          margin-top: 0;
          color: black;
        }
        .plan-card p {
          margin: 5px 0;
          font-size: 20px;
          color: black;
        }
        .highlight {
          color: #ff5722;
        }
       
        .meal-item {
          margin-bottom: 10px;
          padding: 10px;
          background-color: #424242;
          border-radius: 5px;
        }
        .meal-item strong {
          color: #00e676;
        }
      `}</style>
    </div>
  );
};

export default TraineeDiet;
