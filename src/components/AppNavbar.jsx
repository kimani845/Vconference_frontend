import {Avatar, Dropdown, DropdownButton, Nav, Navbar } from 'flowbite-react';
// import UserIcon from "../assets/user.png";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AppNavbar = (props) => {
    let navigate = useNavigate();

    const{IsLoggedIn, setIsLoggedIn, name , setName, email, setEmail} = props;

    const handleLogout = () => {
        setIsLoggedIn(false);
        setName("");
        setEmail("");
        toast.success("Logged Out Successfully");
        navigate("/");
    }
    return () => {
        <Navbar className="bg-white" fluid={true} rounded={true}>
            <Navbar.Brand>  
                <Link to="/">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Video Conference
                    </span>
                </Link>
            </Navbar.Brand>
    
            </Navbar>
    }
}   

export default AppNavbar;