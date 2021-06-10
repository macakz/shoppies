import { useState } from 'react'
import axios from 'axios'
import './App.css';
import _ from "lodash";

function App () {

  const [search, setSearch] = useState('')
  const [searchResultData, setSearchResultData] = useState('')

  const sendQuery = async (query) => {
    let data = await axios.get(`http://www.omdbapi.com/?apikey=9ded3126&s=${query}`)
    let movieData = data.data.Search
    setSearchResultData(movieData)
  }
  const delayedQuery = _.debounce(q => sendQuery(q), 500);

  const handleSearch = (e) => {
    setSearch(e.target.value)
    delayedQuery(e.target.value)
  }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <h3>Movie Title:</h3>
      <input
        type="search"
        value={search}
        onChange={handleSearch}
      />
      {
        searchResultData
          ?
          <div>Results for: <b>{search}</b></div>
          : <div></div>
      }
      <div>
        {
          !searchResultData
            ?
            <div>Please enter a movie name</div>
            :
            searchResultData.map((item, index) => {
              return (
                <>
                  <div class="container">
                    <a href={`https://www.imdb.com/title/${item.imdbID}`}>
                      <h1>Title: {item.Title}</h1>
                      <h2> Released: {item.Year}</h2>
                      <h3> Type: {item.Type}</h3>
                      <img src={item.Poster} alt="movie poster" />
                    </a>
                    <button>Nominate</button>
                  </div>
                </>
              )
            })
        }
      </div>
    </div >
  );
}

export default App;
