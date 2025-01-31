import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("authToken");
  const isLoggedIn = token !== null;

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedAvatarNumber = localStorage.getItem("avatarNumber");
    if (storedUsername) setUsername(storedUsername);
    if (storedEmail) setEmail(storedEmail);
    if (storedAvatarNumber) {
      setAvatarNumber(storedAvatarNumber);
    }
  }, []);

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("avatarNumber");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  function goToHome() {
    navigate('/');
  }
  const [avatarNumber, setAvatarNumber] = useState(1);
  // Construct the avatar image URL using the random number
  const avatarImageUrl = `https://flowbite.com/docs/images/people/profile-picture-${avatarNumber}.jpg`;

  return (
    <section>
      {/* Fixed Navbar */}
      <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-md">
        <NavbarBrand onClick={goToHome} className="p-4 cursor-pointer no-underline">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SHOP APP</span>
        </NavbarBrand>

        <div className="flex md:order-2">
          {isLoggedIn ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={avatarImageUrl} rounded className="pr-4" />}
            >
              <DropdownHeader>
                <span className="block text-sm">{username}</span>
                <span className="block truncate text-sm font-medium">{email}</span> {/* Dynamic email */}
              </DropdownHeader>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownDivider />
              <DropdownItem onClick={handleAuthButtonClick}>Log out</DropdownItem>
            </Dropdown>
          ) : (
            <Button onClick={handleAuthButtonClick} className="px-4 py-2 text-sm bg-blue-600 text-white">
              Login / Sign Up
            </Button>
          )}

          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <NavbarLink onClick={() => navigate('/')} className="text-lg font-normal no-underline text-xl dark:text-white cursor-pointer">Home</NavbarLink>
          <NavbarLink onClick={() => navigate('/products')} className="text-lg font-normal no-underline text-xl dark:text-white cursor-pointer">Products</NavbarLink>
          <NavbarLink onClick={() => navigate('/contact')} className="text-lg font-normal no-underline text-xl dark:text-white cursor-pointer">Contact</NavbarLink>
        </NavbarCollapse>

        <div className="flex flex-grow items-center ml-4">
          <div className="input-group flex w-full">
            <input
              className="form-control py-2 border-right-0 border w-full"
              type="search"
              placeholder="Search"
              style={{
                maxWidth: '300px',
                minWidth: '150px',
                height: '38px',
              }}
            />
            <div className="input-group-text" style={{
              width: '40px',
              height: '38px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </Navbar>

      <div className="mt-[80px]">
        {/* Your content like products goes here */}
      </div>
    </section>
  );
};

export default Header;
