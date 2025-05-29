// Profile
import React from 'react';
import { Link } from 'react-router-dom';
// import {useAuth} from './AuthContext';
// import { useAuth0 } from '@auth0/auth0-react';

const Profile = ({ name, setName, email, setEmail, password, token, setToken }) => {
    const user = useAuth();
    // const [showPassword, setShowPassword] = React.useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    return (
     // pages/Home.js

    <div>
        <h2 className="font-bold my-5 text-xl text-center">This is simple home page. Customize as per your usecase</h2>
    </div>
    );
};




export default Profile; 
