import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../assets/css/Login.css'
import swal from 'sweetalert';
import {useNavigate , redirect} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post('http://localhost:5000/login', { username, password } , {
        headers : {
           "Content-Type" : "application/json"
        },
        withCredentials: true
       });
       const data = await response.data;

       if (response.data?.success) {
          // window.location.href = '/Home';
          localStorage.setItem("token", data?.token)
          navigate("/Home",{
            replace: true,
          });
          // return redirect("/Home")
       } else {
         swal("Login failed","","error");
       }
     } catch (error) {
       console.error(error);
     }
  };

  return (
    <div className='body'>
    <div className='w-full flex md:justify-center justify-between items-center p-4'>
      <form onSubmit={handleSubmit} className="justify-center items-stretch" >
        <img src="https://imgdb.net/storage/uploads/78111e9aece146c1b9dfa691b279aeab8531b5b0d43b502c8d48da9170ccd399.png" alt="Login Image" class="logo" />
        <label className='text-center'>Login</label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='rounded-sm'>Login</button>
        <p>Don't have an account? <a href="/register">Sign Up!</a></p>
      </form>
    </div>
    </div> 
 );
};

export default Login;
