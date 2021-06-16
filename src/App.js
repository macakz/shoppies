import { useState } from 'react'
import axios from 'axios'
import './App.css';
import _ from "lodash";
import {GrTrophy} from 'react-icons/gr'

function App () {

  const [search, setSearch] = useState('')
  const [searchResultData, setSearchResultData] = useState('')
  const [nominate, setNominate] = useState('')

  const sendQuery = async (query) => {
    let data = await axios.get(`https://www.omdbapi.com/?apikey=9ded3126&s=${query}`)
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

  const removeFromNominationList = ( index) => {
    let nominationList = [...nominate]

    if (index !== -1) {
      nominationList.splice(index, 1)
      setNominate(nominationList)
    }
  }
  const removalAlert = (item, index) => {
    alert(`${item.Title} has been removed from your nomination list`)
    removeFromNominationList(item,index)
  }
  const disableHandler = (item) => {
    return nominate.includes(item) || nominate.length >= 5
  }
  return (
    <div className="App">
      <div className="headingContainer">
        <h1 className="heading">The Shoppies</h1>
        <input
          className="search"
          placeholder= "Please enter a movie title..."
          type="search"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {
        searchResultData
          ?
          <p>Results for: <b>"{search}"</b></p>
          : <div></div>
      }
      
      {
        nominate.length > 4 ?
          <div>
            <p className="limit">Limit of 5 reached. Please remove one choice if you wish to choose another</p>
          </div>
          : null
      }
      <div className="listContainer">
        <div className="movieSearchList">
          {
            !searchResultData
              ?
              <div></div>
              :
              searchResultData.map((item) => {
                return (
                  <>
                    <div className="searchContainer">
                      <a href={`https://www.imdb.com/title/${item.imdbID}`}>
                        <h1 className="title">{item.Title}</h1>
                        <img className="poster" src={item.Poster} alt="movie poster" />
                      </a>
                      <div className="addButtonContainer">
                        <button className="addButton" disabled={disableHandler(item)} onClick={() => addToNominationList(item)}>Nominate</button>
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
              <h1>test</h1>
              &&
              nominate.map((item, index) => {
                return (
                  <>
                    <div className="nominationContainer">
                      <a href={`https://www.imdb.com/title/${item.imdbID}`}>
                      <GrTrophy  className="trophyIcon" />
                        <h1 className="title">{item.Title}</h1>
                        <h2 className="releaseDate"> Released: {item.Year}</h2>
                      </a>
                      <div className="removeButtonContainer">
                        <button className="removeButton" onClick={() => removalAlert(item,index)}>Remove</button>
                      </div>
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
