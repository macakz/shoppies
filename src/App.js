import { useState } from 'react'
import axios from 'axios'
import './App.css';
import _ from "lodash";

function App () {

  const [search, setSearch] = useState('')
  const [searchResultData, setSearchResultData] = useState('')
  const [nominate, setNominate] = useState('')

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

  const addToNominationList = (item) => {
    setNominate([...nominate, item])
  }

  const removeFromNominationList = (item, index) => {
    let nominationList = [...nominate]

    if (index !== -1) {
      nominationList.splice(index, 1)
      setNominate(nominationList)
    }
  }

  return (
    <div className="App">
      <div className="searchArea">
        <h1>The Shoppies</h1>
        <h3>Movie Title:</h3>
        <input
          className="search"
          type="search"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {
        searchResultData
          ?
          <p>Results for: <b>{search}</b></p>
          : <div></div>
      }
      <div className="listContainer">
        <div className="movieSearchList">
          {
            !searchResultData
              ?
              <p>Please enter a movie name</p>
              :
              searchResultData.map((item, index) => {
                return (
                  <>
                    <div className="container">
                      <a href={`https://www.imdb.com/title/${item.imdbID}`}>
                        <h1 className="title">{item.Title}</h1>
                        <h2 className="releaseDate"> Released: {item.Year}</h2>
                        <h3 className="type"> Type: {item.Type}</h3>
                        <img className="poster" src={item.Poster} alt="movie poster" />
                      </a>
                      <div>
                        <button className="mainButton" disabled={nominate.includes(item)} onClick={() => addToNominationList(item)}>Nominate</button>
                      </div>
                    </div>
                  </>
                )
              })
          }
        </div>

        <div className="nominationList">
          {
            !nominate
              ?
              <div></div>
              :
              nominate.map((item, index) => {
                return (
                  <>
                    <div className="container">
                      <a href={`https://www.imdb.com/title/${item.imdbID}`}>
                        <h1 className="title">{item.Title}</h1>
                        <img className="poster" src={item.Poster} alt="movie poster" />
                      </a>
                      <button className="mainButton" onClick={() => removeFromNominationList(index)}>Remove</button>
                      
                    </div>
                  </>
                )
              })
          }
        </div>
      </div>
    </div >
  );
}

export default App;
