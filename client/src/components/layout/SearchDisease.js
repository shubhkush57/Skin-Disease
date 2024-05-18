import React, { useState } from 'react';
import './search.css';
import axios from 'axios';
import Result from './Result';
const SearchComponent = () => {
  const [url, setUrl] = useState('');
  const [prediction_ouput, setPredication] = useState(null);
 


const [file, setFile] = useState(null);
const [error, setError] = useState('');
// const [formData,setFormData] = useState(null);

const handleUpload = async () => {
  try {
    if (!file) {
      setError('Please select a file');
      return;
    }
    const config = { headers: {  
      'Content-Type': 'application/form-data',
      'Access-Control-Allow-Origin': '*'}
    } ;
    console.clear();
    const formData = new FormData();
    formData['file'] = file.name;
    const body = JSON.stringify(formData);
    console.log("hwat is happending here");
    const response = await axios.post('http://127.0.0.1:8000/success', body, 
    config
    );

    console.log("we are going to get the desired result: ")
    console.log('Response:', response.data);
    setPredication(response.data);
   
  } catch (error) {
    console.error('Error:', error);
  }
};

const handleFileChange = (event) => {
  console.clear();
  console.log("File uploaded successfully");
  console.log(event.target.files[0]);
  setFile(event.target.files[0]);
};
const handleUrlSearch = () => {
  console.log('URL:', url);
};
  return (
    <div className="search-container">
       

      {/* <div class="upload-section flex flex-col items-center">
      <div class="upload-file mb-4">
        
        <input
          type="file"
          name = "file"
          onChange={handleFileChange}
        />
        <button >Upload</button>
        {error && <div>{error}</div>}
      </div>
      
      </div> */}



      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started</h1>

      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
       In this we use CNN model to predict the type of diseasae it is from given image.
      </p>
    <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      {/* <p class="text-center text-lg font-medium">Sign in to your account</p> */}
      <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file"  class="hidden"  type="file"
          name = "file"
          onChange={handleFileChange} />
        </label>
      </div>
      <button
        type="submit"
        onClick={handleUpload}
        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Check
      </button>     
    </form>
  </div>
  
</div>
  {prediction_ouput && <Result responseData={prediction_ouput} />}
    </div>
  );
};

export default SearchComponent;