import React from "react";

function AboutUs() {
  return (
    <>
    <div className='bg1about flex flex-col items-center lg:flex-row md:flex-row md:px-28 justify-around lg:px-28 p-5'id="about">
      <hr />
        <div className=' transform transition-transform hover:scale-110 duration-100 ease-in-out'>
        <h1 className=" justify-self-auto font-bold text-4xl text-center mb-5 mt-1 text-pink-900">
          About Us
        </h1>
      </div>
      <div className="lg:flex lg:justify-around md:flex ">
        <div className="mx-4 lg:w-1/2">
          <img src="/images/aboutUs.png" className="" alt="AboutImg" />
        </div>
        <div className="flex justify-center items-center lg:w-3/4  mx-2">
          <h1 className="m-4 lg:mx-10 text-xl lg:text-2xl text-pink-950 font-serif">
            <span className="text-pink-500 font-bold font-serif">
              WEB DEVELOPER
            </span>
            <br />
            Results-driven Full Stack Web Developer with a strong foundation in
            frontend and backend technologies. Proven ability to deliver
            high-quality solutions from concept to deployment. Collaborative
            team player with expertise in responsive design, RESTful APIs, and
            database management. Eager to contribute technical proficiency and
            creativity to a dynamic development team.
          </h1>
        </div>
      </div>
      <hr className="" />

      <div className="mt-5">
        <div className="flex flex-col md:flex-row justify-around mt-5 items-center">
          <img
            src="/images/webDevelopment.jpg"
            alt="Web Development"
            className="md:w-1/4 rounded-2xl mb-5 shadow-xl shadow-pink-500 transform transition-transform hover:scale-110 duration-1000 ease-in-out"
          />
          <p className="md:w-1/4 mx-5 mb-5 font-light text-pink-950 text-center md:text-left font-serif">
            <span className="text-2xl font-bold text-pink-500 ">
              WEB DEVELOPMENT
            </span>
            <br />
            Web development combines front-end (HTML, CSS, JavaScript) and
            back-end (Python, Ruby, PHP) technologies to create and maintain
            websites or applications. Frameworks like React and Angular enhance
            user interfaces, while Node.js supports server-side operations.
            Databases such as MySQL and MongoDB store data, ensuring responsive
            and dynamic online experiences across various devices.
          </p>
        </div>
        <hr className="my-5" />

        <div className="flex flex-col md:flex-row justify-around mt-10 items-center">
          <p className="md:w-1/4 mx-5 mb-5 font-light text-pink-950 text-center md:text-left font-serif">
            <span className="text-2xl font-bold text-pink-500">
              GAME DEVELOPMENT
            </span>
            <br />
            Game development is the process of creating interactive digital
            experiences. It involves designing, programming, and testing games
            for various platforms. Key elements include graphics, audio, and
            gameplay mechanics. Developers often use engines like Unity or
            Unreal to streamline the process. Iterative testing and creativity
            are essential for producing engaging and entertaining games.
          </p>
          <img
            src="/images/gameDevelopment.jpg"
            alt="Game Development"
            className="md:w-1/4 rounded-2xl mb-5 shadow-pink-500 shadow-xl transform transition-transform hover:scale-110 duration-1000 ease-in-out"
          />
        </div>
        <hr className="my-5" />

        <div className="flex flex-col md:flex-row justify-around mt-10 items-center">
          <img
            src="/images/ai.jpg"
            alt="Artificial Intelligence"
            className="md:w-1/4 rounded-2xl mb-5 shadow-pink-500 shadow-xl transform transition-transform hover:scale-110 duration-1000 ease-in-out"
          />
          <p className="md:w-1/4 mx-5 mb-5 font-light text-pink-950 text-center md:text-left font-serif">
            <span className="text-2xl font-bold text-pink-500">
              ARTIFICIAL INTELLIGENCE
            </span>
            <br />
            Artificial Intelligence (AI) is a field of computer science that
            aims to create machines capable of intelligent behavior. It involves
            developing algorithms that enable machines to learn from data,
            recognize patterns, and make decisions. AI applications range from
            speech recognition and image processing to autonomous vehicles,
            enhancing automation and problem-solving across diverse domains.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default AboutUs;
