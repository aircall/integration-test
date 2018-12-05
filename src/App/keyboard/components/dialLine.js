import React, { Component } from 'react';
import styles from '../keyboard.module.scss';
import flag_us from '../../../images/flag_us.png';

class DialLine extends Component {
    render() {
      return (
        <div className={styles.dialine}>
          <span className={styles.us_prefix}></span>
            <input type="text" name="dial"  placeholder="Try a contact name or number" />
          
        </div>
      );
    }
  }
  
  export default DialLine;