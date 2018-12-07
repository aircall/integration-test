import React, { Component } from 'react';
import styles from './styles.module.scss';
import Keyboard from './keyboard';
import SelectionModal from './selectionModal';

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
