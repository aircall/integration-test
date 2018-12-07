import React, { Component } from 'react';
import styles from './keypad.module.scss';

class Keypad extends Component {
    render() {
      const keypadList = [
        { "num": "1" },
        { 
          "num": "2",
          "letters": "ABC"
        },
        { 
          "num": "3",
          "letters": "DEF"
        },
        { 
          "num": "4",
          "letters": "GHI"
        },
        { 
          "num": "5",
          "letters": "JKL"
        },
        { 
          "num": "6",
          "letters": "MNO"
        },
        { 
          "num": "7",
          "letters": "PQRS"
        },
        { 
          "num": "8",
          "letters": "TUV"
        },
        { 
          "num": "9",
          "letters": "WXYZ"
        },
        { 
          "num": "*"
        },
        { 
          "num": "0"
        },
        { 
          "num": "#"
        }
      ];
        

      return (
          <div className={styles.keypad}>
            {keypadList.map( (item, i) => <button key={i}>{item.num}<span>{item.letters}</span></button>)}
          </div>
      );
    }
  }
  
  export default Keypad;