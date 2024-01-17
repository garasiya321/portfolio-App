import React, { useEffect } from 'react';
import Typed from 'typed.js';

function LandingPage() {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Full Stack Developer","Web Developer", "Frontend Developer", "UI/UX Developer"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('.typed-text', options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <>
    
    <div className='bg1 flex flex-col items-center lg:flex-row md:flex-row md:px-28 justify-around lg:px-28 p-5' id='home'>
     
      <div className='rounded-90 ring-1 ring-pink-900 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-800 lg:w-60 md:w-60 w-48 mt-24 lg:mt-12 md:mt-12 lg:mx-32 md:mx-32 mb-5 lg:mb-0 md:mb-0 transform transition-transform hover:scale-110 duration-1000 ease-in-out'>
        <img src="/images/profile.png" alt="profile" className='rounded-90 shadow-blue-100 shadow-2xl lg:w-80 md:w-80' />
        <h1 className='text-2xl text-pink-900 mt-2 typed-text font-bold'></h1>
      </div>

      <div className='text-center lg:text-left md:text-left lg:w-1/2'>
        <h1 className='lg:text-7xl md:text-7xl text-6xl lg:mt-5 md:mt-5 text-pink-900 font-semibold'>HELLO,</h1>
        <h1 className='lg:text-2xl md:text-2xl text-pink-950 mt-2'>I Am,</h1>
        <h1 className='lg:text-3xl md:text-3xl text-pink-800 mt-2 font-semibold '>Dinesh Garashiya</h1>

        <div className='mt-5'>
          <h1 className='text-2xl text-pink-400 mt-2 typed-text font-ital'></h1>
        </div>
      <div className='flex pt-19'>
        <a href="https://drive.google.com/file/d/1ItQGwh11F-FCO1jJ-KGO79DgO7cIxRxv/view?usp=drive_link"><button type="button" className=" text-black bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transform transition-transform hover:scale-110 duration-500 ease-in-out animate-pulse">Resume</button></a>
        <a href="https://github.com/garasiya321/Dinesh-Resume-Portfolio"><img src="/images/github.png" className='mx-5 w-10 h-10 shadow-pink-500 shadow-md rounded-full bg-pink-100 cursor-pointer transform transition-transform hover:scale-110 duration-500 ease-in-out' alt="git hub img" /></a>
        <a href="https://www.linkedin.com/in/dinesh-garashiya-753a90279/"><img src="/images/linkedin.png" className='mx-5 w-10 h-10 shadow-pink-500 shadow-md rounded-xl bg-pink-100 cursor-pointer transform transition-transform hover:scale-110 duration-500 ease-in-out' alt="linkedin img" /></a>
        </div>
        
      </div>

      
    
    </div>

    

    </>
  );
}

export default LandingPage;
