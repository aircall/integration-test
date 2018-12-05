import React, { Component } from 'react';
import styles from './styles.module.scss';
import avatar from '../images/avatar.png';
import Keyboard from './keyboard';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Keyboard />
      </div>
    );
  }
}

export default App;
