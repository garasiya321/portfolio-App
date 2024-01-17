import React from "react";
function TechSkill() {
  return ( 
  <div className='bg1skill flex flex-col items-center lg:flex-row md:flex-row md:px-28 justify-around lg:px-28 p-5' id='home'>
      <div className='transform transition-transform hover:scale-110 duration-100 ease-in-out mt-7'>
        <h1 className="justify-self-auto text-4xl font-bold text-center mb-5 text-pink-900" id="techskills">TECH SKILLS</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-around ">
        <div className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-pink-950 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-pink-700">Scripting Languages</h1>
          <div className="flex justify-center mt-5">
            <img src="/images/html.png" alt="HTML" className="w-10" />
            <p className="mx-4 font-bold mt-3 text-pink-950">HTML</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/css.png" alt="CSS" className="w-7" />
            <p className="mx-6 font-bold mt-3 text-pink-950">CSS</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/js.png" alt="JavaScript" className="w-11" />
            <p className="mx-1 font-bold mt-3 text-pink-950">JavaScript</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/react.png" alt="React" className="w-10" />
            <p className="mx-5 font-bold mt-3 text-pink-950">React</p>
          </div>
          <div className="flex justify-center mt-5 mb-3">
            <img src="/images/redux.png" alt="Redux" className="w-9" />
            <p className="mx-5 font-bold mt-1 text-pink-950">Redux</p>
          </div>
        </div>

        <div className="border mb-5 sm:mb-0 sm:mr-5 p-5 rounded-xl shadow-pink-950 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-out-in">
          <h1 className="text-xl font-bold p-2 text-center text-pink-700">Frameworks</h1>
          <div className="flex justify-center mt-5">
            <img src="/images/bootstrap.png" className="w-9" alt="Bootstrap" />
            <p className="mx-5 font-bold text-pink-950">Bootstrap</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/tailwind.png" className="w-10" alt="Tailwind" />
            <p className="mx-7 font-bold text-pink-950">Tailwind</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/materialUi.png" alt="Material UI" className="w-9"/>
            <p className="mx-4 font-bold text-pink-950">Material UI</p>
          </div>
        </div>

        <div className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-pink-950 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-pink-700">Hosting Platforms</h1>
          <div className="flex justify-center mt-5">
            <img src="/images/netlify.png" alt="Netlify" className="w-10" />
            <p className="mx-5 font-bold text-pink-950">Netlify</p>
          </div>
          <div className="flex justify-center mt-5">
            <img src="/images/github.png" alt="GitHub" className="w-10 bg-sky-100 rounded-full" />
            <p className="mx-5 font-bold text-pink-950">GitHub</p>
          </div>
          <div className="flex justify-center mt-5 mb-3">
            <img src="/images/vercel.png" alt="Vercel" className="w-12 bg-sky-100 rounded" />
            <p className="mx-5 font-bold text-pink-950">Vercel</p>
          </div>
        </div>

        <div className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-pink-950 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold text-center mt-4 p-3 text-center text-pink-700">Backend</h1>
          <div className="flex justify-center mt-5 mx-3 mb-3">
            <img src="/images/nodejs.png" className="w-12 md:px-2 bg-pink-100 rounded-lg" alt="MongoDB" />
            <p className="mx-5 mt-1 font-bold text-pink-950">Node Js</p>
          </div>
          <div className="flex justify-center mt-5 mx-3 mb-2">
            <img src="/images/expressjs.png" className="w-12 md:px-2 bg-pink-100 rounded-lg" alt="MongoDB" />
            <p className="mx-3 mt-2 font-bold text-pink-950 ">Express Js</p>
          </div>
          <div className="flex justify-center mt-5 mx-3 mb-3">
            <img src="/images/mongodb.png" className="w-12 md:px-2" alt="MongoDB" />
            <p className="mx-3 mt-3 font-bold text-pink-950">MongoDB</p>
          </div>
        </div>

        <div className="border mb-5 sm:mb-0 sm:mr-5 rounded-xl shadow-pink-950 shadow-2xl m-5 transform transition-transform hover:scale-110 duration-1000 ease-in-out">
          <h1 className="text-xl font-bold mt-4 p-3 text-center text-pink-700">Version Control</h1>
          <div className="flex justify-center mt-5 mb-3">
            <img src="/images/git.png" className="w-10" alt="Git" />
            <p className="mx-5 mt-2 font-bold text-pink-950">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkill;
