// Profile
import React from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from './AuthContext';

const Profile = ({ name, setName, email, setEmail, password, token, setToken }) => {
    const user = useAuth();
    // const [showPassword, setShowPassword] = React.useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    return (
        <>
            <div>
                <h1>Profile Page</h1>
                <p>Name: {name}</p>
                <p>setName: {setName}</p>
                <p>Email: {email}</p>
                <p>SetEmail: {setEmail}</p>
                <p>Password0: {password}</p>
                <p>Token: {token}</p>
                <p>SetToken: {setToken}</p>

            </div>
        </>
    );
    };

export default Profile; 
