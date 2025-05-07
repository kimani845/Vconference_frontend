import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppNavbar from './AppNavbar';
import { useNavigate } from 'react-router-dom';

const Home = ({isLoggedIn, setIsLoggedIn, name, email }) =>{
    const [user, setUser] = useState({}); // Holds user data
    const [isLoaded, setIsLoaded] = useState(false); // check is the user is loaded
    let navigate = useNavigate(); // This is the navigation Hook


    // Get user Data on the component mount
    useEffect (() =>{
        const getUserData = async () =>{
            if (!isLoggedIn){
                navigate ('/login'); // if a user is not logged in, they are directed to the login page
                return

            }
            //fetch user data
            try {
                const response = await axios.get('/api/user')
                .then ((response) =>{
                    setUser(response.data); // sets user data
                    setIsLoaded(true);

                })                
                } catch (error) {
                    console.error(error);
                    } finally {
                        setIsLoaded(true);
                        }
                        
            }
        });
    }