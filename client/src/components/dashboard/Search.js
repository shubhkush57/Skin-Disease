import { useState } from "react";
import React from "react";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [images, setImages] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === '') return;

    const wikipediaUrl = "https://en.wikipedia.org/w/api.php";
    const unsplashUrl = "https://api.unsplash.com/search/photos";

    const wikipediaParams = new URLSearchParams({
      action: 'query',
      list: "search",
      srsearch: search,
      srlimit: 20,
      format: "json",
      origin: "*"
    });

    const unsplashParams = {
      query: search,
      per_page: 10,
      client_id: "3Tc7b2Jh72QOLaqgNhXg0AB4vJZ0gj4m8nq5jxGl5ss"
    };

    try {
      const [wikipediaResponse, unsplashResponse] = await Promise.all([
        fetch(`${wikipediaUrl}?${wikipediaParams}`),
        axios.get(unsplashUrl, { params: unsplashParams })
      ]);

      if (!wikipediaResponse.ok) {
        throw new Error(wikipediaResponse.statusText);
      }

      const wikipediaJson = await wikipediaResponse.json();
      setResults(wikipediaJson.query.search);
      setSearchInfo(wikipediaJson.query.searchinfo);
      setImages(unsplashResponse.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Disease Encyclopedia</h1>
          <form className="mt-4" onSubmit={handleSearch}>
            <input
              type="search"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500 dark:text-white dark:bg-gray-800"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          {searchInfo.totalhits ? <p className="mt-2 text-gray-600 dark:text-gray-400">Search Results: {searchInfo.totalhits}</p> : ''}
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result, i) => {
            const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
            return (
              <div key={i} className="bg-white dark:bg-gray-900 shadow-md rounded-md p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{result.title}</h3>
                <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="mt-2 block text-blue-500 hover:underline dark:text-blue-400">Read More</a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Related Images</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 shadow-md rounded-md p-4">
              <img src={image.urls.small} alt={image.alt_description} className="w-full h-auto rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
