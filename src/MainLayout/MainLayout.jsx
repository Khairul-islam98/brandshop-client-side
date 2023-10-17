import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet />
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;