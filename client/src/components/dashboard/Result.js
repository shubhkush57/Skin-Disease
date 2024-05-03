import React from 'react'
import accu1 from '../../img/accu1.png';
import accu2 from '../../img/accu2.png';

const Result = () => {
  return (
   
<>
<div className="text-center">
  <div className="mb-6">
    <span className="text-3xl text-purple-600 font-semibold">Result:</span>
    <h2 className="text-4xl text-indigo-800 font-bold mb-2">Training and Validation Accuracy</h2>
  </div>
  <h3 className="text-lg text-gray-800">Model has <span className="font-bold text-xl text-blue-600">86%</span> accuracy on validation data and <span className="font-bold text-xl text-blue-600">89%</span> accuracy on testing data</h3>
</div>

            <div class="flex items-center justify-center mt-12">
               

<div class="grid grid-cols-2 gap-2">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={accu1}alt="" />
        </div>
        
        <div>
            <img class="h-auto max-w-full rounded-lg" src={accu2} alt="" />
        </div>
    </div>

            </div>
        </>

  )
}

export default Result