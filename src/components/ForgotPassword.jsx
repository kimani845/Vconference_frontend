// ForgotPassword
import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // make sure you've installed react-toastify
import 'react-toastify/dist/ReactToastify.css'; // default style
// import {  Input } from "@material-tailwind/react";

// Handling the Forgot password logic

const ForgotPassword = (props) => {
    const API_BASE = import.meta.env.VITE_BACKEND_URL;
    const { email, setEmail } = props;
    const navigate = useNavigate();
    const [linkSent, setLinkSent ] = useState(false); //state to show configuration message

    const handleForgotPassword = async (ev) => {
        ev.preventDefault();
        const email = ev.target.email.value;

        const formData = { email };

        try {
            const response = await axios.post(`${API_BASE}/api/forgotPassword`, formData);
            const data = response.data;

            if (data.success === true) {
                toast.success(data.message);
                setEmail(data.email); // set email in state. But this is optional but redudant
                setLinkSent(true); // shows confirmation message
                setTimeout(()=>navigate("/ResetPassword"),2000 ); // a small delay before redirect
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(" Email verification error:", error);
            toast.error("Something went wrong. Try again.");
        }
    };

    return (
    <section className="bg-gray-100 flex h-screen items-center justify-center min-h-screen px-4">

    <div className="w-full max-w-xl bg-white rounded-xl shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        {/* <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0
            dark:bg-gray-800 dark:border-gray-700 "> */}
        <div className="p-10 space-y-6">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-center text-gray-900 dark:text-white">
            Reset Password
            </h1>
      {/* Forgot password form content */}
    <form   className="space-y-6"
            // action="POST"
            onSubmit={handleForgotPassword}
        >
        
            <div className="mb-2">
                <label 
                htmlFor="email" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    
                    Enter the email you registered with 
                </label>
                <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kimaniwangai@gmail.com"
                className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500
                            focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                required
                crossOrigin="" // suppresses warning
                />
            </div>

            {linkSent && (
                <p className = "text-green-600 text-sm font-medium">

                    A reset link has been sent to the email you registered with
                </p>
            )
            
            }
                <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
                        >
                            Send Reset Link
                </button>
            </form>
            </div>
        </div>
    
        {/* </div> */}
    </section>
    
    );
};

export default ForgotPassword;


