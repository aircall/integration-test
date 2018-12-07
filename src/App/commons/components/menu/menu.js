import React, { Component } from 'react';
import styles from './menu.module.scss';
import bell from '../../../../images/bell.png';
import history from '../../../../images/history.png';
import keypad from '../../../../images/keypad.png';
import users from '../../../../images/users.png';
import status from '../../../../images/status.png';

class Menu extends Component {

	render() {
	  return (
		<div className={styles.menu}>
			<ul>
        <li className={styles.todo}>
          <img src={bell} alt="Notifications" />
          <span>To-do</span>
        </li>
        <li className={styles.history}>
          <img src={history} alt="History" />
          <span>History</span>
        </li>
        <li  className={styles.keypad}>
          <img src={keypad} alt="Keypad" />
          <span>Keypad</span>
        </li>
        <li  className={styles.contact}>
          <img src={users} alt="Contact" />
          <span>Contacts</span>
        </li>
        <li  className={styles.status}>
          <img src={status} alt="Status" />
          <span>Status</span>
        </li>
			</ul>
		</div>
	  );
	}
  }
  
  export default Menu;