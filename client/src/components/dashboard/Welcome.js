import React from 'react'
import { Link } from 'react-router-dom';
import welcome from '../../img/welcome.jpg'
const Welcome = () => {
    
  return (
  
    <section
    className="relative bg-gradient-to-r from-blue-500 to-red-500 bg-cover bg-center bg-no-repeat"
    style={{backgroundImage: `url(${welcome})`}}
  >
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-blue-500">
          Your Health
          <strong className="block font-extrabold text-blue-500"> Our Responsibility </strong>
        </h1>
  
        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black">
          Keep your systems healthy effortlessly with our intuitive monitoring solution. Stay ahead of issues and ensure peak performance around the clock.
        </p>
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <Link
            to="/search"
            // href = "../microservice/template/index.html"
            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Check Disease From Image
          </Link>
  
          <Link
            to="/searchdisease"
            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Search About Disease
          </Link>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Welcome