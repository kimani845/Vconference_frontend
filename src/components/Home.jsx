import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppNavbar from './AppNavbar';
import { useNavigate } from 'react-router-dom';

const Home = ({isLoggedIn, setIsLoggedIn, name, email }) =>{
    const [user, setUser] = useState({});
    let navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    //  Get user data from API
    useEffect(() =>{
        axios.get('http://localhost:3001/api/user')
        .then(response =>{
            setUser(response.data);
            setIsLoaded(true);
        )
        }
    }


}