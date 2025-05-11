import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar'; // adjust the path as necessary

const Home = ({isLoggedIn, setIsLoggedIn, name, email, setName, setEmail }) =>{
    const [user, setUser] = useState({}); // Holds user data
    const [isLoaded, setIsLoaded] = useState(false); // check is the user is loaded
    let navigate = useNavigate(); // This is the navigation Hook


    // Get user Data on the component mount
    useEffect (() =>{
            if (!isLoggedIn){
                navigate ('/Login'); // if a user is not logged in, they are directed to the login page
                return;

            }
            //fetch user data
                axios.get('/api/user')
                .then ((response) =>{
                    setUser(response.data); // sets user data
                    setIsLoaded(true);

                })  
                .catch ((error) => {
                    console.error('There was an error while fetching your user data', error);
                    setIsLoaded(true); // incase of an error, still mark as loaded     
                }); 
                
             }, [isLoggedIn, navigate]); // re-run the effect if the user logs in or out

            return (
                <div>
                    <AppNavbar
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName ={setName}
                    email={email}
                    setEmail={setEmail}
                                        
                    />

                    <div className="container" mx='auto' p-4>
                        <h1 className = "text-2x1  font-bold mb-4"> Welcome to Tmeet App</h1>

                        {!isLoaded ?(
                            <p> Loading User Data...</p> // if the user data is not loaded, display a loading message
                        ):(
                            user.name?(
                                <div>
                                    <p> Welcome, {user.name}!</p>
                                    <p> {user.email}</p>
                                    </div>
                            ):(
                                <p> User could not be loaded</p> // Error handling if data doesn't exist
                            )
                        )}
                        <div className = "mt-4">
                            <Link to = "/create-meeting" className = "bg-blue-500 text-white px-4 px-2 rounded">
                            Create meeting
                            </Link>

                        </div>
                        
                    </div>
                </div>

            

);
            
};

export default Home;