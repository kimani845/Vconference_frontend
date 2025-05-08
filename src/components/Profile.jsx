// Profile
const Profile = ({ name, setName, email, setEmail, password, token, setToken }) => {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name: {name}</p>
            <p>setName: {setName}</p>
            <p>Email: {email}</p>
            <p>SetEmail: {setEmail}</p>
            <p>Password0: {password}</p>
            <p>Token: {token}</p>
            <p>SetToken: {setToken}</p>

        </div>
    );
    };

export default Profile; 
