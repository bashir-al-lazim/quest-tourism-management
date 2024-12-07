/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';



const Register = () => {

    const { createUser, signOutUser } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const checkbox = e.target.terms.checked
        const photoURL = e.target.photoURL.value

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters.')
            return
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            toast.error('Must contain one upper and lower case letter')
            return
        }
        else if (!checkbox) {
            toast.error('Must accept our terms and condition')
            return
        }

        createUser(email, password)
            .then((result) => {

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => console.log('profile updated'))
                    .catch(error => console.error(error))

                toast.success('Successfully registered')
                signOutUser()
                    .then(() => {
                        console.log('registration sign out')
                        navigate('/login')
                    })
                    .catch(error => toast.error(error.message))
            })
            .catch(error => toast.error(error.message))
    }


    return (
        <div className="hero min-h-[calc(100vh-28.501rem)] mt-8 sm:mt-12 mb-14">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-emerald-400">Register now!</h1>
                </div>
                <div className="card shrink-0 w-[24rem] shadow-2xl shadow-emerald-300 bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type='url' name="photoURL" placeholder="Photo URL" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex relative">
                                <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered flex-1 focus-within:border-none focus:outline-emerald-500" name="password" required /><span className="absolute right-4 top-1/3" onClick={() => {
                                    setShowPass(!showPass)
                                    setTimeout(() => setShowPass(false), 2000)
                                }}>
                                    {
                                        showPass ? <FaEyeSlash className='fill-emerald-500 h-5 w-5'/> : <FaEye className='fill-emerald-500 h-5 w-5'/>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4 items-center">
                            <input type="checkbox" name="terms" className='checkbox rounded-sm h-[1.005rem] w-4'/>
                            <label htmlFor="terms" className='text-sm'>Please accept our terms and conditions</label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn text-white text-lg bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300">Register</button>
                        </div>
                        <div>
                            <p className='text-[0.8rem]'>Already have an account? <Link to='/login' className='link link-hover hover:text-emerald-500'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;