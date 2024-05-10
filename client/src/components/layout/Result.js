import React from 'react'
import { useState ,useEffect} from 'react';
const Result = ({responseData}) => {
    // const [imagePath, setImagePath] = useState('./images/ISIC_0024332.jpg');
    // const handleImageChange = (newImagePath) => {
    //     setImagePath(newImagePath);
    //   };
    console.log("hwersfsd");
    console.log(responseData);
    const [imageSrc, setImageSrc] = useState(null);
    const img = responseData.img;
    const predictions = responseData.predications;
    useEffect(() => {
        try {
        const image = require(`./images/${img}`);
        console.log('thisis image coming');
        console.log(image);
        setImageSrc(image);
        } catch (error) {
        console.error('Error loading image:', error);
        }
    }, [img]);
    console.log(responseData);
    
    console.log(img);
  return (
    <div>
      



      <div className="header">
        <div className="flex justify-center">
        <h3 className="header-text text-2xl font-bold text-center mt-8">Model Prediction</h3>
        </div>
        <div className="flex justify-center">
          
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img class="rounded-lg" src={imageSrc} alt="image description" />
          </a>
          
        </figure>

          {/* <img className="result-img"  src={imageSrc } alt="Uploaded Image"  /> */}
        </div>
      </div>
      <div className="info">
        <div className="flex justify-center">
        <h3 className="header-text text-2xl font-bold text-center mt-8">Model Prediction</h3>

        </div>



        <div class="rounded-lg border border-gray-200">
  <div class="overflow-x-auto rounded-t-lg">
    <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead class="ltr:text-left rtl:text-right">
        <tr>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rank</th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Class</th>
          <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Probability</th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">1st</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.class1}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.prob1}</td>
        </tr>

        <tr>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">2nd</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.class2}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.prob2}</td>
        </tr>

        <tr>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">3rd</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.class3}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.prob3}</td>
        </tr>
        <tr>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">4th</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.class4}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.prob4}</td>
        </tr>
        <tr>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">5th</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.class5}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.prob5}</td>
        </tr>
        <tr>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">6th</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.class6}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.prob6}</td>
        </tr>
        <tr>
          <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">7th</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.class7}</td>
          <td class="whitespace-nowrap px-4 py-2 text-gray-700">{predictions.prob7}</td>
        </tr>
      </tbody>
    </table>
  </div>

  
</div>


        
      </div>
    </div>
  )
}

export default Result