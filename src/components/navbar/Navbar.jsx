import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect , logout  ,isAuthenticated } = useAuth0();
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-redish">
           <strong>Action</strong>Recruits
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-redish"><Link to="/">Home</Link></li>
        <li className="menuList text-[#6f6f6f] hover:text-redish"><Link to="/contact">Contact</Link></li>
        <li className="menuList text-[#6f6f6f] hover:text-redish"><Link to="/about">About</Link></li>
        {
          isAuthenticated ?
          <li className="menuList text-[#6f6f6f] hover:text-redish">
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Log Out
           </button>
          </li>
          :
          <li className="menuList text-[#6f6f6f] hover:text-redish">
          <button onClick={() => loginWithRedirect()}>Log In</button>
          </li> 
          
        }
      </div>
    </div>
  )
}

export default Navbar

