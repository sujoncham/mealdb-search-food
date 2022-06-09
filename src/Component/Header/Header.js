import React from 'react';
import { Link } from 'react-router-dom';

const myNavbar = (<>
    <li><Link to='/'>Home</Link></li>
     <li><Link to='/meals'>Meals</Link></li>
     <li><Link to='/meals'>Contact</Link></li>
     <li><Link to='/meals'>Food Blog</Link></li>
</>)

const Header = () => {
    

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-500 rounded-box w-52">
                {myNavbar}
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost uppercase text-green-500 text-3xl">daisyFood</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal shadow bg-green-500 rounded-box m-1">
                {myNavbar}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn btn-success">Login</Link>
            </div>
        </div>
    );
};

export default Header;