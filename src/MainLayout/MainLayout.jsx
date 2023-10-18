import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import ThemeBtn from '../components/LightDark/ThemeBtn';

const MainLayout = () => {

    return (
        <div className='dark:bg-gray-800'>
            <Navbar></Navbar>
            <Outlet />
            <Footer />
        </div>

    );
};

export default MainLayout;