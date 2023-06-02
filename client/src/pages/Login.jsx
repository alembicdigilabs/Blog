import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
      <form action="#" className='card'>
        <div className="card-body">
          <h2>Login</h2>
          <div class="mb-3 mt-3 ">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div class="mb-3">
            <label for="pwd" class="form-label">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
          </div>
          <div className="error">Some Error</div>
          <div class=" mb-3">  If you are not registred then <Link to="/register" >Register Here</Link>  </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        
      </form>
    </div>
  )
}
export default Login;