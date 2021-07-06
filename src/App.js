import React, { useState, useEffect } from 'react'; 
import './App.css';
import Post from './Post.js';
import {db} from './firebase';

function App() {
   const [posts, setPosts] = useState([]);
  //use Effect runs a piece of code based on a specific condition
  useEffect(() => {
    //this is where code runs
    db.collection('posts').onSnapshot(snapshot => {
   setPosts(snapshot.docs.map(doc => doc.data()))

    })
  //every single time a file or something is added the snapshot will get it updated
  }, []);
  return (
    <div className="App">
      
      
      <div className="app__header">

        <img 
        className="app__headerImage"
        src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRp_hb4l2x2bJgZH5xtXi6u8j5-OfF7OuphM8l1Hbayw0GNWLV1vlGYknHN51iBw2bWTI&usqp=CAU"
        height="50px"
        alt=""
        />
        </div>
        I am Going to build an instagram clone!!!

    </div>
  );
}
 
export default App;
