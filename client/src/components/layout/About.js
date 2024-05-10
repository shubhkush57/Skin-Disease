import React from 'react'
// import Info from './Acne'
import Acne from './Acne';
import Actinic from './Actinic';
import Basal from './Basal';
import Benign from './Benign';
import Atopic from './Atopic';
import Melanoma from './Melanoma';



import { useEffect, useState } from "react";


function About() {
  const [car, setCar] = useState("Select Disease");

  const [AcneContentVisible, setAcneContentVisible] = useState(false);
  const [ActinicContentVisible, setActinicContentVisible] = useState(false);
  const [BasalContentVisible, setBasalContentVisible] = useState(false);
  const [BenignContentVisible, setBenignContentVisible] = useState(false);
  const [AtopicContentVisible, setAtopicContentVisible] = useState(false);
  const [MelanomaContentVisible, setMelanomaContentVisible] = useState(false);

  useEffect(() => {
    car === "Acne"
      ? setAcneContentVisible(true)
      : setAcneContentVisible(false);
    car === "Actinic" ? setActinicContentVisible(true) : setActinicContentVisible(false);
    car === "Basal" ? setBasalContentVisible(true) : setBasalContentVisible(false);
    car === "Benign" ? setBenignContentVisible(true) : setBenignContentVisible(false);
    car === "Atopic" ? setAtopicContentVisible(true) : setAtopicContentVisible(false);
    car === "Melanoma" ? setMelanomaContentVisible(true) : setMelanomaContentVisible(false);
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "Select Disease"
      ? (result = "select disease type")
      : (result = makeFirstLetterCapital(car));
    return result;
  };

  return (
    <div className="container mt-8 flex flex-col items-center">
  <div>
    <h1 className="text-3xl font-bold mb-4">Information About {renderResult()}</h1>
  </div>
  <div className="mt-4">
    <div className="max-w-md">
      <select className="form-select w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" value={car} onChange={handleOnChange}>
        <option value="Select Disease">Select Disease Type</option>
        <option value="Acne">Acne</option>
        <option value="Actinic">Actinic</option>
        <option value="Basal">Basal</option>
        <option value="Benign">Benign</option>
        <option value="Atopic">Atopic</option>
        <option value="Melanoma">Melanoma</option>
      </select>
    </div>
  </div>
  <div className="mt-8">
    {MelanomaContentVisible && <Melanoma />}
    {AcneContentVisible && <Acne />}
    {ActinicContentVisible && <Actinic />}
    {BasalContentVisible && <Basal />}
    {BenignContentVisible && <Benign />}
    {AtopicContentVisible && <Atopic />}
  </div>
</div>


  
  );
}


export default About

