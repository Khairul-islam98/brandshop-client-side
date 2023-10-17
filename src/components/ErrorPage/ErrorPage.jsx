import React from 'react';
import img from '../../assets/images/404.gif'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center mt-20 py-3'>
                <Link><button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Go to Home</button></Link>
            </div>
            <div className="container mx-auto px-5 flex justify-center items-center rounded-sm">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;