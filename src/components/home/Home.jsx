import React from 'react'
import Navbar from '../navbar/Navbar'
import Jobs from '../jobs/Jobs'
import Footer from '../footer/Footer'
import ValueDiv from '../valueDiv/ValueDiv'

const Home = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
    <Navbar/>
    <Jobs/>
    <ValueDiv/>
    <Footer/>
    </div>
  )
}

export default Home