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

      if(!response.ok){
        throw Error(response.statusText);
      }
      const json = await response.json();
      await setResults(json.query.search);
      await setSearchInfo(json.query.searchinfo);
      // console.log(results);

  }

  return (

    <div className="App">
      <header>
        <h1>Disease Encyclopedia</h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input 
            type="search" 
            placeholder="What are looking for?"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>

        { (searchInfo.totalhits) ? <p>Search Results: {searchInfo.totalhits}</p>:'' }
      </header>

      <div className="results">
        {results.map((result ,i) => {

          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

          return (
            <div className="result" key={i}>
            <h3>{result.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            <a href={url} target="_blank" rel="nofollow">Read More</a>
          </div>
          )
        })}
        
      </div>
    </div>
  );
}

export default Search;