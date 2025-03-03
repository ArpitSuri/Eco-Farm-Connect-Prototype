import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginAdmin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/auth/login-admin`, { email, password });
        localStorage.setItem('token', data.token);
        navigate('/admin-dashboard'); // Redirect to dashboard or home page
      } catch (err) {
        setError(err.response?.data?.message || 'Something went wrong. Please try again.');
      }
    };
  
    return (
      <div className="mx-auto max-w-screen-xl h-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Login to your admin account</h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">Use your credentials to log in.</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin} className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Sign in to your account</p>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">Sign in</button>
          </form>
        </div>
      </div>
    );
  };

export default LoginAdmin
