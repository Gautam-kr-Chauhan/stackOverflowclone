import React from 'react'
import assets from '../assets/assets'
import './navbar.css'
const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src={assets.logo} alt="" className='h-12 w-36' />
                    <div className="form-control mx-10 relative">
                        <input type="text" placeholder="Search your answer here" className="input input-bordered w-24 md:w-96 focus:outline-none rounded-full" />
                        <div className='absolute right-4 top-4 text-orange-500'>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className='text-slate-400 font-medium'>Products</p>
                </div>
                <div className="flex-none gap-10">
                        <img src={assets.message} alt="" />
                        <img src={assets.trophy} alt="" />
                        <img src={assets.book} alt="" />
                    
                    <div className="dropdown dropdown-end">
                        
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar