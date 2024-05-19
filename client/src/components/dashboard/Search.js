import { useState } from "react";
import React from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState([]);
  const [images, setImages] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === '') return;

    const wikipediaUrl = "https://en.wikipedia.org/w/api.php";

    const wikipediaParams = new URLSearchParams({
      action: 'query',
      list: "search",
      srsearch: search,
      srlimit: 20,
      format: "json",
      origin: "*"
    });

    try {
      const response = await fetch(`${wikipediaUrl}?${wikipediaParams}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setResults(json.query.search);
      setSearchInfo(json.query.searchinfo);

      // Fetch images and additional content for each search result
      const contentRequests = json.query.search.map(async (result) => {
        const imageParams = new URLSearchParams({
          action: 'query',
          titles: result.title,
          prop: 'pageimages|extracts',
          format: 'json',
          pithumbsize: 300,
          origin: '*',
          exintro: true,
          explaintext: true
        });

        const contentResponse = await fetch(`${wikipediaUrl}?${imageParams}`);
        const contentJson = await contentResponse.json();
        const pages = contentJson.query.pages;
        const page = Object.values(pages)[0];
        
        return {
          image: page.thumbnail ? page.thumbnail.source : null,
          description: page.extract
        };
      });

      const fetchedContents = await Promise.all(contentRequests);
      const fetchedImages = fetchedContents.map(content => content.image);
      const fetchedDescriptions = fetchedContents.map(content => content.description);

      setImages(fetchedImages);
      setDescriptions(fetchedDescriptions);
      
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
        <div className="space-y-6">
          {results.map((result, i) => {
            const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
            return (
              <div key={i} className="bg-white dark:bg-gray-900 shadow-md rounded-md p-4 flex space-x-4 items-start transition duration-500 ease-in-out transform hover:scale-105">
                {images[i] && (
                  <div className="flex-none">
                    <img src={images[i]} alt={result.title} className="w-32 h-32 object-cover rounded-md" />
                  </div>
                )}
                <div className="flex-auto">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{result.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2" dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                  {descriptions[i] && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{descriptions[i]}</p>
                  )}
                  <a
                  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                  href={url}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span
                    className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
                  ></span>

                  <span
                    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                  >
                    Read More
                  </span>
                </a>
                  {/* <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-400">Read More</a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
