import React from 'react'
import { FiSearch } from "react-icons/fi";
import moduleName from '/assest/img/Hero.png'
import { MdLocationPin } from "react-icons/md";
// import { BiBuildingHouse } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className='relative w-full min-h-[800px] bg-gradient-to-bl to-pink-100 via-slate-50 from-pink-100 '>

      <div className='absolute  inset-0 bg-cover bg-center bg-no-repeat'
       style={{ backgroundImage: "url('/assest/img/Hero.png')",   backgroundPosition: "center 120%" }}>
        
       <div className='absolute inset-0 bg-black/20'></div>  </div>
      
<div className="absolute top-[100px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center">   
 <h1 className='text-6xl font-serif font-bold mb-4'> <span className='text-black'>Build Your </span><br/> <span className='text-[#5D2E2E]'>Dream Home</span></h1>

        <div className='flex items-center gap-4 bg-white p-2 rounded-full backdrop-blur-sm'>
        <span className='px-4 text-gray-500'>With Modren Design</span>
        <button className='bg-black text-white px-6 py-2 rounded-full'> Search Now</button>
        </div>
      </div>

      {/* Left Side Stats */}
<div className="absolute top-32 left-[12%] lg:left-[16%] xl:left-[18%] z-20 hidden md:flex flex-col">

  {/* 150+ */}
  <div className="w-32 border-b border-gray-300 pb-3">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      <h2 className="text-4xl font-bold text-gray-700">150+</h2>
    </div>
    <p className="ml-4 text-[11px] text-gray-900 leading-3">
      Completed <br /> Projects
    </p>
  </div>

  {/* 10+ */}
  <div className="w-32 border-b border-gray-300 py-3">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
      <h2 className="text-4xl font-bold text-gray-500">10+</h2>
    </div>
    <p className="ml-4 text-[11px] text-gray-700 leading-3">
      Years of <br /> Experience
    </p>
  </div>

  {/* 500+ */}
  <div className="w-32 pt-3">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-black"></span>
      <h2 className="text-4xl font-bold text-black">500+</h2>
    </div>
    <p className="ml-4 text-[11px] text-gray-900 leading-3">
      Happy <br /> Clients
    </p>
  </div>

</div>


<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[50%] bg-white p-3 rounded-3xl shadow-xl text-black">

  <h2 className="font-bold text-2xl text-center mb-5">
    Find Properties
  </h2>

  <div className="flex items-center justify-center gap-4">

    {/* City */}
    <div className="flex items-center bg-[#F5EEE8] rounded-full px-4 py-2 w-48">
      <MdLocationPin className="text-gray-400 mr-2" />
      <select className="bg-transparent outline-none w-full text-gray-500 text-sm">
        <option>City</option>
      </select>
    </div>

    {/* Properties */}
    <div className="flex items-center bg-[#F5EEE8] rounded-full px-4 py-2 w-48">
      <select className="bg-transparent outline-none w-full text-gray-500 text-sm">
        <option>Properties</option>
      </select>
    </div>

    {/* Bedroom */}
    <div className="flex items-center bg-[#F5EEE8] rounded-full px-4 py-2 w-48">
      <select className="bg-transparent outline-none w-full text-gray-500 text-sm">
        <option>Bedroom</option>
      </select>
    </div>

    {/* Search Button */}
    <button className="bg-[#B47B66] hover:bg-[#9d6754] text-white w-10 h-10 rounded-full flex items-center justify-center">
      <FiSearch size={16} />
    </button>

  </div>

</div>

 </div> 

  )
}

export default  HeroSection;