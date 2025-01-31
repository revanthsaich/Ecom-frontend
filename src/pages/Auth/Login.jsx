import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loading state

        try {
            const response = await fetch("https://ecommerce-backend-yv9f.onrender.com/api/users/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include", // Include cookies in the request (important for session-based auth)
            });
            const data = await response.json();

            if (response.ok) {
                setMessage("Login successful!");
                setIsSuccess(true);
                const randomAvatarNumber = Math.floor(Math.random() * 5) + 1;
                // Store token in localStorage
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("username", formData.username);
                localStorage.setItem("avatarNumber", randomAvatarNumber); 
                // Redirect to the dashboard or home page
                navigate('/'); // Update with your desired route
            } else {
                setMessage(data.message || "Login failed");
                setIsSuccess(false);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
            setIsSuccess(false);
        } finally {
            setIsLoading(false); // Hide loading state after request is completed
        }
    };

    return (
        <div className="container pt-4 px-5 mb-5 bg-white">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="font-black text-gray-900 py-2">Login</h1>
                <div className="mb-5">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-80 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-80 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-half focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? "Processing..." : "Login"}
                    </button>
                </div>

                {message && (
                    <div
                        className={`p-4 mt-3 mb-4 text-sm rounded-lg ${isSuccess ? 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400' : 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400'}`}
                        role="alert"
                    >
                        <span className="font-medium">{isSuccess ? 'Success!' : 'Error!'}</span> {message}
                    </div>
                )}

                {/* Sign Up Link */}
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        New user? <Link to="/signin" className="text-blue-600 hover:text-blue-800">Sign Up</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
