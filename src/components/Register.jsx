// user registration
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const URL = ProcessingInstruction.env.REACT_APP_BACKEND_URL + '/api/v1/registration';
const Register = (props) =>{
    const {isLoggedIn, setIsLoggedIn, setName, setEmail} = props;
    let navigate = useNavigate();

    useEffect(() =>{
        if(isLoggedIn){navigate("Home");
    }
});
}

const handleRegister = async (ev) =>{
    ev.preventDefault();
    const name =ev.target.name.value;
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    const confirmPassword = ev.target.confirmPassword.value;
    // const country = ev.target.country.value;
    // const phone = ev.target.phone.value;
    // const address = ev.target.address.value;
    // const city = ev.target.city.value;
    // const state = ev.target.state.value;
    // const zip = ev.target.zip.value;
    if(country === "Select Country") toast.error("Select your Country");
    if(phone === "") toast.error("Enter your Phone Number");
    if (password !== confirmPassword) toast.error("Passwords do not match");
    const role = ev.target.role.value;

    try{
        const response = await axios.post(URL, {})
        }
        catch(error){
            console.log(error);
        }
    const existingUser = await User.findOne({email});
    if(existingUser) {
        return res.status(400).json({message: "Email already exists"});
        }
        else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({name, email, password: hashedPassword});
        await user.save();
        res.json({message: "User created successfully"});
        }

}

export default Register;