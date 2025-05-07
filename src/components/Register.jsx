// user registration
const registerUser = async (req, res) =>{
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

export default registerUser;