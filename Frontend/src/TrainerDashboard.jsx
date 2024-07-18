import React from 'react';
import { useHistory,useLocation} from 'react-router-dom';
import TrainerNavbar from './TrainerNavbar';

const TrainerDashboard = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const trainerId = searchParams.get('trainerId');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    history.push('/login');
  };

  return (
    <div className="trainer-page">
      <TrainerNavbar/>
      <div className="container">
        <div className="section">
          <img src="https://www.shape.com/thmb/NSW-f161Krg8stIWMdHm4TKU-B4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fb-best-youtube-workout-videos-f2df5e799bfd4df9a2be72859ba7c153.jpg" alt="Videos" />
          <div className="section-content">
            <h2>Videos</h2>
            <p>As a trainer, you play a crucial role in creating and uploading instructional videos. These videos help trainees understand the correct form and technique for various exercises, ensuring they perform workouts safely and effectively.</p>
          </div>
        </div>
        <div className="section">
          <img src="https://prod-ne-cdn-media.puregym.com/media/822906/hiit-workouts-for-men_blogheader-no-title.jpg?quality=80&width=992" alt="Workouts" />
          <div className="section-content">
            <h2>Workouts</h2>
            <p>Trainers are responsible for designing comprehensive workout plans that cater to different fitness levels. Your expertise helps trainees achieve their fitness goals, whether it’s building muscle, losing weight, or improving overall health.</p>
          </div>
        </div>
        <div className="section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw97yH_DsJIWEAFYLy0a6erEQb4n_C3gRNOw&s" alt="Diet Plan" />
          <div className="section-content">
            <h2>Diet Plans</h2>
            <p>Creating balanced diet plans is another essential role of a trainer. These plans provide trainees with nutritious meal options that complement their workout routines, helping them maintain a healthy lifestyle and achieve their fitness objectives.</p>
          </div>
        </div>
      </div>
      <style>{`
        .trainer-page {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
          width: 100%;
          box-sizing: border-box;
        }
        .navbar {
          background-color: #333;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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
        .navbar li:last-child {
          margin-right: 0;
        }
        .navbar a, .navbar button {
          color: #fff;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          padding: 5px 15px;
          transition: background 0.3s;
        }
        .navbar a:hover, .navbar button:hover {
          background-color: #555;
          border-radius: 5px;
        }
        .logout-btn {
          margin-left: auto;
        }
        .container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
        }
        .section {
          display: flex;
          align-items: center;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          box-sizing: border-box;
        }
        .section img {
          margin-right: 20px;
          width: 500px;
          height: 300px;
          border-radius: 10px;
          object-fit: cover;
        }
        .section-content {
          flex: 1;
        }
        .section-content h2 {
          margin: 0 0 10px;
          font-size: 24px;
        }
        .section-content p {
          margin: 0;
          font-size: 18px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default TrainerDashboard;
