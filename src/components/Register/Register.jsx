import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        if (!/(?=.*[A-Z])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must contain at least one capital letter.',
            })
            return
        } else if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'one special character',
            })
            return
        }
        else if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long.',
            })
            return
        }

        createUser(email, password)
            .then(result => {
                Swal.fire(
                    'Good job!',
                    'Registration successful!',
                    'success'
                )
                navigate(location?.state ? location.state : '/')
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })


            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Already registered',
                })
            })
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Registration successful!',
                    'success'
                )
                navigate(location?.state ? location.state : '/')
                
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Can't sign in to your Account",
                })
            })
    }   
    return (
        <div className='flex justify-center mb-10 mt-10 '>
            <div className="w-full max-w-2xl  p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleRegister} className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register your account</h5>
                    <div>
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                        <input type="text" name="photo" id="photo" placeholder="Photo URL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registration account</button>
                    <button
                        onClick={handleGoogle}
                        className="flex select-none text-gray-500 dark:text-gray-300  mx-auto items-center gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        <p className="text-3xl"> <FcGoogle></FcGoogle> </p>
                        Continue with Google
                    </button>
                    <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;