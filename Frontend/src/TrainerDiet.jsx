


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import TrainerNavbar from './TrainerNavbar';

const TrainerDiet = () => {
  const [dietPlans, setDietPlans] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trainerId = queryParams.get('trainerId');
  const [newDietPlan, setNewDietPlan] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    description: '',
    meals: []
  });
  const [editMode, setEditMode] = useState(false);
  const [currentDietPlanId, setCurrentDietPlanId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDietPlans();
  }, [trainerId]);

  const fetchDietPlans = async () => {
    try {
      const response = await axios.get(`https://fitnessbackend-1-qegx.onrender.com/plans?trainerId=${trainerId}`);
      setDietPlans(response.data);
    } catch (err) {
      console.error('Error fetching diet plans:', err);
      setError('Failed to fetch diet plans');
    }
  };

  const handleInputChange = (e) => {
    setNewDietPlan({ ...newDietPlan, [e.target.name]: e.target.value });
  };

  const handleAddDietPlan = async () => {
    try {
      const response = await axios.post('https://fitnessbackend-10wn.onrender.com/plans', newDietPlan);
      setDietPlans([...dietPlans, response.data]);
      setNewDietPlan({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        description: '',
        meals: []
      });
    } catch (err) {
      console.error('Error creating diet plan:', err);
      setError('Failed to create diet plan');
    }
  };

  const handleEditDietPlan = (plan) => {
    setEditMode(true);
    setCurrentDietPlanId(plan._id);
    setNewDietPlan(plan);
  };

  const handleUpdateDietPlan = async () => {
    try {
      const response = await axios.put(`https://fitnessbackend-1-qegx.onrender.com/plans/${currentDietPlanId}`, newDietPlan);
      setDietPlans(dietPlans.map(plan => (plan._id === currentDietPlanId ? response.data : plan)));
      setNewDietPlan({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        description: '',
        meals: []
      });
      setEditMode(false);
      setCurrentDietPlanId(null);
    } catch (err) {
      console.error('Error updating diet plan:', err);
      setError('Failed to update diet plan');
    }
  };

  const handleDeleteDietPlan = async (id) => {
    try {
      await axios.delete(`https://fitnessbackend-1-qegx.onrender.com/deleteDiet`, { params: { id } });
      setDietPlans(dietPlans.filter(plan => plan._id !== id));
    } catch (err) {
      console.error('Error deleting diet plan:', err);
      setError('Failed to delete diet plan');
    }
  };

  return (
    <div className="trainer-diet-page">
      <TrainerNavbar />
      <div className="container">
        <h1>Manage Diet Plans</h1>
        {error && <p>{error}</p>}
        <div className="diet-form">
          <h2>{editMode ? 'Edit Diet Plan' : 'Create New Diet Plan'}</h2>
          <input type="text" name="name" value={newDietPlan.name} onChange={handleInputChange} placeholder="Name" />
          <input type="number" name="calories" value={newDietPlan.calories} onChange={handleInputChange} placeholder="Calories" />
          <input type="number" name="protein" value={newDietPlan.protein} onChange={handleInputChange} placeholder="Protein" />
          <input type="number" name="carbs" value={newDietPlan.carbs} onChange={handleInputChange} placeholder="Carbs" />
          <input type="number" name="fat" value={newDietPlan.fat} onChange={handleInputChange} placeholder="Fat" />
          <textarea name="description" value={newDietPlan.description} onChange={handleInputChange} placeholder="Description"></textarea>
          {editMode ? (
            <button onClick={handleUpdateDietPlan}>Update Diet Plan</button>
          ) : (
            <button onClick={handleAddDietPlan}>Add Diet Plan</button>
          )}
        </div>
        <div className="diet-list">
          {Array.isArray(dietPlans) && dietPlans.map(plan => (
            <div key={plan._id} className="diet-card">
              <h3>{plan.name}</h3>
              <p>Calories: {plan.calories}</p>
              <p>Protein: {plan.protein}</p>
              <p>Carbs: {plan.carbs}</p>
              <p>Fat: {plan.fat}</p>
              <p>{plan.description}</p>
              <div className="button-group">
                <button onClick={() => handleEditDietPlan(plan)}>
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDeleteDietPlan(plan._id)} className='delete-button'>
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .trainer-diet-page {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          margin: 0 auto;
          width: 100%;
        }
        .container {
          padding: 20px;
        }
        .diet-form {
          margin-bottom: 20px;
          width: 100%;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #f9f9f9;
        }
        .diet-form input, .diet-form textarea, .diet-form button {
          display: block;
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .diet-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .diet-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: calc(33.333% - 20px);
        }
        .diet-card h3 {
          margin-top: 0;
        }
        .button-group {
          display: flex;
          gap: 10px;
        }
        .diet-card button {
          padding: 10px 15px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .diet-card button svg {
          margin-right: 5px;
        }
        .diet-card button:hover {
          background-color: #0056b3;
        }
          .delete-button {
  padding: 10px 15px;
  border: none;
  background-color: #dc3545 !important; /* Red color */
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  display: flex;
  align-items: center;
}

.delete-button:hover {
  background-color: #c82333; /* Darker red on hover */
}
      `}</style>
    </div>
  );
};

export default TrainerDiet;
