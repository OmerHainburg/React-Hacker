import axios from 'axios';
import React , { useState, useEffect } from 'react';
import Articles from './ArticleList';
import "./App.css";
//import "./styles.css";

function App() {
  const [posts, setPosts] = useState([]); 
  const [query, setQuery] = useState('');
  
 
  useEffect(() => {
    //alert(query);
    axios.get('http://hn.algolia.com/api/v1/search?query=story')
    .then((res) => {
      let input = res.data.hits;
      setPosts(input);
      console.log(input);
  })
  }, []);


   return (
    <div >
      <header className='App-header'>
      <ul>
        {/* <li value="Omer" onClick={click}><a href='./ArticleList.js' >Omer</a></li>  */}
        <li onClick={() => setQuery("http://hn.algolia.com/api/v1/search?query=story")}><a href='./ArticleList.js'>Story</a></li>
        <li onClick={() => setQuery("http://hn.algolia.com/api/v1/search?query=polls")}><a href='./ArticleList.js'>Poll</a></li>
        <li onClick={() => setQuery("http://hn.algolia.com/api/v1/search?query=comment")}><a href='./ArticleList.js'>Comment</a></li>
        <li onClick={() => setQuery("http://hn.algolia.com/api/v1/search?query=pollopt")}><a href='./ArticleList.js'>Pollopt</a></li>
      </ul>
        <Articles posts={posts}/>      
      </header>
    </div>
  );
}

export default App;
