/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import auth from "../firebase/firebase.config";





const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    const location = useLocation()


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

            signInUser(email, password)
                .then(() => {
                    e.target.reset()
                    toast.success('Successfully logged in')
                    navigate(location.state? location.state: '/')
                })
                .catch(() => toast.error('Invalid Email/Password'))
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, providerGoogle)
            .then(() => {
                toast.success('Successfully logged in')
                navigate(location.state? location.state: '/')
            })
            .catch(() => toast.error('ERROR! Try with another email!'))
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, providerGithub)
            .then(() => {
                toast.success('Successfully logged in')
                navigate(location.state? location.state: '/')
            })
            .catch(() => toast.error('ERROR! Try with another email!'))
    }

    return (
        <div className="hero min-h-[calc(100vh-28.501rem)] mt-8 sm:mt-12 mb-14">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-emerald-400">Login here!</h1>
                </div>
                <div className="card shrink-0 w-[24rem] shadow-2xl shadow-emerald-300 bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered focus-within:border-none focus:outline-emerald-500" required />
                            <Link className='link link-hover text-[0.8rem] mt-2 hover:text-emerald-500'>Forgot password?</Link>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn text-white text-lg  bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300">Login</button>
                        </div>
                        <div>
                            <p className='text-[0.8rem]'>Don't have an account yet? <Link to='/register' className='link link-hover hover:text-emerald-500'>Register</Link></p>
                        </div>

                        <div className="flex items-center w-full my-4">
                            <hr className="w-full border-[0.0625rem] border-emerald-500" />
                            <p className="px-3">OR</p>
                            <hr className="w-full border-[0.0625rem] border-emerald-500" />
                        </div>
                        <div className="flex gap-6 justify-center mt-2 mb-1">
                            <FaGoogle className="w-6 h-6 fill-emerald-500" onClick={handleGoogleLogin} />
                            <GrGithub className="w-6 h-6 fill-emerald-500" onClick={handleGithubLogin} />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;