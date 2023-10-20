import React, { useContext } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signInUser(email, password)
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Logged successful!',
                    'success'
                  )
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred while logging in.',
                  })
            })

    }
    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Login successful!',
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
            <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleLogin} className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Login</h5>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <button
                        onClick={handleGoogle}
                        className="flex select-none text-gray-500 dark:text-gray-300  mx-auto items-center gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        <p className="text-3xl"> <FcGoogle></FcGoogle> </p>
                        Continue with Google
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        don't have an account? <Link to='/register' className="text-blue-700 hover:underline dark:text-blue-500">Registration</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;