import React, { useEffect, useState } from 'react';
import { SlTrash } from "react-icons/sl";
import { AiTwotoneStar } from "react-icons/ai";
import Swal from 'sweetalert2';

const MyCartData = ({ cart, myCart, setMyCart, cartData, setCartData }) => {

    const { uid } = cart;
    useEffect(() => {
        if (uid) {
            fetch(`https://brand-shop-server-nine-psi.vercel.app/user/${uid}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const cartDatas = data.filter(data => data.uid == cart.uid);
                    console.log(cartDatas);
                    setCartData(cartDatas);
                });
        }
    }, [cart]);


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-nine-psi.vercel.app/user/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your Product has been deleted.',
                            'success'
                        )
                        const remaining = myCart.filter(cart => cart._id !== _id)

                        setMyCart(remaining)
                    })
            }
        })
    }

    return (
        <div className="card md:card-side bg-[#F5F4F1] shadow-xl">
            <figure><img className='flex md:w-96 h-96 rounded-2xl gap-2 ' src={cart.photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 py-14">
                <div className='flex flex-col font-ralway text-lg'>
                    <h5 className="block mb-2 font-rancho text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {cart.name}
                    </h5>
                    <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-red-500">
                        {cart.brandName}
                    </h5>
                    <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
                        {cart.type}
                    </h5>
                    <p className="block font-ralway text-base antialiased font-light leading-relaxed text-inherit">
                        {cart.description}
                    </p>
                    <div className='flex items-center  gap-1'>
                        <p className='text-2xl text-[#dbc085]'><AiTwotoneStar></AiTwotoneStar></p>
                        <h5 className='text-xl'>{cart.rating}</h5>
                    </div>
                    <h2 className='text-lg font-rancho'>Price: {cart.price} $</h2>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button onClick={() => handleDelete(cart._id)} className="btn bg-[#ea4744] text-white text-2xl"><span><SlTrash></SlTrash></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartData;