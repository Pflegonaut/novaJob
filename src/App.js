import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyCI3ayGUj_SqmP1kXou0VBWtnLcoggn9PY",
      authDomain: "novahealnovajob.firebaseapp.com",
      databaseURL: "https://novahealnovajob.firebaseio.com",
      projectId: "novahealnovajob",
      storageBucket: "novahealnovajob.appspot.com",
      messagingSenderId: "881927535319",
      appId: "1:881927535319:web:486d87ad03ba3a072dce92",
      measurementId: "G-QTNXBXSV60"
    });

class App extends Component {
  constructor (props) {
    super(props);  

  this.state = {
    isSignedIn : false
  }
}

uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: () => false
  }
}

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(
      user => {
        this.setState({isSignedIn: !!user})
      }
    )
  }

  render() {
    return (
     <div className="App">
     {this.state.isSignedIn ? (
       <span>
          <div>Signed In!</div>
          <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
       </span>
     ) :
     (
       <StyledFirebaseAuth 
         uiConfig = {this.uiConfig}
         firebaseAuth = {firebase.auth()}
       />
     )}
    
     </div>
    )
}
}


export default App;
