import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiTwotoneStar } from "react-icons/ai";
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const detailDetails = () => {
    const {user} = useContext(AuthContext)
    const details = useLoaderData()
    const [cartData, setCartData] = useState([]);



    const handleAddToCart = () => {

        const productData = {
            name: details.name,
            rating: details.rating,
            price: details.price,
            brandName: details.brandName,
            type: details.type,
            description: details.description,
            photo: details.photo,
            email: user.email,
            uid: user.uid
        };
        console.log('Product Data:', productData);
        fetch('https://brand-shop-server-nine-psi.vercel.app/user',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    icon:'success',
                    title: 'success',
                    text: 'Product Added Successfully',
                    confirmButtonText: 'okay'
                })
            }
            setCartData([...cartData, productData]);
            console.log(data);
        })
    }


    return (
        <div className='flex justify-center items-center mx-auto w-2/8 py-20'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img className='h-full w-full'
                        src={details.photo}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className="p-6 ">
                    <div className='flex justify-between'>
                        <div className=' flex flex-col'>
                            <h5 className="block mb-2 font-rancho text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {details.name}
                            </h5>
                            <div className='flex items-center gap-1'>
                                <p className='text-lg text-[#dbc085]'><AiTwotoneStar></AiTwotoneStar></p>
                                <h5>{details.rating}</h5>
                            </div>
                            <h2 className='text-lg font-rancho'>Price: {details?.price} $</h2>
                        </div>
                        <div className=''>
                            <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-red-500">
                                {details.brandName}
                            </h5>
                            <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
                                {details.type}
                            </h5>
                        </div>
                    </div>
                    <p className="block font-ralway text-base antialiased font-light leading-relaxed text-inherit">
                        {details.description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button onClick={handleAddToCart} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2.5 px-20 w-full  mb-2 '>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default detailDetails;