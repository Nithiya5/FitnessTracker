

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import TrainerNavbar from './TrainerNavbar';

// // const TrainerWorkout = () => {
// //   const [workouts, setWorkouts] = useState([]);
// //   const queryParams = new URLSearchParams(window.location.search);
// //   const trainerId = queryParams.get('trainerId');

// //   const [newWorkout, setNewWorkout] = useState({
// //     trainerId: trainerId,
// //     workoutName: '',
// //     description: '',
// //     category: '',
// //     image: null
// //   });

// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchWorkouts();
// //   }, []);

// //   const fetchWorkouts = async () => {
// //     try {
// //       const response = await axios.get('https://fitnessbackend-10wn.onrender.com/getworkouts');
// //       setWorkouts(response.data);
// //     } catch (err) {
// //       console.error('Error fetching workouts:', err);
// //       setError('Failed to fetch workouts');
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     if (e.target.name === 'file') {
// //       setNewWorkout({ ...newWorkout, image: e.target.files[0] });
// //     } else {
// //       setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
// //     }
// //   };

// //   const saveWorkout = async () => {
// //     const formData = new FormData();
// //     formData.append('trainerId', newWorkout.trainerId);
// //     formData.append('workoutName', newWorkout.workoutName);
// //     formData.append('description', newWorkout.description);
// //     formData.append('category', newWorkout.category);
// //     formData.append('image', newWorkout.image);

// //     try {
// //       const response = await fetch('https://fitnessbackend-3.onrender.com/api/workouts', {
// //         method: 'POST',
// //         body: formData
// //       });

// //       if (response.ok) {
// //         toast.success('Workout added successfully!');
// //         setNewWorkout({
// //           trainerId: trainerId,
// //           workoutName: '',
// //           description: '',
// //           category: '',
// //           image: null
// //         });
// //         fetchWorkouts(); // Fetch the updated list of workouts
// //       } else {
// //         toast.error('Failed to add workout.');
// //       }
// //     } catch (error) {
// //       console.error('Error occurred while adding workout:', error);
// //       toast.error('Error occurred while adding workout.');
// //     }
// //   };

// //   return (
// //     <div className="trainer-workout-page">
// //       <TrainerNavbar />
// //       <div className="container">
// //         <h1>Upload Workout</h1>
// //         {error && <p>{error}</p>}
// //         <div className="workout-form">
// //           <input type="text" name="workoutName" value={newWorkout.workoutName} onChange={handleInputChange} placeholder="Workout Name" />
// //           <textarea name="description" value={newWorkout.description} onChange={handleInputChange} placeholder="Description"></textarea>
// //           <input type="text" name="category" value={newWorkout.category} onChange={handleInputChange} placeholder="Category" />
// //           <input type="file" name="file" onChange={handleInputChange} />
// //           <button onClick={saveWorkout}>Upload Workout</button>
// //         </div>
// //         <div className="workout-list">
// //           {Array.isArray(workouts) && workouts.map(workout => (
// //             <div key={workout._id} className="workout-card">
// //               <h3>{workout.workoutName}</h3>
// //               <img src={workout.imageUrl} alt={workout.workoutName} />
// //               <p>{workout.description}</p>
// //               <p>Category: {workout.category}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <ToastContainer />
// //       <style>{`
// //         .trainer-workout-page {
// //           font-family: Arial, sans-serif;
// //           padding: 20px;
// //         }

// //         .container {
// //           max-width: 1200px;
// //           margin: 0 auto;
// //           padding: 20px;
// //         }

// //         h1 {
// //           text-align: center;
// //           margin-bottom: 20px;
// //         }

// //         .workout-form {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 10px;
// //           margin-bottom: 20px;
// //         }

// //         .workout-form input[type="text"],
// //         .workout-form textarea {
// //           padding: 10px;
// //           border: 1px solid #ccc;
// //           border-radius: 5px;
// //         }

// //         .workout-form textarea {
// //           resize: vertical;
// //         }

// //         .workout-form input[type="file"] {
// //           border: none;
// //         }

// //         .workout-form button {
// //           padding: 10px 20px;
// //           border: none;
// //           background-color: #28a745;
// //           color: white;
// //           border-radius: 5px;
// //           cursor: pointer;
// //           align-self: flex-end;
// //         }

// //         .workout-form button:hover {
// //           background-color: #218838;
// //         }

// //         .workout-list {
// //           display: flex;
// //           flex-wrap: wrap;
// //           gap: 20px;
// //         }

// //         .workout-card {
// //           background-color: #f8f9fa;
// //           border: 1px solid #ddd;
// //           border-radius: 5px;
// //           padding: 15px;
// //           flex: 1 1 calc(33.333% - 20px);
// //           box-sizing: border-box;
// //         }

// //         .workout-card h3 {
// //           margin-top: 0;
// //         }

// //         .workout-card img {
// //           width: 100%;
// //           height: 200px; /* Fixed height for all images */
// //           object-fit: cover;
// //           border-radius: 5px;
// //           margin-bottom: 10px;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default TrainerWorkout;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TrainerNavbar from './TrainerNavbar';

// const TrainerWorkout = () => {
//   const [workouts, setWorkouts] = useState([]);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const trainerId = queryParams.get('trainerId');
//   const workoutId = queryParams.get('workoutId');
//   const [newWorkout, setNewWorkout] = useState({
//     workoutName: '',
//     description: '',
//     category: '',
//     image: null
//   });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchTrainerWorkouts();
//   }, [trainerId]);

//   const fetchTrainerWorkouts = async () => {
//     try {
//       if (!trainerId) {
//         toast.error('Trainer ID is missing');
//         return;
//       }
//       const response = await axios.get(`https://fitnessbackend-1-qegx.onrender.com/trainer-workouts?trainerId=${trainerId}`);
//       setWorkouts(response.data);
//     } catch (err) {
//       console.error('Error fetching trainer workouts:', err);
//       setError('No workouts found for this trainer');
//     }
//   };

//   const handleInputChange = (e) => {
//     if (e.target.name === 'file') {
//       setNewWorkout({ ...newWorkout, image: e.target.files[0] });
//     } else {
//       setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
//     }
//   };

//   const saveWorkout = async () => {
//     const formData = new FormData();
//     formData.append('trainerId', trainerId);
//     formData.append('workoutName', newWorkout.workoutName);
//     formData.append('description', newWorkout.description);
//     formData.append('category', newWorkout.category);
//     formData.append('image', newWorkout.image);

//     try {
//       const response = await fetch('https://fitnessbackend-1-qegx.onrender.com/addWorkout', {
//         method: 'POST',
//         body: formData
//       });

//       if (response.ok) {
//         toast.success('Workout added successfully!');
//         setNewWorkout({
//           workoutName: '',
//           description: '',
//           category: '',
//           image: null
//         });
//         fetchTrainerWorkouts();
//       } else {
//         toast.error('Failed to add workout.');
//       }
//     } catch (error) {
//       console.error('Error occurred while adding workout:', error);
//       toast.error('Error occurred while adding workout.');
//     }
//   };

  
//   const deleteWorkout = async (workoutId) => {
//     try {
//       // Send the DELETE request with the workoutId as a query parameter
//       const response = await axios.delete(`https://fitnessbackend-1-qegx.onrender.com/deleteWorkout`, {
//         params: { workoutId }
//       });
  
//       // Check if the response status is 200 (OK)
//       if (response.status === 200) {
//         // Show a success toast notification
//         toast.success('Workout deleted successfully!');
        
//         // Fetch the updated list of workouts
//         fetchTrainerWorkouts();
//       }
//     } catch (error) {
//       // Log the error to the console
//       console.error('Error deleting workout:', error);
      
//       // Show an error toast notification
//       toast.error('Error deleting workout.');
//     }
//   };
  

//   const editWorkout = async (workoutId) => {
//     const editedWorkout = workouts.find(workout => workout._id === workoutId);
//     setNewWorkout(editedWorkout);
//   };

//   const updateWorkout = async () => {
//     try {
//       const response = await axios.put(`https://fitnessbackend-1-qegx.onrender.com/editWorkout?workoutId=${workoutId}`, newWorkout);
//       if (response.status === 200) {
//         toast.success('Workout updated successfully!');
//         fetchTrainerWorkouts();
//         setNewWorkout({
//           workoutName: '',
//           description: '',
//           category: '',
//           image: null
//         });
//       }
//     } catch (error) {
//       console.error('Error updating workout:', error);
//       toast.error('Error updating workout.');
//     }
//   };

//   return (
//     <div className="trainer-workout-page">
//       <TrainerNavbar />
//       <div className="container">
//         <h1>Upload Workout</h1>
//         {error && <p>{error}</p>}
//         <div className="workout-form">
//           <input type="text" name="workoutName" value={newWorkout.workoutName} onChange={handleInputChange} placeholder="Workout Name" />
//           <textarea name="description" value={newWorkout.description} onChange={handleInputChange} placeholder="Description"></textarea>
//           <input type="text" name="category" value={newWorkout.category} onChange={handleInputChange} placeholder="Category" />
//           <input type="file" name="file" onChange={handleInputChange} />
//           <button onClick={saveWorkout}>Upload Workout</button>
//         </div>
//         <div className="workout-list">
//           {workouts.map(workout => (
//             <div key={workout._id} className="workout-card">
//               <h3>{workout.workoutName}</h3>
//               <img src={workout.imageUrl} alt={workout.workoutName} />
//               <p>{workout.description}</p>
//               <p>Category: {workout.category}</p>
//               <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
//               <button onClick={() => editWorkout(workout._id)}>Edit</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ToastContainer />
//       <style jsx>{`
//         .trainer-workout-page {
//           font-family: Arial, sans-serif;
//           padding: 20px;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 20px;
//         }

//         h1 {
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .workout-form {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           margin-bottom: 20px;
//         }

//         .workout-form input[type="text"],
//         .workout-form textarea {
//           padding: 10px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }

//         .workout-form textarea {
//           resize: vertical;
//         }

//         .workout-form input[type="file"] {
//           border: none;
//         }

//         .workout-form button {
//           padding: 10px 20px;
//           border: none;
//           background-color: #28a745;
//           color: white;
//           border-radius: 5px;
//           cursor: pointer;
//           align-self: flex-end;
//         }

//         .workout-form button:hover {
//           background-color: #218838;
//         }

//         .workout-list {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .workout-card {
//           background-color: #f8f9fa;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 15px;
//           flex: 1 1 calc(33.333% - 20px);
//           box-sizing: border-box;
//           position: relative;
//         }

//         .workout-card h3 {
//           margin-top: 0;
//         }

//         .workout-card img {
//           width: 100%;
//           height: 200px;
//           object-fit: cover;
//           border-radius: 5px;
//           margin-bottom: 10px;
//         }

//         .workout-card button {
//           position: absolute;
//           bottom: 10px;
//           left: 10px;
//           padding: 5px 10px;
//           background-color: #dc3545;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }

//         .workout-card button + button {
//           left: 60px;
//         }

//         .workout-card button:hover {
//           background-color: #c82333;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrainerWorkout;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TrainerNavbar from './TrainerNavbar';

// const TrainerWorkout = () => {
//   const [workouts, setWorkouts] = useState([]);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const trainerId = queryParams.get('trainerId');
//   const [newWorkout, setNewWorkout] = useState({
//     workoutName: '',
//     description: '',
//     category: '',
//     image: null
//   });
//   const [editingWorkoutId, setEditingWorkoutId] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchTrainerWorkouts();
//   }, [trainerId]);

//   const fetchTrainerWorkouts = async () => {
//     try {
//       if (!trainerId) {
//         toast.error('Trainer ID is missing');
//         return;
//       }
//       const response = await axios.get(`https://fitnessbackend-1-qegx.onrender.com/trainer-workouts?trainerId=${trainerId}`);
//       setWorkouts(response.data);
//     } catch (err) {
//       console.error('Error fetching trainer workouts:', err);
//       setError('No workouts found for this trainer');
//     }
//   };

//   const handleInputChange = (e) => {
//     if (e.target.name === 'file') {
//       setNewWorkout({ ...newWorkout, image: e.target.files[0] });
//     } else {
//       setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
//     }
//   };

//   const saveWorkout = async () => {
//     const formData = new FormData();
//     formData.append('trainerId', trainerId);
//     formData.append('workoutName', newWorkout.workoutName);
//     formData.append('description', newWorkout.description);
//     formData.append('category', newWorkout.category);
//     formData.append('image', newWorkout.image);

//     try {
//       const response = await fetch('https://fitnessbackend-1-qegx.onrender.com/addWorkout', {
//         method: 'POST',
//         body: formData
//       });

//       if (response.ok) {
//         toast.success('Workout added successfully!');
//         setNewWorkout({
//           workoutName: '',
//           description: '',
//           category: '',
//           image: null
//         });
//         fetchTrainerWorkouts();
//       } else {
//         toast.error('Failed to add workout.');
//       }
//     } catch (error) {
//       console.error('Error occurred while adding workout:', error);
//       toast.error('Error occurred while adding workout.');
//     }
//   };

//   const deleteWorkout = async (workoutId) => {
//     try {
//       const response = await axios.delete(`https://fitnessbackend-1-qegx.onrender.com/deleteWorkout`, {
//         params: { workoutId }
//       });

//       if (response.status === 200) {
//         toast.success('Workout deleted successfully!');
//         fetchTrainerWorkouts();
//       }
//     } catch (error) {
//       console.error('Error deleting workout:', error);
//       toast.error('Error deleting workout.');
//     }
//   };

//   const editWorkout = (workoutId) => {
//     const editedWorkout = workouts.find(workout => workout._id === workoutId);
//     setNewWorkout({
//       workoutName: editedWorkout.workoutName,
//       description: editedWorkout.description,
//       category: editedWorkout.category,
//       image: null // Image is handled separately
//     });
//     setEditingWorkoutId(workoutId);
//   };

//   const updateWorkout = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('workoutName', newWorkout.workoutName);
//       formData.append('description', newWorkout.description);
//       formData.append('category', newWorkout.category);
//       if (newWorkout.image) {
//         formData.append('image', newWorkout.image);
//       }

//       const response = await axios.put(`https://fitnessbackend-1-qegx.onrender.com/editWorkout?workoutId=${editingWorkoutId}`, formData);

//       if (response.status === 200) {
//         toast.success('Workout updated successfully!');
//         fetchTrainerWorkouts();
//         setNewWorkout({
//           workoutName: '',
//           description: '',
//           category: '',
//           image: null
//         });
//         setEditingWorkoutId(null);
//       }
//     } catch (error) {
//       console.error('Error updating workout:', error);
//       toast.error('Error updating workout.');
//     }
//   };

//   return (
//     <div className="trainer-workout-page">
//       <TrainerNavbar />
//       <div className="container">
//         <h1>{editingWorkoutId ? 'Edit Workout' : 'Upload Workout'}</h1>
//         {error && <p>{error}</p>}
//         <div className="workout-form">
//           <input type="text" name="workoutName" value={newWorkout.workoutName} onChange={handleInputChange} placeholder="Workout Name" />
//           <textarea name="description" value={newWorkout.description} onChange={handleInputChange} placeholder="Description"></textarea>
//           <input type="text" name="category" value={newWorkout.category} onChange={handleInputChange} placeholder="Category" />
//           <input type="file" name="file" onChange={handleInputChange} />
//           <button onClick={editingWorkoutId ? updateWorkout : saveWorkout}>
//             {editingWorkoutId ? 'Update Workout' : 'Upload Workout'}
//           </button>
//         </div>
//         <div className="workout-list">
//           {workouts.map(workout => (
//             <div key={workout._id} className="workout-card">
//               <h3>{workout.workoutName}</h3>
//               <img src={workout.imageUrl} alt={workout.workoutName} />
//               <p>{workout.description}</p>
//               <p>Category: {workout.category}</p>
//               <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
//               <button onClick={() => editWorkout(workout._id)}>Edit</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ToastContainer />
//       <style jsx>{`
//         .trainer-workout-page {
//           font-family: Arial, sans-serif;
//           padding: 20px;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 20px;
//         }

//         h1 {
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .workout-form {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           margin-bottom: 20px;
//         }

//         .workout-form input[type="text"],
//         .workout-form textarea {
//           padding: 10px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }

//         .workout-form textarea {
//           resize: vertical;
//         }

//         .workout-form input[type="file"] {
//           border: none;
//         }

//         .workout-form button {
//           padding: 10px 20px;
//           border: none;
//           background-color: #28a745;
//           color: white;
//           border-radius: 5px;
//           cursor: pointer;
//           align-self: flex-end;
//         }

//         .workout-form button:hover {
//           background-color: #218838;
//         }

//         .workout-list {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .workout-card {
//           background-color: #f8f9fa;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 15px;
//           flex: 1 1 calc(33.333% - 20px);
//           box-sizing: border-box;
//           position: relative;
//         }

//         .workout-card h3 {
//           margin-top: 0;
//         }

//         .workout-card img {
//           width: 100%;
//           height: 200px;
//           object-fit: cover;
//           border-radius: 5px;
//           margin-bottom: 10px;
//         }

//         .workout-card button {
//           position: absolute;
//           bottom: 10px;
//           left: 10px;
//           padding: 5px 10px;
//           background-color: #dc3545;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }

//         .workout-card button + button {
//           left: 60px;
//         }

//         .workout-card button:hover {
//           background-color: #c82333;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrainerWorkout;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TrainerNavbar from './TrainerNavbar';

// const TrainerWorkout = () => {
//   const [workouts, setWorkouts] = useState([]);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const trainerId = queryParams.get('trainerId');
//   const [newWorkout, setNewWorkout] = useState({
//     workoutName: '',
//     description: '',
//     category: '',
//     image: null,
//     imageUrl: '',
//     _id: ''
//   });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchTrainerWorkouts();
//   }, [trainerId]);

//   const fetchTrainerWorkouts = async () => {
//     try {
//       if (!trainerId) {
//         toast.error('Trainer ID is missing');
//         return;
//       }
//       const response = await axios.get(`https://fitnessbackend-1-qegx.onrender.com/trainer-workouts?trainerId=${trainerId}`);
//       setWorkouts(response.data);
//     } catch (err) {
//       console.error('Error fetching trainer workouts:', err);
//       setError('No workouts found for this trainer');
//     }
//   };

//   const handleInputChange = (e) => {
//     if (e.target.name === 'file') {
//       setNewWorkout({ ...newWorkout, image: e.target.files[0] });
//     } else {
//       setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
//     }
//   };

//   const saveWorkout = async () => {
//     const formData = new FormData();
//     formData.append('trainerId', trainerId);
//     formData.append('workoutName', newWorkout.workoutName);
//     formData.append('description', newWorkout.description);
//     formData.append('category', newWorkout.category);
//     formData.append('image', newWorkout.image);

//     try {
//       const response = await fetch('https://fitnessbackend-1-qegx.onrender.com/addWorkout', {
//         method: 'POST',
//         body: formData
//       });

//       if (response.ok) {
//         toast.success('Workout added successfully!');
//         setNewWorkout({
//           workoutName: '',
//           description: '',
//           category: '',
//           image: null,
//           imageUrl: '',
//           _id: ''
//         });
//         fetchTrainerWorkouts();
//       } else {
//         toast.error('Failed to add workout.');
//       }
//     } catch (error) {
//       console.error('Error occurred while adding workout:', error);
//       toast.error('Error occurred while adding workout.');
//     }
//   };

//   const deleteWorkout = async (workoutId) => {
//     try {
//       const response = await axios.delete(`https://fitnessbackend-1-qegx.onrender.com/deleteWorkout`, {
//         params: { workoutId }
//       });

//       if (response.status === 200) {
//         toast.success('Workout deleted successfully!');
//         fetchTrainerWorkouts();
//       }
//     } catch (error) {
//       console.error('Error deleting workout:', error);
//       toast.error('Error deleting workout.');
//     }
//   };

//   const editWorkout = (workoutId) => {
//     const editedWorkout = workouts.find(workout => workout._id === workoutId);
//     setNewWorkout({
//       ...editedWorkout,
//       image: null // Reset the image file input
//     });
//   };

//   const updateWorkout = async () => {
//     const workoutId = newWorkout._id;
//     const formData = new FormData();
//     formData.append('trainerId', newWorkout.trainerId);
//     formData.append('workoutName', newWorkout.workoutName);
//     formData.append('description', newWorkout.description);
//     formData.append('category', newWorkout.category);
//     formData.append('imageUrl', newWorkout.imageUrl);
//     if (newWorkout.image) {
//       formData.append('image', newWorkout.image);
//     }

//     try {
//       const response = await axios.put(`https://fitnessbackend-1-qegx.onrender.com/editWorkout/${workoutId}`, formData);

//       if (response.status === 200) {
//         toast.success('Workout updated successfully!');
//         fetchTrainerWorkouts();
//         setNewWorkout({
//           workoutName: '',
//           description: '',
//           category: '',
//           image: null,
//           imageUrl: '',
//           _id: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error updating workout:', error);
//       toast.error('Error updating workout.');
//     }
//   };

//   return (
//     <div className="trainer-workout-page">
//       <TrainerNavbar />
//       <div className="container">
//         <h1>{newWorkout._id ? 'Edit Workout' : 'Upload Workout'}</h1>
//         {error && <p>{error}</p>}
//         <div className="workout-form">
//           <input type="text" name="workoutName" value={newWorkout.workoutName} onChange={handleInputChange} placeholder="Workout Name" />
//           <textarea name="description" value={newWorkout.description} onChange={handleInputChange} placeholder="Description"></textarea>
//           <input type="text" name="category" value={newWorkout.category} onChange={handleInputChange} placeholder="Category" />
//           <input type="file" name="file" onChange={handleInputChange} />
//           <button onClick={newWorkout._id ? updateWorkout : saveWorkout}>
//             {newWorkout._id ? 'Update Workout' : 'Upload Workout'}
//           </button>
//         </div>
//         <div className="workout-list">
//           {workouts.map(workout => (
//             <div key={workout._id} className="workout-card">
//               <h3>{workout.workoutName}</h3>
//               <img src={workout.imageUrl} alt={workout.workoutName} />
//               <p>{workout.description}</p>
//               <p>Category: {workout.category}</p>
//               <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
//               <button onClick={() => editWorkout(workout._id)}>Edit</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ToastContainer />
//       <style jsx>{`
//         .trainer-workout-page {
//           font-family: Arial, sans-serif;
//           padding: 20px;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 20px;
//         }

//         h1 {
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .workout-form {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           margin-bottom: 20px;
//         }

//         .workout-form input[type="text"],
//         .workout-form textarea {
//           padding: 10px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }

//         .workout-form textarea {
//           resize: vertical;
//         }

//         .workout-form input[type="file"] {
//           border: none;
//         }

//         .workout-form button {
//           padding: 10px 20px;
//           border: none;
//           background-color: #28a745;
//           color: white;
//           border-radius: 5px;
//           cursor: pointer;
//           align-self: flex-end;
//         }

//         .workout-form button:hover {
//           background-color: #218838;
//         }

//         .workout-list {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .workout-card {
//           background-color: #f8f9fa;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 15px;
//           flex: 1 1 calc(33.333% - 20px);
//           box-sizing: border-box;
//           position: relative;
//         }

//         .workout-card h3 {
//           margin-top: 0;
//         }

//         .workout-card img {
//           width: 100%;
//           height: 200px;
//           object-fit: cover;
//           border-radius: 5px;
//           margin-bottom: 10px;
//         }

//         .workout-card button {
//           position: absolute;
//           bottom: 10px;
//           left: 10px;
//           padding: 5px 10px;
//           background-color: #dc3545;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }

//         .workout-card button + button {
//           left: 60px;
//         }

//         .workout-card button:hover {
//           background-color: #c82333;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrainerWorkout;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import 'react-toastify/dist/ReactToastify.css';
// import TrainerNavbar from './TrainerNavbar';

// const TrainerWorkout = () => {
//   const [workouts, setWorkouts] = useState([]);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const trainerId = queryParams.get('trainerId');
//   const [newWorkout, setNewWorkout] = useState({
//     workoutName: '',
//     description: '',
//     category: '',
//     image: null,
//     imageUrl: '',
//     _id: ''
//   });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchTrainerWorkouts();
//   }, [trainerId]);

//   const fetchTrainerWorkouts = async () => {
//     try {
//       if (!trainerId) {
//         toast.error('Trainer ID is missing');
//         return;
//       }
//       const response = await axios.get(`https://fitnessbackend-1-qegx.onrender.com/trainer-workouts?trainerId=${trainerId}`);
//       setWorkouts(response.data);
//     } catch (err) {
//       console.error('Error fetching trainer workouts:', err);
//       setError('No workouts found for this trainer');
//     }
//   };

//   const handleInputChange = (e) => {
//     if (e.target.name === 'file') {
//       setNewWorkout({ ...newWorkout, image: e.target.files[0] });
//     } else {
//       setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
//     }
//   };

//   const saveWorkout = async () => {
//     const formData = new FormData();
//     formData.append('trainerId', trainerId);
//     formData.append('workoutName', newWorkout.workoutName);
//     formData.append('description', newWorkout.description);
//     formData.append('category', newWorkout.category);
//     formData.append('image', newWorkout.image);

//     try {
//       const response = await fetch('https://fitnessbackend-1-qegx.onrender.com/addWorkout', {
//         method: 'POST',
//         body: formData
//       });

//       if (response.ok) {
//         toast.success('Workout added successfully!');
//         setNewWorkout({
//           workoutName: '',
//           description: '',
//           category: '',
//           image: null,
//           imageUrl: '',
//           _id: ''
//         });
//         fetchTrainerWorkouts();
//       } else {
//         toast.error('Failed to add workout.');
//       }
//     } catch (error) {
//       console.error('Error occurred while adding workout:', error);
//       toast.error('Error occurred while adding workout.');
//     }
//   };

//   const deleteWorkout = async (workoutId) => {
//     try {
//       const response = await axios.delete(`https://fitnessbackend-1-qegx.onrender.com/deleteWorkout`, {
//         params: { workoutId }
//       });

//       if (response.status === 200) {
//         toast.success('Workout deleted successfully!');
//         fetchTrainerWorkouts();
//       }
//     } catch (error) {
//       console.error('Error deleting workout:', error);
//       toast.error('Error deleting workout.');
//     }
//   };

//   const editWorkout = (workoutId) => {
//     const editedWorkout = workouts.find(workout => workout._id === workoutId);
//     setNewWorkout({
//       ...editedWorkout,
//       image: null // Reset the image file input
//     });
//   };

//   // const updateWorkout = async () => {
//   //   const workoutId = newWorkout._id;
//   //   const formData = new FormData();
//   //   formData.append('trainerId', newWorkout.trainerId);
//   //   formData.append('workoutName', newWorkout.workoutName);
//   //   formData.append('description', newWorkout.description);
//   //   formData.append('category', newWorkout.category);
//   //   formData.append('imageUrl', newWorkout.imageUrl);
//   //   if (newWorkout.image) {
//   //     formData.append('image', newWorkout.image);
//   //   }

//   //   try {
//   //     const response = await axios.put(`https://fitnessbackend-1-qegx.onrender.com/editWorkout/${workoutId}`, formData);

//   //     if (response.status === 200) {
//   //       toast.success('Workout updated successfully!');
//   //       fetchTrainerWorkouts();
//   //       setNewWorkout({
//   //         workoutName: '',
//   //         description: '',
//   //         category: '',
//   //         image: null,
//   //         imageUrl: '',
//   //         _id: ''
//   //       });
//   //     }
//   //   } catch (error) {
//   //     console.error('Error updating workout:', error);
//   //     toast.error('Error updating workout.');
//   //   }
//   // };
//   const updateWorkout = async () => {
//     const workoutId = newWorkout._id;
  
//     // Check if a new image is selected
//     if (newWorkout.image) {
//       try {
//         const imageData = new FormData();
//         imageData.append('image', newWorkout.image);
  
//         const imageUploadResponse = await axios.post('https://fitnessbackend-1-qegx.onrender.com/uploadImage', imageData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
  
//         if (imageUploadResponse.status === 200) {
//           newWorkout.imageUrl = imageUploadResponse.data.imageUrl;
//         } else {
//           toast.error('Failed to upload image.');
//           return;
//         }
//       } catch (error) {
//         console.error('Error uploading image:', error);
//         toast.error('Error uploading image.');
//         return;
//       }
//     }
  
//     try {
//       const response = await axios.put(`https://fitnessbackend-1-qegx.onrender.com/editWorkout/${workoutId}`, newWorkout);
  
//       if (response.status === 200) {
//         toast.success('Workout updated successfully!');
//         fetchTrainerWorkouts();
//         setNewWorkout({
//           workoutName: '',
//           description: '',
//           category: '',
//           image: null,
//           imageUrl: '',
//           _id: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error updating workout:', error);
//       toast.error('Error updating workout.');
//     }
//   };
  

//   return (
//     <div className="trainer-workout-page">
//       <TrainerNavbar />
//       <div className="container">
//         <h1>{newWorkout._id ? 'Edit Workout' : 'Upload Workout'}</h1>
//         {error && <p>{error}</p>}
//         <div className="workout-form">
//           <input type="text" name="workoutName" value={newWorkout.workoutName} onChange={handleInputChange} placeholder="Workout Name" />
//           <textarea name="description" value={newWorkout.description} onChange={handleInputChange} placeholder="Description"></textarea>
//           <input type="text" name="category" value={newWorkout.category} onChange={handleInputChange} placeholder="Category" />
//           <input type="file" name="file" onChange={handleInputChange} />
//           <button onClick={newWorkout._id ? updateWorkout : saveWorkout}>
//             {newWorkout._id ? 'Update Workout' : 'Upload Workout'}
//           </button>
//         </div>
//         <div className="workout-list">
//           {workouts.map(workout => (
//             <div key={workout._id} className="workout-card">
//               <h3>{workout.workoutName}</h3>
//               <img src={workout.imageUrl} alt={workout.workoutName} />
//               <p>{workout.description}</p>
//               <p>Category: {workout.category}</p>
//               <div className="button-group">
//                 <button onClick={() => deleteWorkout(workout._id)}className='delete-button'>
//                   <FaTrash /> Delete
//                 </button>
//                 <button onClick={() => editWorkout(workout._id)}>
//                   <FaEdit /> Edit
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ToastContainer />
//       <style jsx>{`
//         .trainer-workout-page {
//           font-family: Arial, sans-serif;
//           padding: 20px;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 20px;
//         }

//         h1 {
//           text-align: center;
//           margin-bottom: 20px;
//         }
//           .delete-button {
//   padding: 10px 15px;
//   border: none;
//   background-color: #dc3545 !important; /* Red color */
//   color: white;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-right: 5px;
//   display: flex;
//   align-items: center;
// }

// .delete-button:hover {
//   background-color: #c82333; /* Darker red on hover */
// }

//         .workout-form {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           margin-bottom: 20px;
//           width: 100%;
//           max-width: 600px;
//           margin-left: auto;
//           margin-right: auto;
//           padding: 20px;
//           border: 1px solid #ddd;
//           border-radius: 10px;
//           background-color: #f9f9f9;
//         }

//         .workout-form input[type="text"],
//         .workout-form textarea {
//           padding: 10px;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//         }

//         .workout-form textarea {
//           resize: vertical;
//         }

//         .workout-form input[type="file"] {
//           border: none;
//         }

//         .workout-form button {
//           padding: 10px 20px;
//           border: none;
//           background-color: #28a745;
//           color: white;
//           border-radius: 5px;
//           cursor: pointer;
//           align-self: flex-end;
//         }

//         .workout-form button:hover {
//           background-color: #218838;
//         }

//         .workout-list {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .workout-card {
//           background-color: #f8f9fa;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           padding: 15px;
//           flex: 1 1 calc(33.333% - 20px);
//           box-sizing: border-box;
//           position: relative;
//         }

//         .workout-card h3 {
//           margin-top: 0;
//         }

//         .workout-card img {
//           width: 100%;
//           height: 200px;
//           object-fit: cover;
//           border-radius: 5px;
//           margin-bottom: 10px;
//         }

//         .button-group {
//           display: flex;
//           gap: 10px;
//         }

//         .workout-card button {
//           padding: 5px 10px;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//         }

//         .workout-card button svg {
//           margin-right: 5px;
//         }

//         .workout-card button:hover {
//           background-color: #0056b3;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrainerWorkout;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import TrainerNavbar from './TrainerNavbar';

const TrainerWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trainerId = queryParams.get('trainerId');
  const [newWorkout, setNewWorkout] = useState({
    workoutName: '',
    description: '',
    category: '',
    image: null,
    imageUrl: '',
    _id: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTrainerWorkouts();
  }, [trainerId]);

  const fetchTrainerWorkouts = async () => {
    try {
      if (!trainerId) {
        toast.error('Trainer ID is missing');
        return;
      }
      const response = await axios.get(`https://fitnessbackend-1-qegx.onrender.com/trainer-workouts?trainerId=${trainerId}`);
      setWorkouts(response.data);
    } catch (err) {
      console.error('Error fetching trainer workouts:', err);
      setError('No workouts found for this trainer');
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'file') {
      setNewWorkout({ ...newWorkout, image: e.target.files[0] });
    } else {
      setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
    }
  };

  const saveWorkout = async () => {
    const formData = new FormData();
    formData.append('trainerId', trainerId);
    formData.append('workoutName', newWorkout.workoutName);
    formData.append('description', newWorkout.description);
    formData.append('category', newWorkout.category);
    formData.append('image', newWorkout.image);

    try {
      const response = await fetch('https://fitnessbackend-1-qegx.onrender.com/addWorkout', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast.success('Workout added successfully!');
        setNewWorkout({
          workoutName: '',
          description: '',
          category: '',
          image: null,
          imageUrl: '',
          _id: ''
        });
        fetchTrainerWorkouts();
      } else {
        toast.error('Failed to add workout.');
      }
    } catch (error) {
      console.error('Error occurred while adding workout:', error);
      toast.error('Error occurred while adding workout.');
    }
  };

  const deleteWorkout = async (workoutId) => {
    try {
      const response = await axios.delete(`https://fitnessbackend-1-qegx.onrender.com/deleteWorkout`, {
        params: { workoutId }
      });

      if (response.status === 200) {
        toast.success('Workout deleted successfully!');
        fetchTrainerWorkouts();
      }
    } catch (error) {
      console.error('Error deleting workout:', error);
      toast.error('Error deleting workout.');
    }
  };

  const editWorkout = (workoutId) => {
    const editedWorkout = workouts.find(workout => workout._id === workoutId);
    setNewWorkout({
      ...editedWorkout,
      image: null // Reset the image file input
    });
  };

  const updateWorkout = async () => {
    const workoutId = newWorkout._id;
  
    // Check if a new image is selected
    if (newWorkout.image) {
      try {
        const imageData = new FormData();
        imageData.append('image', newWorkout.image);
  
        const imageUploadResponse = await axios.post('https://fitnessbackend-1-qegx.onrender.com/uploadImage', imageData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        if (imageUploadResponse.status === 200) {
          newWorkout.imageUrl = imageUploadResponse.data.imageUrl;
        } else {
          toast.error('Failed to upload image.');
          return;
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Error uploading image.');
        return;
      }
    }
  
    try {
      const response = await axios.put(`https://fitnessbackend-1-qegx.onrender.com/editWorkout/${workoutId}`, newWorkout);
  
      if (response.status === 200) {
        toast.success('Workout updated successfully!');
        fetchTrainerWorkouts();
        setNewWorkout({
          workoutName: '',
          description: '',
          category: '',
          image: null,
          imageUrl: '',
          _id: ''
        });
      }
    } catch (error) {
      console.error('Error updating workout:', error);
      toast.error('Error updating workout.');
    }
  };

  return (
    <div className="trainer-workout-page">
      <TrainerNavbar />
      <div className="container">
        <h1>{newWorkout._id ? 'Edit Workout' : 'Upload Workout'}</h1>
        {error && <p>{error}</p>}
        <div className="workout-form">
          <input type="text" name="workoutName" value={newWorkout.workoutName} onChange={handleInputChange} placeholder="Workout Name" />
          <textarea name="description" value={newWorkout.description} onChange={handleInputChange} placeholder="Description"></textarea>
          <input type="text" name="category" value={newWorkout.category} onChange={handleInputChange} placeholder="Category" />
          <input type="file" name="file" onChange={handleInputChange} />
          <button onClick={newWorkout ? updateWorkout : saveWorkout}
          >
            {newWorkout._id ? 'Update Workout' : 'Upload Workout'}
          </button>
        </div>
        <div className="workout-list">
          {workouts.map(workout => (
            <div key={workout._id} className="workout-card">
              <h3>{workout.workoutName}</h3>
              <img src={workout.imageUrl} alt={workout.workoutName} />
              <p>{workout.description}</p>
              <p>Category: {workout.category}</p>
              <div className="button-group">
                <button onClick={() => deleteWorkout(workout._id)} className="delete-button">
                  <FaTrash /> Delete
                </button>
                <button onClick={() => editWorkout(workout._id)}>
                  <FaEdit /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
      <style jsx>{`
        .trainer-workout-page {
          font-family: Arial, sans-serif;
         margin:0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .workout-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
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

        .workout-form input[type="text"],
        .workout-form textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .workout-form textarea {
          resize: vertical;
        }

        .workout-form input[type="file"] {
          border: none;
        }

        .workout-form button {
          padding: 10px 20px;
          border: none;
          background-color: #28a745;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          align-self: flex-end;
        }

        .workout-form button:hover {
          background-color: #218838;
        }

        .workout-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .workout-card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
}

.workout-card h3 {
  margin-top: 0;
}

.workout-card .image-container {
  height: 200px; /* Set a fixed height for the image container */
  overflow: hidden; /* Hide any overflow */
  border-radius: 5px;
}

.workout-card img {
  width: 100%;
  height: 100%; /* Ensure the image maintains its aspect ratio */
  object-fit: cover;
}

.workout-card .button-group {
  margin-top: auto; /* Push the button group to the bottom */
  display: flex;
  gap: 10px;
}

.workout-card button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.workout-card button svg {
  margin-right: 5px;
}

.workout-card button:hover {
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

export default TrainerWorkout;
