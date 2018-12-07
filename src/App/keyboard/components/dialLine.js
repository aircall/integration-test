import React, { Component } from 'react';
import styles from './dialLine.module.scss';

class DialLine extends Component {
    render() {
      return (
        <div className={styles.dialLine}>
          <span className={styles.us_prefix}></span>
            <input type="text" name="dial"  placeholder="Try a contact name or number" />
          
        </div>
      );
    }
  }
  
  export default DialLine;