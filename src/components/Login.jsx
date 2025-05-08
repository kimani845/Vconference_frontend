import React, {useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', email , password);
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            navigate('/home');
        }catch (error){
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form elements for email and password */}

        </form>
    );
}

export default Login;


