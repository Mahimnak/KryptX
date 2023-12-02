import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Register.css'
import swal from 'sweetalert';

const Register = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [usernameError, setUsernameError] = useState('');
 const [passwordError, setPasswordError] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation messages
    setUsernameError('');
    setPasswordError('');

    // Validate username
    if (username.length === 0) {
      setUsernameError('Username cannot be empty');
      return;
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError('Password must contain at least one special character');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      if (response.data.success) {
        swal("Registeration Successful!","","success");
      } else {
        swal("Registration failed","","warning");
      }
    } catch (error) {
      console.error(error);
    }
 };

 const handleClick = async (e) =>{
  window.location.href = '/';
}

 return (
    <div className='body'>
    <div className='w-full flex md:justify-center justify-between items-center p-4'>
      <form onSubmit={handleSubmit}>
      <img src="https://imgdb.net/storage/uploads/78111e9aece146c1b9dfa691b279aeab8531b5b0d43b502c8d48da9170ccd399.png" alt="Register Image" class="logo" />
  <label className='text-center'>Register</label>
  <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
  {usernameError && <p className="error-message">{usernameError}</p>}
  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  {passwordError && <p className="error-message">{passwordError}</p>}
  <button type="submit" className='rounded-sm'>Register</button>
  <p>Already have an account? <a href="/">Login</a></p>
</form>
    </div>
    </div>
 );
};

export default Register;
