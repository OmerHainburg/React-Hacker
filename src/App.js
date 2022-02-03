import './App.css';
//import Fetch from './Fetch';
import axios from 'axios';
import React , { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    axios.get('http://hn.algolia.com/api/v1/search?query=react')
    .then((res) => {
      let input = res.data.hits;
      setPosts(input);
      console.log(input);
  })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker News</h1>
      </header>
    </div>
  );
}

export default App;
