
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import TrainerNavbar from './TrainerNavbar';
import { FaTrash } from 'react-icons/fa';

const TrainerVideo = () => {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  // const [editingVideo, setEditingVideo] = useState(null); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trainerId = queryParams.get('trainerId');

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      if (!trainerId) {
        toast.error('Trainer ID is missing');
        return;
      }
      const response = await axios.get(`https://fitnessbackend-1-qegx.onrender.com/trainer-videos?trainerId=${trainerId}`);
      setVideos(response.data);
      // toast.success('Videos fetched successfully');
    } catch (err) {
      console.error('Error fetching videos:', err);
      toast.error('No videos found for this trainer');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'caption') {
      setCaption(value);
    } else if (name === 'file') {
      setFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!trainerId) {
      toast.error('Trainer ID not found');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('caption', caption);
      formData.append('video', file);
      formData.append('trainerId', trainerId);

      const response = await axios.post(`https://fitnessbackend-1-qegx.onrender.com/uploadVideo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setVideos([...videos, data]);
        toast.success('Video uploaded successfully');
      } else {
        toast.error('Failed to upload video');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.data);
        toast.error(`Failed to upload video: ${error.response.data.error}`);
      } else {
        toast.error('Failed to upload video');
      }
    }
  };

  const handleDelete = async (videoId) => {
    try {
      await axios.delete(`https://fitnessbackend-1-qegx.onrender.com/deleteVideo/${videoId}`);
      setVideos(videos.filter((video) => video._id !== videoId));
      toast.success('Video deleted successfully');
    } catch (error) {
      console.error('Error deleting video:', error);
      toast.error('Failed to delete video');
    }
  };

  return (
    <div className="trainer-video-page">
      <TrainerNavbar />
      <div className="container">
        <h1>Upload Video</h1>
        {error && <p>{error}</p>}
        <div className="form-container">
          <div className="video-form">
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Video Title"
            />
            <input
              type="text"
              name="caption"
              value={caption}
              onChange={handleInputChange}
              placeholder="Video Caption"
            />
            <input
              type="file"
              name="file"
              onChange={handleInputChange}
            />
            <button onClick={handleUpload}>Upload Video</button>
          </div>
        </div>
        <div className="video-list">
          {Array.isArray(videos) && videos.map((video) => (
            <div key={video._id} className="video-card">
              <h3>{video.title}</h3>
              <p>{video.caption}</p>
              <video controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button onClick={() => handleDelete(video._id)}className="delete-button"><FaTrash /> Delete</button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
      <style>{`
        .trainer-video-page {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          margin: 0 ;
          width: 100%;
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
        .container {
          padding: 20px;
        }
        .form-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .video-form {
          width: 50%; /* Adjust width as needed */
          max-width: 400px; /* Adjust max-width as needed */
        }
        .video-form input, .video-form button {
          display: block;
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .video-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .video-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: calc(33.333% - 20px);
          margin-bottom: 20px;
        }
        .video-card h3 {
          margin-top: 0;
        }
        .video-card p {
          font-size: 14px;
          color: #666;
        }
        .video-card video {
          width: 100%;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .video-card button {
          padding: 10px 15px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          margin-right: 5px;
          display: flex;
          align-items: center;
        }
        .video-card button svg {
          margin-right: 5px;
        }
        .video-card button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default TrainerVideo;

