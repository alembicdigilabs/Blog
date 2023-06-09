import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr]  = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(
      prev => ({...prev, [e.target.name]: e.target.value})
    )
  }

  async function handelSubmit(e) {
    
     
    e.preventDefault(); 

    //  const res = await axios.post('/auth/register',inputs)
    // .then(function (response) {
    //   console.log(response);
    //   navigate("/login");
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   setErr(error.response.data);
    // });

    // if(!err){  alert("user created");  }

    try{
     const respp =  await axios.post('auth/register', inputs);
      console.log(respp); 
        navigate("/login");  
    }catch(erro){
      console.log(erro);
      setErr(erro.response.data);
    }

    // if(!err){   navigate("/login");  }  // if there is not any error then redirect to login page 


  }

  // console.log(inputs);


  return (
    <div className='auth'>
      <form action="#" className='card'>
        <div className="card-body">
          <h2>Register</h2>
          <div className="mb-3  mt-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={handleChange} />
          </div>
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={handleChange} />
          </div>
          {/* <div className="error" style={{display:"block"}}>{  }</div> */}
          { err && <div className="error" style={{display:"block"}}>{ err }</div> }
          {/* <div className=" mb-3">  If you are not registred then <Link to="/register" >Register Here</Link>  </div> */}
          <button type="submit" className="btn btn-primary" onClick={handelSubmit}>Submit</button>
        </div>
        
      </form>
    </div>
  )
}
export default Register;