import axios from 'axios';
import React , { useState, useEffect } from 'react';
import Articles from './ArticleList';
import "./App.css";
//import "./styles.css";

function App() {
  const [posts, setPosts] = useState([]); 
  const [url, setUrl] = useState('');
  
 
  useEffect(() => {
    // eslint-disable-next-line no-useless-concat
    let urlFinal = "http://hn.algolia.com/api/v1/search?tags=" + url;
   // debugger;
    console.log(urlFinal);
    axios.get(urlFinal)
    .then((res) => {
      let input = res.data.hits;
      setPosts(input);
      console.log(input);
  })
  }, [url]);

    return (
    <div>
      <header className='App-header'>
      </header>
      <div className='container'>
        <div className='App-ul'>
          <ul>
            <div className='App-li'>
              <li onClick={() => setUrl("story")}>
                Story
              </li>
              <li onClick={() => setUrl("poll")}>
                Poll
              </li>
              <li onClick={() => setUrl("comment")}>
                Comment
              </li>
              <li onClick={() => setUrl("pollopt")}>
                Pollopt
              </li>
              <input type="text"  />
              <button onClick={() => alert('Search')}>Search</button>
            </div>
          </ul>
        </div>
      </div>
        <Articles posts={posts}/>      
    </div>
  );
}

export default App;
