import React, { Component } from 'react';
import styles from './directLine.module.scss';

class DirectLine extends Component {
    constructor(){
        super();
        this.state = {name: "Lea", number: "+33 1 45 12 45 45"};
    }
	_openModal() {
        const div = document.getElementById("modal");
        div.style.marginTop = "0";  
	}

    render() {

        return (
            <div className={styles.directLine}>
                <button onClick={this._openModal}>
                    <span className={styles.name}>{this.state.name} Direct line</span>
                    <span className={styles.number}>{this.state.number}</span>
                </button>
                
            </div>
        );
    }
  }
  
  export default DirectLine;