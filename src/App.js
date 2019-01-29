import React, { Component } from 'react';
import styles from './App.css';
import FilmList from './components/filmList/FilmList';
import Auth from './components/auth/Auth';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
          <FilmList/>
          <Auth/>
      </div>
    );
  }
}

export default App;
