import React from 'react'

function Navbar() {
  return (
    <div className='flex w-[100vw] h-[100px] items-center justify-evenly bg-black'>
        {/* <img src={logo} alt="logo" /> */}
        <p className='text-white'>Riyaaz</p>
        <div className='flex items-center justify-center gap-10'>
            <a href="#" className='text-white'>Home</a>
            <a href="#" className='text-white'>About</a>
            <a href="#" className='text-white'>Learn</a>
        </div>
        <p className='text-white'>SignIn</p>
    </div>
  )
}

export default Navbar