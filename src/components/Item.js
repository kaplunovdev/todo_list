import React from 'react';
import {Checked} from './App';
import '../css/style.css';



  const Item = ({ elem, check })=> {
    if (elem.active === false) {
    }
    //console.log(items)
    return (
      <li className="item">
        <div className="item__left">
          <input className="checkbox" type="checkbox" onChange={() => Checked(elem.id)} />
          <span className="text">{elem.text}</span>
        </div>
        <button></button>
      </li>
    )
  
  }
  export default Item;