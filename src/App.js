import React from 'react';
import styled, { ThemeProvider} from 'styled-components';
import "./container/UI/Theme";

import styledButton from './container/UI/Buttons';

import './App.scss';
import firebase from "./config/fire";
import Layout from './components/Layout/Layout';
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Try from './Try';
import StyledButton from './container/UI/Buttons';

import theme from './container/UI/Theme';

// theme


// firebase.firestore().collection('times').add({
//   title: 'hello world',
//   hello: 'world'
// })

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyledButton>Lalal</StyledButton>
        <Layout/>
        <Try/>
    </ThemeProvider>, 

    </div>
  );
}

export default App;
