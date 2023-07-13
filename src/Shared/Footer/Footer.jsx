import React from 'react';
import { FaCopyright, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer bg-light-bg dark:bg-dark-bg items-center p-4 lg:px-32 mt-12">
            <div className="items-center grid-flow-col">
                <FaCopyright className='text-4xl'></FaCopyright>
                <p>Copyright © 2023 - <a className='font-semibold tracking-wider' href="//tajkiralam.com" target='_blank'> MD Tajkri Alam </a> </p>
            </div>
            <div className="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
                <a href="https://github.com/tajkir-alam" target='_blank'><FaGithubSquare className='text-4xl hover:text-blue-600 duration-300' /></a>
                <a href="https://www.linkedin.com/in/tajkir-alam/" target='_blank'><FaLinkedin className='text-4xl hover:text-blue-600 duration-300' /></a>
            </div>
        </footer>
    );
};

export default Footer;