import { useState } from 'react'
// import ReactDOM from "react-dom/client";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { ToastContainer } from 'react-toastify'; //  using react-toastify
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'; 


const App = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

// export default App(){

    return (
        <div className = "md:h-screen bg-purple-100">
        <BrowserRouter>
            <ToastContainer/>
                <AppNavbar
                isLoggedIn = {isLoggedIn} 
                setIsLoggedIn = {setIsLoggedIn} 
                setName = {setName}
                setEmail = {setEmail} 
                token = {token} 
                setToken = {setToken}
                />

            <Routes>

                <Route
                    path = "/"
                    element = {
                    <Home 
                            isLoggedIn = {isLoggedIn}
                            setIsLoggedIn = {setIsLoggedIn}
                            setName = {setName}
                            setEmail = {setEmail}
                            
                        />
                    
                    }
                />
                

            <Route path = "/Register" element = {
                    <Register
                        isLoggedIn = {isLoggedIn} 
                        setIsLoggedIn = {setIsLoggedIn} 
                        setName = {setName} 
                        setEmail = {setEmail} 
                        setPassword = {setPassword} 
                        setToken = {setToken}/>
                        
                }    
            />
            
            <Route path = "/Login" element = {
                    <Login
                        
                        // isLoggedIn = {isLoggedIn}
                        setIsLoggedIn = {setIsLoggedIn} 
                        setName = {setName} 
                        // setEmail = {setEmail} 
                        // setPassword = {setPassword}
                        setToken = {setToken}

                    />
                }
            />

            <Route path ="/ForgotPassword" element = {
                    <ForgotPassword
                        setEmail = {setEmail}
                        setPassword = {setPassword}
                        setToken = {setToken}
                        isLoggedIn = {isLoggedIn}
                        
                        />
                }/>

            <Route path = "/ResetPassword" element = {
                    <ResetPassword
                        setPassword = {setPassword}
                        setToken = {setToken}
                        />
                }/> 

            <Route path = "/Profile" element = {
                    <Profile 
                        name = {name} 
                        setName = {setName}
                        email = {email} 
                        setEmail = {setEmail}
                        password = {password} 
                        token = {token} 
                        setToken = {setToken}/>

                }/>
            
        </Routes>
    </BrowserRouter>

    </div>
        
);
}



// const root = ReactDOM
// .createRoot(
//     document
//     .getElementById(
//         'root'
//     ));
// root
// .render(<App />);

export default App;