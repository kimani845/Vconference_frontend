import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";


//  Props destructured from a single object
export default function Login({ isLoggedIn, setIsLoggedIn, setToken, setName }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    
        useEffect(() => {
            if (isLoggedIn) {
                navigate("/");
                }
        }, [isLoggedIn]);
    

    const togglePasswordVisibility = () => {
    setPasswordShown((cur) => !cur);
    };

    const handleLogin= async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/Login', { email, password });

        const { token, name } = response.data;  
        localStorage.setItem('token', token);
        setToken(token); 
        setIsLoggedIn(true);
        setName(name);
        navigate('/');
    } catch (error) {
        console.error('Login failed:', error);
        setError('Invalid email or password');
    }
};

    return (
    <section className="bg-gray-500 flex h-screen items-center justify-center">

            <div className="flex h-screen items-center justify-center">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0
            dark:bg-gray-800 dark:border-gray-700 ">

        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl
                dark:text-white text-center text-[18px]">
            SignIn 
            </h1>
        <form 
        className="space-y-4 md:space-y- rounded-x1 p-8 w-full max-w-md col-md-12"
            action="POST"
        Submit={handleLogin} 
        // className="bg-white shadow-md rounded-x1 p-8 w-full max-w-md col-md-12 "
        >
        <Typography className="mb-6 text-green-600 text-center text-[18px]">
            Enter your email and password to sign in
        </Typography>

        {/* Email Field */}
        <div className="mb-2 block">
            <label htmlFor="email" className="text-sm font-medium required">
                Your Email  <span className="text-red-500">*</span>

            </label>
            <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="kimaniwangai@gmail.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500
                        focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            required
            />
        </div>

        {/* Password Field */}
        <div className="mb-2 block">
        <label htmlFor="password" 
        className="text-sm font-medium required">
                Password  
            </label>
            <div className="mt-1 relative">
            <Input
            id="Password" 
            name="password"
            type={passwordShown ? "text" : "password"}
            autoComplete='current-password'
            placeholder="Enter Your Passcode" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur("password")}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600
                        focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            />
        </div>
        
          {/*  Password toggle button  */}
            <button
            type="button"
            className="absolute top-6 right-0 pr-3 flex items-center cursor-pointer justify-center"
            onClick={togglePasswordVisibility}
            >
            {passwordShown ? (
                <EyeSlashIcon className="w-6 h-7" />
            ) : (
                <EyeIcon className="w-6 h-7" />
            )}
            </button>
        </div>

        {/* Submit Button */}
        <Button type="submit" color="gray" size="lg" fullWidth className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            Sign In
        </Button>

        {/* Forgot Password */}
        <Link to ="/ForgotPassword"
                className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                Forgot Password
                </Link>

        {/* Google Sign In */}
        <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex items-center justify-center gap-2"
            fullWidth
        >
            <img
            src="https://www.material-tailwind.com/logos/logo-google.png"
            alt="google"
            className="h-6 w-6"
            />
            Sign in with Google
        </Button>

        {/* Signup Link */}
        <Typography variant="small" color="gray" className="mt-4 text-center">
            Not registered?{" "}
            <Link to="/Register" className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
            Create account
            </Link>
        </Typography>

        {/* Error Message */}
        {error && (
            <Typography variant="small" color="red" className="mt-4 text-center">
            {error}
            </Typography>
        )}
            </form>
        </div>
    </div>
    </div>
    </section>

    );
}
