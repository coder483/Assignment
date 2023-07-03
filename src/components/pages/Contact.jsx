import React from 'react'
import { AiFillBulb, AiFillMail, AiFillPhone } from 'react-icons/ai'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <div className='ml-[6rem] mr-[6rem]'>
    <Navbar/>
    <div className="xl:container   mb-32 ">
      <div className="flex justify-center  bg-grayish rounded-[10px] h-[250px]">
        <h className="text-5xl  text-redish uppercase pt-12">Contact</h>
      </div>
      <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
        <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
          {/* <div className='grid grid-cols-2 gap-x-6 mb-12 mx-auto'>
           <AiFillMail size={50}/>
           <AiFillPhone size={50}/>
           
          </div> */}
          <div className="form-group mb-6">
            <label for="firstname" className="block text-gray-700  text-sm font-bold mb-2" id='firstname'> 
            FirstName
            </label>
            <input type="text" className='form-control w-full px-3 py-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-redish focus:outline-none' placeholder='FirstName ...'/>
            <label for="secondname" className="block text-gray-700 mt-[20px] text-sm font-bold mb-2" id='firstname'> 
            SecondName
            </label>
            <input type="text" id='secondname' className='form-control w-full px-3 py-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-redish focus:outline-none' placeholder='SecondName ...' />

            <label for="email" className="block text-gray-700 mt-[20px] text-sm font-bold mb-2" id='firstname'> 
            Email
            </label>
            <input type="email" id='email' className='form-control w-full px-3 py-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-redish focus:outline-none'placeholder='Enter your email ...' />
            <label for="textarea" className=" mt-[20px]  block text-gray-700 text-sm font-bold mb-2" id='textarea'> 
            Add Something Special
            </label>
            <textarea type="textarea" id='textarea' className='form-control w-full h-[250px] px-3 py-1 text-gray-700 rounded border border-solid border-gray-300 focus:border-redish focus:outline-none ' placeholder='Anything you wanna say ...'/>
          </div>
          
         
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] bg-redish font-semibold text-textColor hover:bg-white  group-hover:text-textColor'>Submit</button>
          </div>
         
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact