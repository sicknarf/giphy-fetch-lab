import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar';
import GifList from './GifList';

function App() {

  const [search, SetSearch] = useState({parameter: ""})

  const [results, SetResults] = useState()

  const BASE_URL = process.env.API_KEY



  // json = async(data) => {
  //   const objects = fetch('')
  //   .then((response)=> response.json())
  //   .then((data)=> console.log(data))  
  // }

  // const json = fetch('')
  //   .then((response)=> response.json())
  //   .then((data)=> console.log(data))


  function handleChange(e){
    SetSearch({...search, [e.target.name]:e.target.value})
    let SEARCH_URL = BASE_URL + e.target.value
    // function SEARCH_URL(searchParam){
    //   return(String(process.env.API_KEY) + searchParam)
    // }
    console.log(SEARCH_URL(e.target.value))
    fetch(SEARCH_URL)
      .then((response)=> response.json())
      .then((data)=> SetResults(data.data))
  }

  return (
    <div className="App">
      <h1>hello.</h1>
      <SearchBar 
        search={search}
        handleChange={handleChange}/>
      <GifList results={results}/>
    </div>
  );
}

export default App;