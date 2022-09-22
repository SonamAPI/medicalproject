import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate=useNavigate();

  return (
    <div>
      Home Page<br></br>
      <button onClick={()=>navigate("/about")}>Go to About us on button click</button>
    </div>
  )
}
export default  HomePage