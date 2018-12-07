import React, { Component } from 'react';
import KeyboardHeader from './components/keyboardHeader';
import DialLine from './components/dialLine';
import Keypad from './components/keypad';
import DirectLine from './components/directLine';
import styles from './keyboard.module.scss';
import CallButton from './components/callButton';
import Menu from '../commons/components/menu/menu';
import SelectionModal from '../selectionModal';


class Keyboard extends Component {
  render() {
    return (
      <div className={styles.keyboard}>
        <KeyboardHeader />
        <DialLine />
        <Keypad />
        <DirectLine />
        <CallButton />
        <Menu />
        <SelectionModal />
      </div>
      
    );
  }
}

export default Keyboard;