import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Page/Home/Home';
import Register from '../components/Register/Register';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import AddProduct from '../Page/AddProduct/AddProduct';
import MyCart from '../Page/MyCart/MyCart';
import Login from '../Page/Login/Login';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout  />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5001/brand')
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default Router;