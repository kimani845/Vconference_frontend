import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { ToastContainer } from 'react-toastify'; //  using react-toastify
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'; 


const App = () => {
    const[IsLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    return (
        <div className = "md:h-screen bg-purple-100">
            <Router>
            <ToastContainer/>
                <Navbar
                IsLoggedIn = {IsLoggedIn} 
                setIsLoggedIn = {setIsLoggedIn} 
                name = {name} 
                setName = {setName}
                email = {email} 
                setEmail = {setEmail} 
                token = {token} 
                setToken = {setToken}
                />

                <Routes>

                    <Route path = "/"element = {
                        <Home 
                            isLoggedIn = {IsLoggedIn}
                            setIsLoggedIn = {setIsLoggedIn}
                    />
                    }/>
                        
                    <Route path = "/register" element = {
                        <Register
                        IsLoggedIn = {IsLoggedIn} 
                        setIsLoggedIn = {setIsLoggedIn} 
                        setName = {setName} 
                        setEmail = {setEmail} 
                        setPassword = {setPassword} 
                        setToken = {setToken}/>
                        
                        }/>
            
                    <Route path = "/login" element = {
                        <Login 
                        IsLoggedIn = {IsLoggedIn}
                        setIsLoggedIn = {setIsLoggedIn} 
                        setName = {setName} 
                        setEmail = {setEmail} 
                        setPassword = {setPassword}
                        setToken = {setToken}/>
                    }/>

                    <Route path ="/ forgotPassword" element = {
                        <ForgotPassword
                        setEmail = {setEmail}
                        setPassword = {setPassword}
                        setToken = {setToken}
                        isLoggedIn = {IsLoggedIn}
                        
                        />
                    }/>

                    <Route path = "/resetPassword" element = {
                        <ResetPassword
                        setPassword = {setPassword}
                        setToken = {setToken}
                        />
                    }/> 

                    <Route path = "/profile" element = {
                        <Profile 
                        name = {name} 
                        email = {email} 
                        password = {password} 
                        token = {token} 
                        setToken = {setToken}/>

                    }/>
            
                </Routes>
        </Router>

        </div>
    );
};

export default App;