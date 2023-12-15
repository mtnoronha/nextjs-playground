'use client';

import Link from 'next/link';
import MenuLinks from './MenuLinks';

export default function Menu() {
  return (
    <div className="navbar bg-primary text-primary-content bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm bg-primary text-primary-content dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <MenuLinks />
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">Index</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuLinks />
        </ul>
      </div>
    </div>
  );
}
