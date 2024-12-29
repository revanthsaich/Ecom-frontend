import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
const Contact = () => {
  return (

    <div className="container h-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h1>
      <div className="flex space-x-8">
        <a
          href="https://github.com/revanthsaich"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-gray-800 hover:text-gray-600 transition"
        >
          <FaGithub size={80} />
          <span className="text-lg mt-2">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/revanth-sai-chaparala-000270301/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-gray-800 hover:text-gray-600 transition"
        >
          <FaLinkedin size={80} />
          <span className="text-lg mt-2">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
