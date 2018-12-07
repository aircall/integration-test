import React, { Component } from 'react';
import styles from './modalHeader.module.scss';
import avatar from '../../../images/avatar.png';
import mic from '../../../images/mic.png';

class ModalHeader extends Component {

	_closeModal() {
        const div = document.getElementById("modal");
        div.style.marginTop = "666px";  
	}
    render() {
      return (
        <div className={styles.header}>
          <div className={styles.back}>
            <button onClick={this._closeModal}>Cancel</button>
          </div>
          <div className={styles.title}><h1>Select your line</h1></div>         
        </div>
      );
    }
  }
  
  export default ModalHeader;