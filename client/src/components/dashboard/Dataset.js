import React from 'react'
import images from "../../img/images.png";
// import images  from '../../img/imagesg.pn';
import './dataset.css'; // Ensure you import the custom CSS file
const Dataset = () => {
  return (
    <article className="rounded-xl bg-white p-6 ring ring-indigo-50 shadow-lg sm:p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row items-start sm:gap-8">
        <img src={images} alt="Dataset" className="dataset-image w-full lg:w-1/3 rounded-lg shadow-md object-cover mb-6 lg:mb-0 lg:mr-8" />

        <div className="flex flex-col gap-4">
          <strong className="inline-block rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-xs font-medium text-white mt-2">
            <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T" target="_blank" rel="noopener noreferrer">
              HAM10000 dataset
            </a>
          </strong>

          <h3 className="text-lg font-medium sm:text-xl">
            <a href="#" className="hover:underline">The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions</a>
          </h3>
          
          <h2 className="text-2xl font-bold text-gray-800 uppercase border-b-4 border-gray-800 mb-4">Description</h2>

          <p className="text-lg text-gray-700 leading-7">
            Training neural networks for automated diagnosis of pigmented skin lesions faces challenges due to the limited size and diversity of available datasets of dermatoscopic images. We address this issue by introducing the HAM10000 ("Human Against Machine with 10000 training images") dataset. This dataset comprises 10,015 dermatoscopic images gathered from diverse populations, captured and stored using various modalities. It serves as a comprehensive training set for academic machine learning purposes, covering a wide range of diagnostic categories in pigmented lesions, including Actinic keratoses and intraepithelial carcinoma / Bowen's disease (akiec), basal cell carcinoma (bcc), benign keratosis-like lesions (solar lentigines / seborrheic keratoses and lichen-planus like keratoses, bkl), dermatofibroma (df), melanoma (mel), melanocytic nevi (nv), and vascular lesions (angiomas, angiokeratomas, pyogenic granulomas, and hemorrhage, vasc).
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs font-medium">Medicine, Health and Life Sciences; Computer and Information Science</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
              Featuring <a href="#" className="underline hover:text-gray-700">Barry</a>, <a href="#" className="underline hover:text-gray-700">Sandra</a>, and <a href="#" className="underline hover:text-gray-700">August</a>
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Dataset