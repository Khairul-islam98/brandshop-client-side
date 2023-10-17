import React from 'react';
import banner from '../.././assets/images/banner.gif';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[500px]" style={{ backgroundImage: `url(${banner})` }}>
                <div class="flex items-center justify-center h-screen">
                    <div class="mx-auto my-auto">
                        <h1 className='font-rancho text-4xl text-white text-center mb-2 '>Entertainment and Media</h1>
                        <p className='text-center font-ralway text-sm text-gray-200'>Entertainment, within this realm, brings joy, <br /> excitement,
                            and brinspiration to our lives. <br /> It includes movies,
                            television shows, <br /> music, sports,  video games <br /> thoublockbuster movie.</p>
                        <div className='text-center mt-5'>
                        <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2'>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;