import React, { Component } from 'react';
import KeyboardHeader from './components/keyboardHeader';
import DialLine from './components/dialLine';
import Keypad from './components/keypad';
import styles from './keyboard.module.scss';


class Keyboard extends Component {
    render() {
      return (
        <div className={styles.keyboard}>
            <KeyboardHeader />
            <DialLine />
            <Keypad />
        </div>
        
      );
    }
  }
  
  export default Keyboard;