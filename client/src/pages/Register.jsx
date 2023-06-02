import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setInputs(
      prev => ({...prev, [e.target.name]: e.target.value})
    )
  }
  async function handelSubmit(e) {

  // const handelSubmit = async = e => {
    e.preventDefault(); 
     const res = await axios.post('/auth/register',inputs)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
 
  }

  // console.log(inputs);


  return (
    <div className='auth'>
      <form action="#" className='card'>
        <div className="card-body">
          <h2>Register</h2>
          <div class="mb-3  mt-3">
            <label for="username" class="form-label">Username:</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" onChange={handleChange} />
          </div>
          <div class="mb-3 ">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label for="pwd" class="form-label">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={handleChange} />
          </div>
          <div className="error">Some Error</div>
          <div class=" mb-3">  If you are not registred then <Link to="/register" >Register Here</Link>  </div>
          <button type="submit" class="btn btn-primary" onClick={handelSubmit}>Submit</button>
        </div>
        
      </form>
    </div>
  )
}
export default Register;