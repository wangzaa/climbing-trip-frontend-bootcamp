import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';


const Create = () => {
  const [route, setRoute] = useState('');
  const [companion, setCompanion] = useState('');
  const [preference, setPreference] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = { route, companion, preference };

     axios.post('https://ap-southeast-1.aws.data.mongodb-api.com/app/climbing-app-vbozf/endpoint/add_trip', newTrip)
            .then(res => console.log(res.data))
            .then(() => {
            // history.go(-1);
            history.push('/trip');
    })
  }

  return (
    <div className="create">
      <h2>Add New Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>Route Name:</label>
        <input 
          type="text" 
          required 
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        />
        <label>Companion(s):</label>
        <input 
          type="text" 
          required 
          value={companion}
          onChange={(e) => setCompanion(e.target.value)}
        />
        <label>Preference:</label>
        <select
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>Add Trip</button>
      </form>
    </div>
  );
}
 
export default Create;