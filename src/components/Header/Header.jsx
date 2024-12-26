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
  } from "flowbite-react";
import React from "react";
import logo from "../../assets/logo.png";
  const Header = () => {
    return (
      <section>
      <Navbar fluid rounded>
        {/* Brand Section */}
        <NavbarBrand href="https://flowbite-react.com" className="p-4">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SHOP APP</span>
        </NavbarBrand>
        
        {/* User Dropdown and Toggle for Mobile Menu */}
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded className="pr-4"/>
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
  
          {/* Mobile Menu Toggle */}
          <NavbarToggle />
        </div>
        
        {/* Navigation Links */}
        <NavbarCollapse>
          <NavbarLink href="#" className="text-lg font-normal no-underline hover:underline font-sans">Home</NavbarLink>
          <NavbarLink href="#" className="text-lg font-normal no-underline hover:underline font-sans">Products</NavbarLink>
          <NavbarLink href="#" className="text-lg font-normal no-underline hover:underline font-sans">Contact</NavbarLink>
        </NavbarCollapse>
  
        {/* Search Box with Icon */}
        <div className="flex flex-grow items-center ml-4">
          <div className="input-group flex w-full">
            <input
              className="form-control py-2 border-right-0 border w-full"
              type="search"
              placeholder="Search"
              style={{
                maxWidth: '300px', 
                minWidth: '150px',
                height: '38px', // Match the height of the input box and icon
              }}
            />
            <div
              className="input-group-text"
              id="btnGroupAddon2"
              style={{
                width: '40px', // Fixed width to match the icon size
                height: '38px', // Match the height of the input box
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </Navbar>
      </section>
    );
  };
  
  export default Header;
  