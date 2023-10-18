import React from 'react';
import { FcCustomerSupport, FcDocument, FcVideoProjector, FcVip } from "react-icons/fc";

const HomeBanner = () => {
    return (
        <div className='flex cursor-pointer  text-white w-10/12 mb-10 mx-auto'>
            <div className="overflow-hidden flex flex-col items-center  text-center h-full w-full  rounded border shadow-md  shadow-slate-200 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <figure className="p-6 pb-0">
                    <p className='text-5xl text-center'><FcCustomerSupport></FcCustomerSupport></p>
                </figure>
                <div className="p-6">
                    <h2>Support Center</h2>
                </div>
            </div>
            <div className="overflow-hidden flex flex-col items-center  text-center h-full w-full  rounded border shadow-md  shadow-slate-200 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">

                <figure className="p-6 pb-0">
                    <p className='text-5xl text-center'><FcDocument></FcDocument></p>
                </figure>
                <div className="p-6">
                    <h2>Online Document</h2>

                </div>
            </div>
            <div className="overflow-hidden flex flex-col items-center  text-center h-full w-full  rounded border shadow-md  shadow-slate-200 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">

                <figure className="p-6 pb-0">
                    <p className='text-5xl text-center'><FcVideoProjector></FcVideoProjector></p>
                </figure>
                <div className="p-6">
                    <h2>Video Project</h2>

                </div>
            </div>
            <div className="overflow-hidden flex flex-col items-center  text-center h-full w-full  rounded border shadow-md  shadow-slate-200 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">

                <figure className="p-6 pb-0">
                    <p className='text-5xl text-center'><FcVip></FcVip></p>
                </figure>
                <div className="p-6">
                    <h2>VIP</h2>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;