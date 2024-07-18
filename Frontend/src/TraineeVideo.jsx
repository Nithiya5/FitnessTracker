import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import TraineeNavbar from './TraineeNavbar';

const TraineeVideo = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [likedVideos, setLikedVideos] = useState([]);
  const [followingTrainers, setFollowingTrainers] = useState([]);
  


  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://fitnessbackend-10wn.onrender.com/getVideos');
      setVideos(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError('Failed to fetch videos');
      setLoading(false);
    }
  };

  const handleLike = (videoId) => {
    setLikedVideos((prevLikedVideos) =>
      prevLikedVideos.includes(videoId)
        ? prevLikedVideos.filter((id) => id !== videoId)
        : [...prevLikedVideos, videoId]
    );
  };

  const handleFollow = async (trainerId) => {
    try {
      await axios.post('https://fitnessbackend-10wn.onrender.com/followTrainer', { traineeId: 'traineeId', trainerId });
      setFollowingTrainers([...followingTrainers, trainerId]);
    } catch (err) {
      console.error('Error following trainer:', err);
    }
  };

  const handleUnfollow = async (trainerId) => {
    try {
      await axios.delete('https://fitnessbackend-10wn.onrender.com/unfollowTrainer', {
        data: { traineeId: 'traineeId', trainerId },
      });
      setFollowingTrainers(followingTrainers.filter((id) => id !== trainerId));
    } catch (err) {
      console.error('Error unfollowing trainer:', err);
    }
  };

  return (
    <div className="videos-page">
      <TraineeNavbar/>
      <div className="container">
        <h1>Videos</h1>
        {loading && <p>Loading videos...</p>}
        {error && <p>{error}</p>}
        
        <div className="videos-list">
          {Array.isArray(videos) && videos.map((video) => (
            <div key={video._id} className="video-card">
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-info">
                <h2>{video.title}</h2>
                {/* {video.uploader ? (
                  <>
                    <p><strong>Uploaded by:</strong> {video.uploader.name}</p>
                    <div className="actions">
                      <button onClick={() => handleLike(video._id)}>
                        {likedVideos.includes(video._id) ? <FaThumbsDown /> : <FaThumbsUp />} Like
                      </button>
                      {followingTrainers.includes(video.uploader._id) ? (
                        <button onClick={() => handleUnfollow(video.uploader._id)}>Unfollow</button>
                      ) : (
                        <button onClick={() => handleFollow(video.uploader._id)}>Follow</button>
                      )}
                    </div>
                  </>
                ) : (
                  <p><strong>Uploaded by:</strong> Unknown</p>
                )
                } */}
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .videos-page {
          font-family: 'Arial, sans-serif';
          width: 100%;
          margin: 0 ;
          
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
          align-items: center;
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
        }
        .videos-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .video-card {
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
        .video-card video {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .video-info {
          padding: 15px;
          flex: 1;
        }
        .video-info h2 {
          margin: 0 0 10px;
          font-size: 20px;
        }
        .video-info p {
          margin: 5px 0;
          font-size: 16px;
          color: #555;
        }
        .actions {
          margin-top: 10px;
        }
        .actions button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          margin-right: 10px;
          border-radius: 5px;
          cursor: pointer;
        }
        .actions button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default TraineeVideo;

