import React, { Component } from 'react';
import styles from './listItem.module.scss';

class ListItem extends Component {

  render() {

    return (
      <div className={styles.listItem}>
        <button  class={this.props.option.country}>
            <span className={styles.name}>{this.props.option.name}</span>
            <span className={styles.number}>{this.props.option.number}</span>
        </button>
          
      </div>
    );
  }
}

export default ListItem;