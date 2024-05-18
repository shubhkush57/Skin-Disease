import React from 'react'
import accu1 from '../../img/accu1.png';
import accu2 from '../../img/accu2.png';

const Result = () => {
  return (
   
<>
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
        <div className="mx-auto max-w-md text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Model Architecture</h2>

            <p className="mt-4 text-gray-500">
            Skin Disease's model architecture is based on Convolutional Neural Networks (CNNs), a deep learning technique widely used for image classification tasks
            </p>
          </header>

          {/* <a
            href="#"
            className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a> */}
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block">
              <img
                src={accu1}
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Model Accuracy
                </h3>

                {/* <p className="mt-1 text-sm text-gray-700">$150</p> */}
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <img
                src={accu2}
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Model Loss
                </h3>

                {/* <p className="mt-1 text-sm text-gray-700">$150</p> */}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<div className="text-center">
  <div className="mb-6">
    <span className="text-3xl text-purple-600 font-semibold">Result:</span>
    <h2 className="text-4xl text-indigo-800 font-bold mb-2">Training and Validation Accuracy</h2>
  </div>
  <h3 className="text-lg text-gray-800">Model has <span className="font-bold text-xl text-blue-600">86%</span> accuracy on validation data and <span className="font-bold text-xl text-blue-600">89%</span> accuracy on testing data</h3>
</div>

            <div class="flex items-center justify-center mt-12">
               

<div class="grid grid-cols-2 gap-2">
    
    </div>

            </div>
        </>

  )
}

export default Result