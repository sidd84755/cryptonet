import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  const { first, last } = userData.name;
  const phoneNumber = userData.phone;
  const profilePhoto = userData.picture.large;
  const gender = userData.gender;

  return (
    <div className="App">
      <div class="card">
    <div class="img">
      <img src={profilePhoto}/>
    </div>
    <div class="infos">
      <div class="name">
        <h2>{first} {last}</h2>
        <h4>{phoneNumber}</h4>
        <h4>{gender}</h4>
      </div>
      <p class="text">
        I'm a Full Stack Developer, follow me to be the first 
        who see my new work.
      </p>
      
      <div class="links">
        <a href="https://callmesid.in/" target="_blank" rel="noopener noreferrer">
          <button class="follow" >Follow</button>
        </a>
      </div>
    </div>
  </div>
    </div>
    
  );
}

export default App;
