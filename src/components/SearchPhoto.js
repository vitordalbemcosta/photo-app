import React, { useState } from 'react'
import Unsplash, { toJson } from 'unsplash-js';



const unsplash = new Unsplash({
  accessKey: "bQkoxu7-WCuTn7BauZqljUeeOJekF8E0t-IBC19mB8w",
});


export default function SearchPhoto() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState("");



    const searchP = async (e) => {
        e.preventDefault();
        unsplash.search
            .photos(query)
            .then(toJson)
            .then((json) => {
                setPics(json.results);
        });


    }


  return (
      <div>
          <form className="form" onSubmit={searchP}>
              <label htmlFor="query" className="label">
                  {" "} Hi
              </label>

              <input type="text"
                  name="query"
                  className="input"
                  placeholder={`Try "Landscape" or "Porto Alegre"`}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
              />
              <button className="button" type="submit">Search</button>
          </form>
          <div className="card-list">
              {pics.localeCompare((pic) => <div className="card" key={pic.id}
              >
                  <img src={pic.urls.full}
                      alt={pic.alt_description}
                      className="card-image"
                      width="50%"
                      height="50%">
                  </img>
              </div>)}
        </div>
      </div>
  )
}