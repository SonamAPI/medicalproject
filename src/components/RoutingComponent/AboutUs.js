import { useNavigate } from 'react-router-dom'
import React from 'react'
const AboutUs = () => {
  const navigate=useNavigate();
  return (
    <div>
      About Us<br>
      </br>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  )
}
export default AboutUs