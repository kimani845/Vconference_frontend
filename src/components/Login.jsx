import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

// ✅ Props should be destructured from a single object
export default function Login({ setIsLoggedIn, setTooken, setName }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
    setPasswordShown((cur) => !cur);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/login', { email, password });

        const { token, name } = response.data;  
        localStorage.setItem('token', token);
        setTooken(token); // ✅ You had setToken — this should match the prop
        setIsLoggedIn(true);
        setName(name);
        navigate('/');
    } catch (error) {
        console.error('Login failed:', error);
        setError('Invalid email or password');
    }
};

    return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-8 w-full max-w-md">
        <Typography variant="h3" color="blue-gray" className="mb-2 text-center">
            Sign In
        </Typography>
        <Typography className="mb-6 text-gray-600 text-center text-[18px]">
            Enter your email and password to sign in
        </Typography>

        {/* Email Field */}
        <div className="mb-6">
            <label htmlFor="email">
            <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Your Email
            </Typography>
            </label>
            <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
            required
            />
        </div>

        {/* Password Field */}
        <div className="mb-6 relative">
            <label htmlFor="password">
            <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Password
            </Typography>
            </label>
            <Input
            label="Password"
            id="password"
            type={passwordShown ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            />
          {/* ✅ Password toggle button placed outside Input */}
            <button
            type="button"
            className="absolute right-3 top-11 text-gray-500"
            onClick={togglePasswordVisibility}
            >
            {passwordShown ? (
                <EyeSlashIcon className="w-5 h-5" />
            ) : (
                <EyeIcon className="w-5 h-5" />
            )}
            </button>
        </div>

        {/* Submit Button */}
        <Button type="submit" color="gray" size="lg" fullWidth className="mt-6">
            Sign In
        </Button>

        {/* Forgot Password */}
        <div className="mt-4 flex justify-end">
            <Typography as="a" href="#" variant="small" className="font-medium text-blue-gray-700">
            Forgot password?
            </Typography>
        </div>

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
            <Link to="/signup" className="font-medium text-gray-900">
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
    </section>
    );
}
