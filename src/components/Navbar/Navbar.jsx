import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { RiHomeLine, RiBriefcase3Line, RiShoppingCartLine, RiLoginBoxLine, RiCreativeCommonsByLine, RiLogoutBoxLine } from "react-icons/ri";
import logoImg from '../../assets/images/logo.png'
import ThemeBtn from '../LightDark/ThemeBtn';


const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext)

    const handleSignOut = () => {
        userSignOut()
            .then(() => {

            })
            .catch()
    }

    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white btn-primary font-bold underline" : ""
            }
        >
            <span className='text-2xl'><RiHomeLine></RiHomeLine></span> Home
        </NavLink></li>
        <li><NavLink
            to="/addproduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white btn-primary font-bold underline" : ""
            }
        >
            <span className='text-2xl'><RiBriefcase3Line></RiBriefcase3Line></span> Add Product
        </NavLink></li>
        <li><NavLink
            to="/mycart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white btn-primary font-bold underline" : ""
            }
        >
            <span className='text-2xl'><RiShoppingCartLine></RiShoppingCartLine></span> My Cart
        </NavLink></li>
        <li><NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white btn-primary font-bold underline" : ""
            }
        >
            <span className='text-2xl'><RiCreativeCommonsByLine></RiCreativeCommonsByLine></span> Register
        </NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-md dark:text-white  dark:bg-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <h2 className='lg:font-bold text-blue-700 font-rancho font-extrabold text-2xl'>Entertainment <br /> 
                        <span className='text-red-500'>Media</span></h2>
                <div className='flex gap-2'>
                <Link to="/" className="navbar-item">
                    <img src={logoImg} alt="logo" className="h-14" />
                </Link>
                
                <ThemeBtn></ThemeBtn>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="">
                        <div className="">
                            {
                                user ? <div className='w-10 rounded-full'><img className='btn btn-ghost btn-circle avatar online' src={user?.photoURL} /></div> :
                                    // <img src={userImg} />
                                    <button className='btn w-full'><span className='text-2xl'><RiLoginBoxLine></RiLoginBoxLine></span> Login</button>

                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-center">
                                {
                                    user ? <h2 className='font-bold btn-primary'>Name: {user && <span> {user.displayName} </span>}</h2> :
                                        <p></p>
                                }

                            </a>
                        </li>
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-primary text-white'><span className='text-2xl'><RiLogoutBoxLine></RiLogoutBoxLine></span> Sign Out</button>
                                :
                                <Link to='/login'>
                                    <button className='btn w-full'><span className='text-2xl'><RiLoginBoxLine></RiLoginBoxLine></span> Login</button>
                                </Link>
                        }
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;



