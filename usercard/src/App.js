import React from "react";
import User from './components/User';
import Follower from './components/Follower';


import "./App.css";



function App() {
  return (
    <div className="App">
      <h1>GitHub User and Followers</h1>
      <User />
      <button onClick={Follower}>Fetch Followers</button>
    </div>
  )
}

export default App;
