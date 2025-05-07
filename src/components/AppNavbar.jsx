import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AppNavbar = (props) => {
  const navigate = useNavigate();
  const { IsLoggedIn, setIsLoggedIn, name, setName, email, setEmail } = props;

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
    setEmail('');
    toast.success('Logged Out Successfully');
    navigate('/');
  };

  return (
    <Navbar className="bg-white shadow" fluid={true} rounded={true}>
      <Navbar.Brand>
        <Link to="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Video Conference
          </span>
        </Link>
      </Navbar.Brand>

      <div className="flex md:order-2">
        {IsLoggedIn ? (
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{name}</span>
              <span className="block truncate text-sm font-medium">{email}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link
            to="/login"
            className="text-sm text-blue-600 hover:underline font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </Navbar>
  );
};

export default AppNavbar;
