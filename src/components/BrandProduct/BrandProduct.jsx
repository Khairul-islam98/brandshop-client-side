import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiTwotoneStar } from "react-icons/ai";
import Swipers from '../Swiper/Swipers';

const BrandProduct = () => {
    const brandProducts = useLoaderData()

    if (brandProducts.some(product => !product.price)) {
        return (
            <div className='text-red-500 text-center py-52'>
                <p>No products available.</p>
            </div>
        );
    }
    return (
        <div>
            <Swipers></Swipers>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-6  py-5 ml-6  mr-6'>
                {
                    brandProducts?.map((product) => <div key={product._id} className="relative flex flex-col text-gray-700  bg-white shadow-md  bg-clip-border">
                        <div className="relative  h-80 overflow-hidden  bg-white bg-clip-border text-gray-700">
                            <img className='h-full w-full'
                                src={product?.photo}
                                alt="img-blur-shadow"
                                layout="fill"
                            />
                        </div>
                        <div className="p-6">
                            <div className='flex justify-between'>
                                <h5 className="block  font-rancho text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {product?.name}
                                </h5>
                                <div>
                                    <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-red-500">
                                        {product?.brandName}
                                    </h5>
                                    <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
                                        {product?.type}
                                    </h5>
                                </div>
                            </div>
                            <p className="block font-ralway text-base antialiased font-light leading-relaxed text-inherit">
                                {product?.description?.slice(0, 70)}
                            </p>
                            <div className='flex justify-between mt-2'>
                                <h2 className='text-lg font-rancho'>Price: {product?.price} $</h2>
                                <div className='flex justify-center items-center gap-1'>
                                    <p className='text-2xl text-[#dbc085]'><AiTwotoneStar></AiTwotoneStar></p>
                                    <h5 className='text-xl'>{product?.rating}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col text-center lg:flex">
                            <Link to={`/productdetails/${product._id}`}>
                                <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  font-medium rounded-lg text-sm px-20 py-2.5 w-full   mb-2'>Details</button>
                            </Link>
                            <Link to={`/productupdate/${product._id}`}>
                                <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2.5 px-20 w-full  mb-2 '>Update</button>
                            </Link>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default BrandProduct;