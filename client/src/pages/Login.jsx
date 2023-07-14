import React, {useContext, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({ 
    email: "",
    password: "",
  });
  const [err, setErr]  = useState(null);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  // console.log(currentUser);

  const handleChange = e => {
    setInputs(
      prev => ({...prev, [e.target.name]: e.target.value})
    )
  }

  async function handelSubmit(e) {
    e.preventDefault();  
    try{
     const resppp =  await axios.post('/auth/login', inputs);
     if(resppp.status == 200){

        console.log(resppp);
        await login(resppp.data) // call login function of authContext
        navigate("/");

     }else{
      setErr(resppp.data); 
     } 
      
    }catch(erro){
      console.log(erro);
      setErr(erro.response.data);
    }
      // console.log(resppp);

    // if(!err){   navigate("/");  }  // if there is not any error then redirect to profile page  

  }

  return (
    <div className='auth'>
      <form action="#" className='card'>
        <div className="card-body">
          <h2>Login</h2>
          <div className="mb-3 mt-3 ">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" name="password"  onChange={handleChange} />
          </div>
          { err && <div className="error" style={{display:"block"}}>{ err }</div> }

          <div className=" mb-3">  If you are not registred then <Link to="/register" >Register Here</Link>  </div>
          <button type="submit" className="btn btn-primary"  onClick={handelSubmit}>Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default Login;