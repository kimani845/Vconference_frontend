// user registration
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL;
const Register = (props) => {
    const { isLoggedIn, setIsLoggedIn, setName, setEmail } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
            }
    }, [isLoggedIn]);

    const handleRegister = async (ev) => {
        ev.preventDefault();
        const name = ev.target.name.value;
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        const confirmPassword = ev.target.confirmPassword.value;
        const country = ev.target.country?.value;
        const city = ev.target.city?.value;
        const phone = ev.target.phone?.value;

        if (!country || country === "Select Country") {
            return toast.error("Select your Country");
        }
        if (!phone) {
            return toast.error("Enter your Phone Number");
        }
        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        const formData = { name, email, password, country, phone };

        try {
            const response = await axios.post(`${API_BASE}/api/register`, formData);
            const data = response.data;

            if (data.success === true) {
                toast.success(data.message);
                setIsLoggedIn(true);
                setName(data.name);
                setEmail(data.email);
                navigate("/Home");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Registration error:", error);
            toast.error("Something went wrong. Try again.");
        }
    };


        return (
    
        <section className="bg-gray-500 flex h-screen items-center justify-center">

    <div className="flex h-screen items-center justify-center">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0
            dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl
                dark:text-white text-center text-[18px]">
            Create an account
            </h1>

            <form
            className="space-y-4 md:space-y- rounded-x1 p-8 w-full max-w-md col-md-12"
            action="POST"
            onSubmit={handleRegister}
            >
            <div>
                <div className="mb-2 block">
                <label htmlFor="name" className="text-sm font-medium required">
                    Name
                </label>
                </div>
                <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500
                        focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                required
                />
            </div>

            <div>
                <div className="mb-2 block">
                <label htmlFor="email" className="text-sm font-medium required">
                    Email
                </label>
                </div>
                <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600
                        focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="Your Email"
                required
                />
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                <div className="mb-2 block">
                    <label
                    htmlFor="password"
                    className="text-sm font-medium required"
                    >
                    Password
                    </label>
                </div>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                            focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                    required
                />
                </div>
                <div>
                <div className="mb-2 block">
                    <label
                    htmlFor="confirmpassword"
                    className="text-sm font-medium required"
                    >
                    Confirm Password
                    </label>
                </div>
                <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Re-enter Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                            focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                    required
                />
                </div>
            </div>

            {/* <CountryInput />
            <div className="max-w-xl">
                <div className="mb-2 block">
                <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                </label>
                </div>
                <input
                type="text"
                id="phone"
                name="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-purple-500 focus:border-purple-500 block w-full dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                maxLength={10}
                pattern="^[79][0-9]{9}"
                placeholder="1234567890"
                aria-errormessage="Phone number must start with 7 or 9"
                />
            </div> */}

            <div className="flex items-start">
                <div className="flex items-center h-5">
                <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500
                            dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    required
                    aria-describedby="terms"
                />
                </div>
                <div className="ml-3 text-sm">
                <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                >
                    I accept the{" "}
                    <a
                    className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                    href="#"
                    >
                    Terms and Conditions
                    </a>
                </label>
                </div>
            </div>

            <button
                type="submit"
                className="w-full focus:outline-none text-white bg-purple-600 hover:bg-purple-700 focus:ring-4
                    focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-800"
            >
                Create an account
            </button>
            <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to ="/Login"
                className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                Login Here
                </Link>
            </p>
            </form>

        </div>
        </div>
    </div>
    </section>
    );
};
    // const existingUser = await User.findOne({email});
    // if(existingUser) {
    //     return res.status(400).json({message: "Email already exists"});
    //     }
    //     else {
    //     const hashedPassword = await bcrypt.hash(password, 10);
    //     const user = new User({name, email, password: hashedPassword});
    //     await user.save();
    //     res.json({message: "User created successfully"});
    //     }



export default Register;