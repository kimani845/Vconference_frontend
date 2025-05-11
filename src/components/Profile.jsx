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
            <div className ="profile">
                <p className ="userInfo" id ="userInfo1">
                    Name : {user.name}</p>
                <p className ="userInfo" id = "userInfo2">
                    Name: {name2}</p>
                <p className= "userInfo" id = "userInfo3">
                    setName: {setName}</p>
                <p className = "userInfo" id = "userEmail">
                    Email: {email}</p>
                <p className = "userName" id = "userEmail2">
                    SetEmail: {setEmail}</p>
                <p className = "userInfo" id ="userPassword">
                    Password0: {password}</p>
                <p className ="userInfo" id = "userToken">
                    Token: {token}</p>
                <p className="userInfo" id ="userToken">
                    SetToken: {setToken}</p>

            </div>
        </>
    );
    };

export default Profile; 
