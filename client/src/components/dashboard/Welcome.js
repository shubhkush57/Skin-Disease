import React from 'react'
import { Link } from 'react-router-dom';
import welcome from '../../img/welcome.jpg';
import './welcome.css';
const Welcome = () => {
    
  return (
  
    <section
    className="relative bg-gradient-to-r from-blue-500 to-red-500 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${welcome})` }}
  >
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <div className="bg-white bg-opacity-70 p-8 rounded-lg backdrop-blur-lg fade-in">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-blue-500">
            Your Health
            <strong className="block font-extrabold text-blue-500">Our Responsibility</strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl text-black">
            Keep your systems healthy effortlessly with our intuitive monitoring solution. Stay ahead of issues and ensure peak performance around the clock.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <Link
              className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
              to="/search"
            >
              <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
              <span
                className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
              >
                Check Disease From Image
              </span>
            </Link>

            {/* Border */}

            <Link
              className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
              to="/searchdisease"
            >
              <span className="absolute inset-0 border border-current"></span>
              <span
                className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
              >
                Search About Disease
              </span>
            </Link>
          
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Welcome