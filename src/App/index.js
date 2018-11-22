import React, { Component } from 'react';
import styles from './styles.module.scss';
import avatar from '../images/avatar.png';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <img src={avatar} />
      </div>
    );
  }
}

export default App;
