import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <>
          <Header/>
          <Main/>
          <Footer/>
      </>
    );
  }
}

export default App;
