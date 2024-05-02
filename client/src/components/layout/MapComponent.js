import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const setting = {
      "query": "MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh, India",
      "width": 712,
      "height": 686,
      "satellite": false,
      "zoom": 10,
      "placeId": "ChIJpYQMnnjKmjkRCL8pdTpzJyw",
      "cid": "0x2c27733a7529bf08",
      "coords": [25.4918881, 81.86750959999999],
      "cityUrl": "/india/prayagraj-40809",
      "cityAnchorText": "Map of Prayagraj, Uttar Pradesh, India",
      "lang": "us",
      "queryString": "MNNIT Allahabad Campus, Teliarganj, Prayagraj, Uttar Pradesh, India",
      "centerCoord": [25.4918881, 81.86750959999999],
      "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
      "embed_id": "1104450"
    };

    const script = document.createElement('script');
    script.src = 'https://1map.com/js/script-for-user.js?embed_id=1104450';
    script.async = true;
    script.onload = () => {
      window.OneMap.initMap(setting);
    };

    document.getElementById('wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3').appendChild(script);

    return () => {
      // Cleanup function to remove the script when the component unmounts
      document.getElementById('wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3').removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
      <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
      <a href="https://1map.com/map-embed">1 Map</a>
    </div>
  );
};

export default MapComponent;
