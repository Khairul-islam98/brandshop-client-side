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
        element: <MainLayout  />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5001/brand')
        
            },
            {
                path: '/brand/:brandName',
                element: <PrivateRoute><BrandProduct></BrandProduct></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/products/${params.brandName}`)
            },
            {
                path: '/productdetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5001/products/id/${params.id}`)
            },
            {
                path: '/productupdate/:id',
                element: <ProductUpdate></ProductUpdate>,
                loader: ({params}) => fetch(`http://localhost:5001/products/id/${params.id}`)
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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