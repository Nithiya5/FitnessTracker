
import { useState } from 'react'
import './App.css'
import './index.css'



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import TrainerDashboard from './TrainerDashboard';
import TraineeDashboard from './TraineeDashboard';
import Login from './Login';
import Signup from './Signup';
import AddWorkout from './Workouts'
//  import VideosPage from './video';
import Dietform from './Dietform';
import Dietlist from './Dietlist';
import TrainerPofile from './TrainerProfile';
import TraineeWorkout from './TraineeWorkout';
import TraineeVideo from './TraineeVideo';
import TraineeDiet from './TraineeDiet';
import TrainerDiet from './TrainerDiet';
import TrainerVideo from './TrainerVideo';
import TrainerWorkout from './TrainerWorkout';
const App = () => {
  return (
    <Router>
      <Switch>
    
        <Route exact path="/" component={Home} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/workouts" component={AddWorkout}/>
        <Route path="/trainer-dashboard" component={TrainerDashboard} />
        <Route path="/trainee-dashboard" component={TraineeDashboard} />
        <Route path="/Dietform" component={Dietform} />
        <Route path="/Dietlist" component={Dietlist} />
        <Route path="/trainerprofile" component={TrainerPofile} />
        <Route path="/traineeworkout" component={TraineeWorkout} />
        <Route path="/traineediet" component={TraineeDiet} />
        <Route path="/traineevideo" component={TraineeVideo} />
        <Route path="/trainerdiet" component={TrainerDiet} />
        <Route path="/trainervideo" component={TrainerVideo} />
        <Route path="/trainerworkout" component={TrainerWorkout} />
      </Switch>
    </Router>
  );
};

export default App;
