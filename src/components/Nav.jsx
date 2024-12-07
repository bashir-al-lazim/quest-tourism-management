import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Nav = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log('user successfully logged out'))
            .catch(error => toast.error(error.message))
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const getTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', getTheme)
    }, [theme])

    const handleToogle = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }

        {localStorage.getItem('theme') === 'dark' ? document.getElementById('root').setAttribute('class', ' ') : document.getElementById('root').setAttribute('class', 'shadow-body shadow-emerald-300')}

        {localStorage.getItem('theme') === 'dark' ? document.getElementById('subscribe').setAttribute('class', 'grow') : document.getElementById('subscribe').setAttribute('class', 'grow text-white')}
    }

    return (
        <div className={`sticky top-0 z-50 ${theme === 'light' ? 'bg-white' : 'bg-[#000000d9]' }`}>
            <div className="sm:py-3 py-2 w-full pl-4 pr-7 navbar">
                <div className="flex items-center navbar-start">
                    <div className="dropdown mt-[0.225rem] mr-2">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="#10b981" viewBox="0 0 24 24" stroke="#10b981"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] -left-2 p-2 bg-transparent rounded-box w-max gap-2  font-medium text-[1.125rem]">
                            <NavLink to='/' className={({ isActive }) => isActive ? "px-5 py-2 bg-base-100 border-b-[0.25rem] border-b-emerald-400  rounded-lg" : "px-5 py-2 bg-base-100 border-b-[0.25rem] border-b-[#898888] rounded-lg hover:text-[#898888]"}>Home</NavLink>
                            <NavLink to='/all_tourists_spot' className={({ isActive }) => isActive ? "px-5 py-2 bg-base-100 border-b-[0.25rem] border-b-emerald-400  rounded-lg" : "px-5 py-2 bg-base-100 border-b-[0.25rem] border-b-[#898888] rounded-lg  hover:text-[#898888]"}>All Tourists Spot</NavLink>
                            <NavLink to='/add_tourist_spot' className={({ isActive }) => isActive ? "px-5 py-2 bg-base-100 border-b-[0.25rem] border-b-emerald-400  rounded-lg" : "px-5 py-2 bg-base-100 border-b-[0.25rem] border-b-[#898888] rounded-lg  hover:text-[#898888]"}>Add Tourists Spot</NavLink>
                            <NavLink to='/my_list' className={({ isActive }) => isActive ? "px-5 py-2 bg-base-100 border-b-[0.25rem] border-b-emerald-400  rounded-lg" : "px-5 py-2 bg-base-100 border-b-[0.25rem] border-b-[#898888] rounded-lg  hover:text-[#898888]"}>My List</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className="text-[2rem] font-bold text-emerald-500">Quest</Link>
                </div>
                <div className="hidden lg:flex min-w-max navbar-center">
                    <ul className=" font-medium text-[1.125rem] gap-4">
                        <NavLink to="" className={({ isActive }) => isActive ? 'border-b-emerald-400  py-[0.675rem] border-transparent px-5 border-[0.1875rem] rounded-2xl transition duration-500' : 'py-[0.675rem] px-5 border-[0.1875rem] rounded-2xl border-transparent hover:text-[#898888] '}>Home</NavLink>
                        <NavLink to='/all_tourists_spot' className={({ isActive }) => isActive ? 'border-b-emerald-400  py-[0.675rem] border-transparent px-5 border-[0.1875rem] rounded-2xl transition duration-500' : 'py-[0.675rem] px-5 border-[0.1875rem] rounded-2xl border-transparent hover:text-[#898888] '}>All Tourists Spot</NavLink>
                        <NavLink to='/add_tourist_spot' className={({ isActive }) => isActive ? 'border-b-emerald-400  py-[0.675rem] border-transparent px-5 border-[0.1875rem] rounded-2xl transition duration-500' : 'py-[0.675rem] px-5 border-[0.1875rem] rounded-2xl border-transparent hover:text-[#898888] '}>Add Tourists Spot</NavLink>
                        <NavLink to="/my_list" className={({ isActive }) => isActive ? 'border-b-emerald-400  py-[0.675rem] border-transparent px-5 border-[0.1875rem] rounded-2xl transition duration-500' : 'py-[0.675rem] px-5 border-[0.1875rem] rounded-2xl border-transparent hover:text-[#898888] '}>My List</NavLink>
                    </ul>
                </div>
                <div id="nav-btn" className="flex gap-4 items-center navbar-end">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToogle} checked={theme === 'dark' ? true : false }/>

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    {user && <div className="avatar dropdown dropdown-hover">
                        <div tabIndex={0} className="w-10 rounded-full border-[0.125rem] border-emerald-400 border-solid">
                            <img src={user.photoURL} className='p-[0.1rem] rounded-full' />
                        </div>
                        <ul tabIndex={0} className="dropdown-content right-0 z-[1] menu p-2 shadow shadow-emerald-400 bg-base-100 rounded-xl min-w-max">
                            <li><a className="hover:bg-white font-medium">Hi, {user.displayName.split(' ')[0]}</a></li>
                            <li><Link onClick={handleSignOut} className="border-b-[0.1875rem] border-b-[#898888] hover:bg-white hover:border-b-emerald-400 font-medium hover:text-green-400">Logout</Link></li>
                        </ul>
                    </div>}
                    {
                        user ? '' : <>
                            <button className="relative inline-flex items-center justify-center px-5 py-2 overflow-visible font-medium transition duration-300 ease-out rounded-lg shadow-sm group hover:ring-1 hover:ring-green-300 text-lg max-w-max z-10">
                                <span className="absolute z-10 inset-0 w-full h-full bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300 rounded-lg"></span>
                                <span className="absolute z-0 bottom-0 right-0 block w-32 h-32 mb-32 mr-[5.5rem] transition duration-500 origin-bottom-left transform rotate-[52deg] translate-x-24 bg-gradient-to-br from-green-300 via-emerald-300 to-lime-300 rounded-full opacity-70 group-hover:rotate-90 ease"></span>
                                <span className="relative text-white rounded-lg z-10">
                                    <Link to='/register' className="relative">Register</Link>
                                </span>
                            </button>
                            <button className="relative inline-flex items-center justify-center px-5 py-2 overflow-visible font-medium transition duration-300 ease-out rounded-lg shadow-sm group hover:ring-1 hover:ring-green-300 text-lg max-w-max z-10">
                                <span className="absolute z-10 inset-0 w-full h-full bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300 rounded-lg"></span>
                                <span className="absolute z-0 bottom-0 right-0 block w-32 h-32 mb-32 mr-[8rem] transition duration-500 origin-bottom-left transform rotate-[55deg] translate-x-[6.4rem] bg-gradient-to-br from-green-300 via-emerald-300 to-lime-300 rounded-full opacity-70 group-hover:rotate-90 ease"></span>
                                <span className="relative text-white rounded-lg z-10">
                                    <Link to='/login' className="relative">Login</Link>
                                </span>
                            </button>
                        </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Nav;
//
//