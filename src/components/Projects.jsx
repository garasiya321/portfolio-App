import React from "react";

function Projects() {
  return (
  <div>
    <div className="bg1project flex flex-col items-center lg:flex-row md:flex-row md:px-28 justify-around lg:px-28 p-5 text-center mt-7 ">
      <h1 className="transform transition-transform hover:scale-110 duration-100 ease-in-out justify-self-auto text-4xl font-bold text-center mb-5 text-pink-900"id="projects">TOP PROJECTS</h1>

      <div className="container mx-auto flex flex-wrap justify-center mt-5 ">
        <div className="max-w-sm rounded-2xl overflow-hidden m-4 border shadow-pink-950 shadow-xl">
          <img
            src="/images/Crypto.png"
            alt="Card Img"
            className="w-full h-52 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-pink-500  mb-2">Crypto Dashboard</div>
            <p className="text-pink-950 text-base font-serif">
            Digital assets secured by cryptography, decentralized on blockchain. Bitcoin, Ethereum, altcoins revolutionize finance. Transparent, borderless transactions. High volatility, potential for innovation, and disruption.
            </p>
          </div>
          <div className="flex justify-around">
            <a href="https://ajcryptodashboard.netlify.app/">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-pink-500 dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 shadow-sky-800 shadow-lg">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Live
              </span>
            </button>
            </a>


            <a href="https://github.com/garasiya321/crypto-dashboard?tab=readme-ov-file">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-sky-800 shadow-lg">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Source Code
              </span>
            </button>
            </a>
          </div>
        </div>

        <div className="max-w-sm rounded-2xl border overflow-hidden shadow-md m-4 shadow-pink-950 shadow-xl">
          <img
            src="/images/BookMyShow.png"
            alt="Card Img"
            className="w-full h-52 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-pink-500 text-xl mb-2">Book My Show</div>
            <p className="text-pink-950 text-base font-serif mb-12">
            Online platform for movie, event, and show bookings. User-friendly interface, diverse options, secure transactions. 
            Ultimate entertainment booking experience.
            </p>
          </div>

          <div className="flex justify-around">
          <a href="https://ajbookmyshow.netlify.app/">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 shadow-sky-800 shadow-lg">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Live
              </span>
            </button>
          </a>
            

          <a href="https://github.com/garasiya321/Book-My-Show">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-sky-800 shadow-lg">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Source Code
              </span>
            </button>
          </a>
            
          </div>
        </div>


      </div>

      <div className="container mx-auto flex mt-10 flex-wrap justify-center">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-md, m-4 shadow-pink-950 shadow-xl border">
          <img
            src="/images/EntertainmentApp.png"
            alt="Card Img"
            className="w-full h-56 object-cover "

          />
          <div className="px-6 py-4">
            <div className="font-bold text-pink-500 text-xl mb-2">Disney Star</div>
            <p className="text-pink-950 text-base font-serif">
            A streaming app by Disney, offering a vast library of movies and series from various genres. Enhanced content, family-friendly, and exclusive originals, providing immersive entertainment.
            </p>
          </div>
          <div className="flex justify-around">

            <a href="https://ajdisneystar.netlify.app/">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-300 to-lime-300 group-hover:from-teal-100 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 shadow-sky-800 shadow-lg">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Live
              </span>
            </button>
            </a>
            
            <a href="https://github.com/garasiya321/DisneyStar">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-sky-800 shadow-lg">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Source Code
              </span>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>    
  );
}

export default Projects;
