import React from 'react'
import images from "../../img/images.png";
// import images  from '../../img/imagesg.pn';
const Dataset = () => {
  return (
    <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div class="flex items-start sm:gap-8">
  <img src = {images} class="flex items-center gap-1"/>

   

    <div>
      <strong
        class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
      >
        <a href='https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T' target="_blank" >HAM10000 dataset</a>
      </strong>

      <h3 class="mt-4 text-lg font-medium sm:text-xl">
        <a href="#" class="hover:underline"> The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions </a>
      </h3>
      <h2 className="text-2xl font-bold text-gray-800 uppercase border-b-4 border-gray-800 mb-4">Description</h2>

      <p className="mt-4 text-lg text-gray-900 leading-7">
    Training neural networks for automated diagnosis of pigmented skin lesions faces challenges due to the limited size and diversity of available datasets of dermatoscopic images. We address this issue by introducing the HAM10000 ("Human Against Machine with 10000 training images") dataset. This dataset comprises 10,015 dermatoscopic images gathered from diverse populations, captured and stored using various modalities. It serves as a comprehensive training set for academic machine learning purposes, covering a wide range of diagnostic categories in pigmented lesions, including Actinic keratoses and intraepithelial carcinoma / Bowen's disease (akiec), basal cell carcinoma (bcc), benign keratosis-like lesions (solar lentigines / seborrheic keratoses and lichen-planus like keratoses, bkl), dermatofibroma (df), melanoma (mel), melanocytic nevi (nv), and vascular lesions (angiomas, angiokeratomas, pyogenic granulomas, and hemorrhage, vasc).
</p>


      <div class="mt-4 sm:flex sm:items-center sm:gap-2">
        <div class="flex items-center gap-1 text-gray-500">
          {/* <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          > */}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          {/* </svg> */}

          <p class="text-xs font-medium">Medicine, Health and Life Sciences; Computer and Information Science</p>
        </div>

        <span class="hidden sm:block" aria-hidden="true">&middot;</span>

        <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
          Featuring <a href="#" class="underline hover:text-gray-700">Barry</a>,
          <a href="#" class="underline hover:text-gray-700">Sandra</a> and
          <a href="#" class="underline hover:text-gray-700">August</a>
        </p>
      </div>
    </div>
  </div>
</article>
  )
}

export default Dataset