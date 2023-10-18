import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import Contact from '../Contact/Contact';

const Footer = () => {
    return (
        <div className="hero min-h-[400px]  bg-black mt-5 " >
            <div className='ml-5  md:flex justify-between items-center gap-20'>
                <div>
                    <img src="" alt="" />
                    <h1 className='text-4xl text-white font-rancho mt-5 mb-5'>Entertainment and Media</h1>

                    <div className='flex text-3xl text-white mt-5 mb-5 gap-3'>
                        <span><FaFacebook></FaFacebook></span>
                        <span><FaTwitter></FaTwitter></span>
                        <span><FaInstagram></FaInstagram></span>
                        <span><FaLinkedin></FaLinkedin></span>
                    </div>
                    <h1 className='text-4xl text-white font-rancho'>Get in Touch</h1>
                    <div className='mt-5 text-lg text-white flex flex-col gap-6'>
                        <p className='flex gap-3 items-center'><span><FiPhone></FiPhone></span>  +8801863125143</p>
                        <p className='flex gap-3 items-center'><span><FiMail></FiMail></span>  Janeyrahman900@gmail.com</p>
                        <p className='flex gap-3 items-center'><span><FaLocationDot></FaLocationDot></span>  musapur, companigonj, noakhali</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-4xl   text-white font-rancho'>Connect with Us</h1>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
};

export default Footer;
