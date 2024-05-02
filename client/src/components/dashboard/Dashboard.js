import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Welcome from './Welcome';
import Dataset from './Dataset';
const Dashboard = () => {
  const [image, setImage] = useState(null)

  const handleImageChange = (event) => {
    setImage(event.target.files[0])
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // Process the image here
  }
  return (
    <div>
      <Welcome />
      <Dataset />
    <form onSubmit={handleFormSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Dashboard;
