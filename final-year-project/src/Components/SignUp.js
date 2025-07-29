import React, { useState } from 'react';
import hexImage from '../assets/hexagon.png';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const AUTH_URL=process.env.REACT_APP_AUTH_URL


  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${AUTH_URL}/signup`, {
        name: username,
        email,
        password,
      },
     { withCredentials: true });

      const data = response.data;
      setLoading(false);

      if (data.successMessage) {
        alert(data.successMessage);
        setMessage(data.successMessage);
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else if (data.errorMessage) {
        alert(data.errorMessage);
        setMessage(data.errorMessage);
      }
    } catch (error) {
      setLoading(false);
      setMessage('An error occurred. Please try again.');
      alert(message);
    }

    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#edeecb]">
      
      {/* Hexagon Image OUTSIDE the form container */}
      {/* <div className="w-full flex justify-center mt-6 ">
        <img src={hexImage} alt="Hexagon" className="h-48 object-contain " />
      </div> */}

      {/* Sign-Up Form Container */}
      <div className="bg-[#edeecb] p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        <form onSubmit={handleSignUp} className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-[#652d0e]">SIGN UP</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#652d0e] text-white py-2 rounded-md hover:bg-[#652d0ecc]"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg text-orange-500">
          Already have an account?{' '}
          <a href="/login" className="text-orange-500 ">
            LOGIN
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
