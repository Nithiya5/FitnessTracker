

import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#trainees">For Trainees</a></li>
          <li><a href="#trainers">For Trainers</a></li>
          <li className="login-btn"><a href="/login">Login</a></li>
        </ul>
      </nav>
      <div className="content-wrapper">
        <header className="hero-section">
          <h1>Welcome to FitLife</h1>
          <p>Your ultimate destination for fitness and wellness</p>
        </header>
        <section id="about" className="section">
          <div className="text-content">
            <h2>About Us</h2>
            <p>FitLife is dedicated to helping you achieve your fitness goals through personalized workout plans, diet plans, and expert guidance. Whether you are a trainee looking to improve your fitness or a trainer aiming to enhance your business, FitLife has got you covered.</p>
          </div>
          <div className="image-content">
            <img src="https://images.unsplash.com/photo-1487956382158-bb926046304a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFib3V0JTIwZml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D" alt="About Us" />
          </div>
        </section>
        <section id="features" className="section">
          <div className="text-content">
            <h2>Features</h2>
            <div className="feature">
              <h3>Personalized Workout Plans</h3>
              <p>Get workout plans tailored to your fitness level and goals.</p>
            </div>
            <div className="feature">
              <h3>Customized Diet Plans</h3>
              <p>Receive diet plans that complement your workout routines.</p>
            </div>
            <div className="feature">
              <h3>Expert Guidance</h3>
              <p>Learn from the best trainers and nutritionists in the industry.</p>
            </div>
          </div>
          <div className="image-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUMn9PJkfzAk5MyAksXq3EtE4mZhxEFP9VA&s" alt="Features" />
          </div>
        </section>
        <section id="trainees" className="section">
          <div className="text-content">
            <h2>For Trainees</h2>
            <p>As a trainee, you'll get access to personalized workout and diet plans, track your progress, and stay motivated with expert guidance and community support.</p>
          </div>
          <div className="image-content">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D" alt="For Trainees" />
          </div>
        </section>
        <section id="trainers" className="section">
          <div className="text-content">
            <h2>For Trainers</h2>
            <p>As a trainer, you can create and manage workout and diet plans, track your trainees' progress, and grow your fitness business with our platform's powerful tools.</p>
          </div>
          <div className="image-content">
            <img src="https://plus.unsplash.com/premium_photo-1661284998331-56c7d22c0dc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpdG5lc3MlMjB0cmFpbmVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="For Trainers" />
          </div>
        </section>
      </div>
      <style>{`
        .home-page {
          font-family: 'Arial, sans-serif';
        }
        .navbar {
          background-color: #333;
          padding: 20px;
          font-size: 20px;
        }
        .navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar li {
          margin-right: 20px;
        }
        .navbar a {
          color: white;
          text-decoration: none;
          padding: 15px 20px;
          display: block;
          font-size: 20px;
        }
        .navbar a:hover {
          background-color: #555;
        }
        .navbar .login-btn {
          margin-left: auto;
        }
        .content-wrapper {
          padding: 40px;
        }
        .hero-section {
          text-align: center;
          padding: 80px 20px;
          background-color: #f4f4f4;
          font-size: 24px;
        }
        .hero-section h1 {
          font-size: 40px;
          margin-bottom: 20px;
        }
        .section {
          display: flex;
          align-items: center;
          margin: 60px 0;
          padding: 40px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .section:nth-child(even) {
          flex-direction: row-reverse;
        }
        .text-content {
          flex: 1;
          padding-right: 30px;
          font-size: 22px;
        }
        .image-content {
          flex: 1;
          text-align: center;
        }
        .image-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .feature {
          margin: 20px 0;
        }
        .feature h3 {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;
