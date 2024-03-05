import React from 'react'
import drumsimg from '../assets/DrumsImg.svg'
import fluteimg from '../assets/FluteImg.svg'
import guitarimg from '../assets/GuitarImg.svg'
import pianoimg from '../assets/PianoImg.svg'

function Courses() {
    return (
        <div className='flex flex-col items-center justify-center p-10'>
            <p className=' text-blue-700 text-3xl'><b>Classes & Grade Exams</b></p>
            <div className='flex gap-20 pt-10'>
                <div className='flex flex-col justify-center items-center gap-4'>
                <img src={guitarimg} alt='Guitar image' height='150px' width='150px'/> 
                    <p className='text-2xl tracking-wider'><b>Guitar</b></p>
                </div>
                <div  className='flex flex-col justify-center items-center gap-4'>
                <img src={pianoimg} alt='Piano image' height='150px' width='150px'/>
                    <p className='text-2xl tracking-wider'><b>Piano</b></p>
                </div>
                <div  className='flex flex-col justify-center items-center gap-4'>
                <img src={fluteimg} alt='Flute image' height='150px' width='150px'/>
                    <p className='text-2xl tracking-wider'><b>Flute</b></p>
                </div>
                <div  className='flex flex-col justify-center items-center gap-4'>
                <img src={drumsimg} alt='Drums image' height='150px' width='150px'/>
                    <p className='text-2xl tracking-wider'><b>Drums</b></p>
                </div>
            </div>
        </div>
    )
}

export default Courses