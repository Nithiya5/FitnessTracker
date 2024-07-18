import React, { useState, useEffect } from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';

function NavBar2() {
  const [userId, setUserId] = useState('');
  const [trainerId, setTrainerId] = useState('');
  const { userId: userIdParam, trainerId: trainerIdParam } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (userIdParam) {
      localStorage.setItem('userId', userIdParam);
      setUserId(userIdParam);
    } else {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }
    if (trainerIdParam) {
      setTrainerId(trainerIdParam);
    }
  }, [userIdParam, trainerIdParam]);

  const logout = () => {
    localStorage.removeItem('userId');
    setUserId('');
    history('/');
  };

  const styles = {
    navBar: {
      backgroundColor: '#000026',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    navList: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    },
    navItem: {
      fontSize: '1.25rem',
      color: 'white',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      position: 'relative'
    },
    brand: {
      fontSize: '1.5rem',
      color: 'white',
      textDecoration: 'none',
      fontStyle: 'italic'
    },
    button: {
      fontSize: '1.25rem',
      color: 'white',
      background: 'none',
      border: 'none',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center'
    }
  };

  return (
    <nav style={styles.navBar}>
      <Link to={`/home?userId=${userId}&trainerId=${trainerId}`} style={styles.brand}>
        Fitness Trainer
      </Link>
      <ul style={styles.navList}>
        <li>
          <Link to={`/home?userId=${userId}&trainerId=${trainerId}`} style={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to={`/videos?userId=${userId}&trainerId=${trainerId}`} style={styles.navItem}>
            Videos
          </Link>
        </li>
        <li>
          <Link to={`/workouts?userId=${userId}&trainerId=${trainerId}`} style={styles.navItem}>
            Workouts
          </Link>
        </li>
        <li>
          <Link to={`/diet?userId=${userId}&trainerId=${trainerId}`} style={styles.navItem}>
            Diet
          </Link>
        </li>
        <li>
          <button style={styles.button} onClick={logout}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar2;
