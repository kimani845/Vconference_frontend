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

const Register = async (req, res) =>{
    const {name, email, password} = req.body;
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