import React from 'react';
import { useAuthState,useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';


const Header = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const[user]=useAuthState(auth)
    return (
<div class="navbar bg-[#071330] text-white ">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">PMP</a>
  </div>
  <div class="navbar-center hidden lg:flex  text-xl
  ">
    <ul class="menu menu-horizontal p-0">
      <li> <Link to='/home'>Home</Link></li>
      <li> <Link to='/agreements'>Agreements </Link></li>
      <li> <Link to='/dashboard'>Dashboard</Link></li>  
      {user ? <button  onClick={async () => {
          const success = await signOut();
          if (success) {
            alert('You are sign out');
          }
        }}>Logout</button> : <li> <Link to='/login'>Login </Link></li>}
        
      <li> <Link to='/register'>Register</Link></li>
      
     
    </ul>
  </div>
</div>
    );
};

export default Header;