import './App.css';
import axios from 'axios'

function App () {

  const getMovie = async () => {

    let movieData = await axios.get("http://www.omdbapi.com/?apikey=9ded3126&s=band of brothers")
    console.log(movieData.data.Search)
  }

  getMovie()
  return (
    <div className="App">
      <h1>The Shoppies</h1>
    </div>
  );
}

export default App;
