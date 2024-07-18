import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TraineeNavbar from './TraineeNavbar';

const TraineeWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(`https://fitnessbackend-10wn.onrender.com/getWorkouts`);
        setWorkouts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching workouts:', err);
        setError('Failed to fetch workouts');
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="workouts-page">
      <TraineeNavbar/>
      <div className="container">
        <h1>Workouts</h1>
        {loading && <p>Loading workouts...</p>}
        {error && <p>{error}</p>}
        <div className="workouts-list">
          {workouts.map(workout => (
            <div key={workout._id} className="workout-card">
              <img src={workout.imageUrl} alt={workout.workoutName} />
              <div className="workout-info">
                <h2>{workout.workoutName}</h2>
                <p><strong>Trainer:</strong> {workout.trainerName}</p>
                <p>{workout.description}</p>
                <p><strong>Category:</strong> {workout.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .workouts-page {
          font-family: 'Arial, sans-serif';
          width: 100%;
          margin: 0 auto;
         
        }
        .navbar {
          background-color: #333;
          padding: 10px;
        }
        .navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-between;
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
          margin-leftt: auto;
        }
        .container {
          padding: 20px;
        }
        .workouts-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .workout-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: calc(33.333% - 20px);
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }
        .workout-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .workout-info {
          padding: 15px;
          flex: 1;
        }
        .workout-info h2 {
          margin: 0 0 10px;
          font-size: 20px;
        }
        .workout-info p {
          margin: 5px 0;
          font-size: 16px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default TraineeWorkout;
