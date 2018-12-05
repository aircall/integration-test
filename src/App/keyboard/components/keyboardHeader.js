import React, { Component } from 'react';
import styles from '../keyboard.module.scss';
import avatar from '../../../images/avatar.png';
import mic from '../../../images/mic.png';

class KeyboardHeader extends Component {
    render() {
      return (
        <div className={styles.header}>
          <div className={styles.user}>
            <img src={avatar} alt="Avatar" />
          </div>
          <div className={styles.title}><h1>Keyboard</h1></div>
          <div className={styles.mike}>
            <a href="">
              <img src={mic} alt="Micro" />
            </a>
          </div>

          
        </div>
      );
    }
  }
  
  export default KeyboardHeader;