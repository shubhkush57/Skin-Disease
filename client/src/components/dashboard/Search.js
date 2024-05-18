import { useState } from "react";
import React from "react";
function Search() {

  const [search , setSearch] = useState("");
  const [results , setResults] = useState([]);
  const [searchInfo , setSearchInfo] = useState({});

  const handleSearch = async e => {
    e.preventDefault();
    if(search === '') return;
  
      const url = "https://en.wikipedia.org/w/api.php";

      const params = new URLSearchParams({
        action: 'query',
        list: "search",
        srsearch: search,
        srlimit: 20,
        format: "json",
        origin: "*"
      })

      const response = await fetch(`${url}?${params}`);
      console.log(response);
      if(!response.ok){
        throw Error(response.statusText);
      }
      const json = await response.json();

      await setResults(json.query.search);
      await setSearchInfo(json.query.searchinfo);
      // console.log(results);
      
  }

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
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      {searchInfo.totalhits ? <p className="mt-2 text-gray-600 dark:text-gray-400">Search Results: {searchInfo.totalhits}</p> : ''}
    </div>
  </header>

  <div className="container mx-auto px-4 py-6">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result ,i) => {
        const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
        return (
          <div key={i} className="bg-white dark:bg-gray-900 shadow-md rounded-md p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{result.title}</h3>
            {/* <p className="text-gray-700 dark:text-gray-300">{result.snippet}</p> */}
            <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="mt-2 block text-blue-500 hover:underline dark:text-blue-400">Read More</a>
          </div>
        )
      })}
    </div>
  </div>
</div>

  );
}

export default Search;