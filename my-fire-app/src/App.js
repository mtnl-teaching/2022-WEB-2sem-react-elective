import React, {useEffect, useState} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, query, onSnapshot } from "firebase/firestore";
import "./App.css"
import Tweet from './components/Tweet';
import CreateTweet from './components/CreateTweet';

const firebaseConfig = {
  apiKey: "AIzaSyAhXNtH86zW_P3bteYaLdWbTUgy7DQ-70c",
  authDomain: "react-teaching.firebaseapp.com",
  projectId: "react-teaching",
  storageBucket: "react-teaching.appspot.com",
  messagingSenderId: "756104532290",
  appId: "1:756104532290:web:48c3f00604aab2f559b8db"
};

function App() {
  // Auth setup
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // Firestore setup
  const db = getFirestore(app)
  const tweetsCol = collection(db, "tweets");
  // State setup
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    // Loads my tweets on startup
      // getDocs(tweetsCol)
      //     .then((snapshot) => {
      //       setTweets(transformTweets(snapshot))
      //     })
  }, [])

  useEffect(() => {
    const unsubscribe = onSnapshot(query(tweetsCol), (querySnapshot) => {
      setTweets(transformTweets(querySnapshot))
    });
    return () => {
      unsubscribe();
    }
  }, [])

  function transformTweets(snapshot) {
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    .sort((a,b) => b.createdAt - a.createdAt)
  }

  function handleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
        alert("error")
      })
  }

  function handleSignOut() {
    signOut(auth)
      .then(success => {
        setUser(undefined)
      })
  }

  onAuthStateChanged(auth, user => {
    // console.log("auth changed", user)
  })

  function createTweet(data) {
    const newTweet = {
      ...data,
      user: user.displayName,
    }
    addDoc(tweetsCol, newTweet)
    // .then(docRef => {
    //   setTweets(oldTweets => {
    //     return [{...newTweet, id: docRef.id}, ...oldTweets]
    //   })
    // })
  }

  return (
    <div className='container'>
      <div className='title'>
        <h1>Fake Twitter</h1>
        {!user && <button onClick={handleLogin}>Sign in</button>}
        {user && <button onClick={handleSignOut}>Sign out</button>}
      </div>
      <div className='tweets'>
        {user && <CreateTweet createTweet={createTweet}/>}
        {
          tweets.map(tweet => {
            return <Tweet key={tweet.id} title={tweet.user} description={tweet.message} />
          })
        }
      </div>
    </div>
  );
}

export default App;
