import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
      <div className="flex justify-center items-center  h-screen  login">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold text-textColor"> <i className="fa-solid fa-user"></i>Login</h1>
            <hr className="mt-3"/>
            <div className="mt-3">
                <label for="username" className="block text-base mb-2">Username</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
            </div>
            <div className="mt-3">
                <label for="password" className="block text-base mb-2">Password</label>
                <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
            </div>
            <div className="mt-3 flex justify-between items-center">
                <div>
                <input id='checkbox' type="checkbox" className='p-[50px]'/>
                <label for='checkbox' className='pl-[5px]'>Remember Me</label>
                </div>
                <div>
                    <Link to="google.com" className='text-textColor font-semibold'/>Forgot Password
                </div>
            </div>
            <div className="mt-5">
            <Link to="/register">  <button type="submit" className="border-2 border-redish bg-redish text-white py-1 w-full rounded-md hover:bg-transparent hover:bg-white hover:text-textColor font-semibold mb-[10px]"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Register</button></Link>
                <button type="submit" className="border-2 border-redish bg-redish text-white py-1 w-full rounded-md hover:bg-transparent hover:bg-white hover:text-textColor font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
            </div>
        </div>
      </div>
  )
}

export default LogIn