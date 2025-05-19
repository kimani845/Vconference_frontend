// ForgotPassword
// import React from 'react';
// import { useEffect } from 'react';
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // make sure you've installed react-toastify
import 'react-toastify/dist/ReactToastify.css'; // default style



const ForgotPassword = (props) => {
    const API_BASE = import.meta.env.VITE_BACKEND_URL;
    const { email, setEmail } = props;
    const navigate = useNavigate();

    const handleForgotPassword = async (ev) => {
        ev.preventDefault();
        const email = ev.target.email.value;

        const formData = { email };

        try {
            const response = await axios.post(`${API_BASE}/api/forgotPassword`, formData);
            const data = response.data;

            if (data.success === true) {
                toast.success(data.message);
                // setIsLoggedIn(true);
                setEmail(data.email); // set email in state. But this is optional but redudant
                navigate("/ResetPassword");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(" Email verification error:", error);
            toast.error("Something went wrong. Try again.");
        }
    };

    return (
    <div className="flex h-screen items-center justify-center">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0
            dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl
                dark:text-white text-center text-[18px]">
            Create an account
            </h1>
      {/* Forgot password form content */}
    <form   className="space-y-4 md:space-y- rounded-x1 p-8 w-full max-w-md col-md-12"
            action="POST"
            onSubmit={handleForgotPassword}
        >
        
            <div className="mb-2 block">
                <label htmlFor="email" className="text-sm font-medium required">
                    Enter the email you registered with 
                </label>
                <Input
                label="Email"
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
            </form>
            </div>
        </div>
    
        </div>
    
    )
};



export default ForgotPassword;


