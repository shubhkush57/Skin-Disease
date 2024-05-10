import React from 'react'
import infoImage from './images/ISIC_0024332.jpg';
const Melanoma = () => {
  return (
    
<div className="flex items-center justify-center min-h-screen">
  <div className="max-w-xl w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-12 mb-12">
    <a href="#">
      <img className="rounded-t-lg" src={infoImage} alt="" />
    </a>
    <div className="p-8">
      <a href="#">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Melanoma</h5>
      </a>
      <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-400">Surgical excision - removing the tumor and surrounding tissue.</p>
      <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-400">Immunotherapy - using medications to stimulate the immune system to attack cancer cells.</p>
      <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-400">Chemotherapy - using medications to kill cancer cells.</p>
      <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-400">Radiation therapy - using high-energy radiation to destroy cancer cells.</p>




      <a href="https://en.wikipedia.org/wiki/Melanoma" target = "_blank" className="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</div>



  )
}

export default Melanoma