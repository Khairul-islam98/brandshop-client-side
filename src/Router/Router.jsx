import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Page/Home/Home';
import Register from '../components/Register/Register';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import AddProduct from '../Page/AddProduct/AddProduct';
import MyCart from '../Page/MyCart/MyCart';
import Login from '../Page/Login/Login';
import BrandProduct from '../components/BrandProduct/BrandProduct';
import PrivateRoute from '../provider/PrivateRoute';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import ProductUpdate from '../components/ProductUpdate/ProductUpdate';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://brand-shop-server-nine-psi.vercel.app/brand')

            },
            {
                path: '/brand/:brandName',
                element: <PrivateRoute><BrandProduct></BrandProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-nine-psi.vercel.app/products/${params.brandName}`)
            },
            {
                path: '/productdetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-nine-psi.vercel.app/products/id/${params.id}`)
            },
            {
                path: '/productupdate/:id',
                element: <ProductUpdate></ProductUpdate>,
                loader: ({ params }) => fetch(`https://brand-shop-server-nine-psi.vercel.app/products/id/${params.id}`)
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/mycart', 
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch(`https://brand-shop-server-nine-psi.vercel.app/user`)
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