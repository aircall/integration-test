import React, { Component } from 'react';
import styles from './callButton.module.scss';
import call from '../../../images/call.png';

class CallButton extends Component {
    render() {

			return (
				<div className={styles.callButton}>
					<button>
						<img src={call} alt="Call" />
					</button>
				</div>
			);
    }
  }
  
  export default CallButton;