import React, { Component } from 'react';
import styles from './styles.module.scss';
import ModalHeader from './components/modalHeader';
import Search from '../commons/components/search/search';
import ListItem from '../commons/components/list-item/listItem';

class SelectionModal extends Component {
  render() {

    const options =[
      {
        name: "Lea Direct Line",
        number: "+33 1 45 12 45 12",
        country: "FR"
      },
      {
        name: "Sales US",
        number: "+1 4511121",
        country: "US"
      },
      {
        name: "Sales FR",
        number: "+33 1 45 12 45 12",
        country: "FR"
      }
    ]

    return (
      <div id="modal" className={styles.modal}>
        <ModalHeader />
        <Search />
        <div className={styles.selectionOptions}>
          <h1>Your lines</h1>
          {options.map( (option, i) => <ListItem key={i} option={option} />)}
        </div>
        
      </div>
    );
  }
}

export default SelectionModal;
