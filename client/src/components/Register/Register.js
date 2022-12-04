import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
  const [teamData, setteamData] = useState({
    name: '',
    city: '',
    players: '',
    playersConfirm: ''
  });

  const { name, city, players, playersConfirm } = teamData;

  const onChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const register = async () => {
    if (players !== playersConfirm) {
      console.log('Players numbers do not match');
    }
    else {
      const newUser = {
        name: name,
        city: city,
        players: players
      }

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const body = JSON.stringify(newUser);
        const res = await axios.post('http://localhost:5000/api/users', body, config);
        console.log(res.data);
      } catch (error) {
        console.error(error.response.data);
        return;
      }
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <div>
        <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          value={name} 
          onChange={e => onChange(e)} />
      </div>
      <div>
        <input 
          type="text" 
          placeholder="City" 
          name="city" 
          value={city} 
          onChange={e => onChange(e)} />
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Players" 
          name="players" 
          value={players} 
          onChange={e => onChange(e)} />
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Confirm number of players" 
          name="playersConfirm" 
          value={playersConfirm} 
          onChange={e => onChange(e)} />
      </div>
      <div>
        <button onClick={() => register()}>Register</button> 
      </div>
    </div>
  )
}

export default Register