import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductUpdate = () => {
    const update = useLoaderData()
    const {_id, name, brandName, type, photo, price, description, rating} = update
    console.log(update);
    
    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const photo = form.photo.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const updateProduct = { name, price, description, photo, brandName, type, rating }
        console.log(updateProduct);
        fetch(`https://brand-shop-server-nine-psi.vercel.app/products/id/${_id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'success',
                        text: 'Product Update Successfully',
                        confirmButtonText: 'okay'
                    })
                }
            })

    }

    return (
        <div className='flex justify-center mb-10 mt-10 '>
            <div className="w-full max-w-2xl p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleUpdateProduct} className="space-y-6">
                    <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Update Product</h5>
                    <div>
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" defaultValue={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" />
                    </div>
                    <div>
                        <label for="brandName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                        <select id="brandName" name="brandName" defaultValue={brandName} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'>
                            <option value="Netflix">Netflix</option>
                            <option value="Amazon Prime">Amazon Prime</option>
                            <option value="Disney">Disney</option>
                            <option value="Spotify">Spotify</option>
                            <option value="Sony Pictures">Sony Pictures</option>
                            <option value="Warner Bros">Warner Bros</option>
                        </select>
                    </div>
                    <div>
                        <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                        <select id="type" name="type" defaultValue={type} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'>
                            <option value="Action">Action</option>
                            <option value="Romance">Romance</option>
                            <option value="Horror">Horror</option>
                            <option value="Stories">Stories</option>
                            <option value="Educational">Educational</option>
                            <option value="Music">Music</option>
                            <option value="Anime">Anime</option>
                        </select>
                    </div>
                    <div>
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                        <input type="text" name="photo" defaultValue={photo} id="photo" placeholder="Photo URL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <div>
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" defaultValue={price} name="price" id="price" placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <div>
                        <label for="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
                        <input type="text" defaultValue={description} name="description" id="description" placeholder="Short description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <div>
                        <label for="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input type="text" defaultValue={rating} name="rating" id="rating"  placeholder="Rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Product</button>

                </form>
            </div>

        </div>
    );
};


export default ProductUpdate;