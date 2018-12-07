import React, { Component } from 'react';
import styles from './search.module.scss';

class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
        <input type="text" name="search"  placeholder="Search for a line" />
      </div>
    );
  }
}

export default Search;