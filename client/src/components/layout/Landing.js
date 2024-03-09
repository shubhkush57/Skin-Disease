import React from 'react';
import { Link } from 'react-router-dom';
import appLogo  from '../../img/applogo.png';
const Landing = () => {
  return (
    // <section className='landing'>
    //   <div className='dark-overlay'>
    //     <div className='landing-inner'>
    //       <h1 className='x-large'>MusixOn</h1>
    //       <p className='lead'>Welcome to MusixOn</p>
    //       <div className='buttons'>
    //         <Link to='/register' className='btn btn-primary'>
    //           Sign Up
    //         </Link>
    //         <Link to='/login' className='btn btn-light'>
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>


<section class="h-screen">
<div class="container px-6 py-12 h-full">
  <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
    <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
        class="w-full"
        alt="Phone image"
      />
    </div>
    <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
      {/* <div className='landing-inner'>
            <h1 className='x-large'>MusixOn</h1>
            <p className='lead'>Welcome to MusixOn</p>
          <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
          </div>
      </div> */}

      
      <div class="w-96 h-92 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-zinc-700 dark:border-gray-700">
          
          <div class="flex flex-col items-center pb-10">
              <img class="mb-3 mt-11 mb-7 w-24 h-24 rounded-full shadow-lg" src={appLogo} alt="Bonnie image" />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">MusixOn</h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">Welcome To MusixOn</span>
              <div class="flex mt-4 space-x-3 md:mt-6">
                  <Link to="/register" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</Link>
                  <Link to="/login" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Login</Link>
              </div>
          </div>
      </div>





    </div>
  </div>
</div>
</section>
  );
};

export default Landing;
