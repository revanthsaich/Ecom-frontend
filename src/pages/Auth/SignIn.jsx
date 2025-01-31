import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "", repeatPassword: "" });
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            setMessage("Passwords do not match");
            return;
        }
        setIsLoading(true); // Start loading

        try {
            const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: formData.username, email: formData.email, password: formData.password }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setIsSuccess(true);
                localStorage.setItem("authToken", data.token);
                // Redirect to the dashboard or home page
                navigate('/'); // Update with your desired route
            } else {
                const errors = Object.values(data).flat();
                setMessage(errors.join(", "));
                setIsSuccess(false);
            }
        } catch (error) {
            setMessage("Something went wrong.");
            setIsSuccess(false);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="container pt-4 px-5 mb-5 bg-white">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="font-black text-gray-900 py-2">SignUp</h1>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Username</label>
                    <input
                        type="text"
                        name="username"
                        id="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                        placeholder="name@flowbite.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Repeat password</label>
                    <input
                        type="password"
                        name="repeatPassword"
                        id="repeat-password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" className="w-4 h-4 border rounded" required />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">
                        I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5"
                        disabled={isLoading} // Disable the button while loading
                    >
                        {isLoading ? "Registering..." : "Register new account"}
                    </button>
                </div>
            </form>
            {message && (
                <div
                    className={`p-4 mt-3 mb-4 text-sm rounded-lg ${isSuccess ? 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400' : 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400'}`}
                    role="alert"
                >
                    <span className="font-medium">{isSuccess ? 'Success!' : 'Error!'}</span> {message}
                </div>
            )}
            {/* Login Link */}
            <div className="mt-4 text-center">
                <p className="text-sm">
                    Existing user? <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
